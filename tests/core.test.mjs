import test from 'node:test';
import assert from 'node:assert/strict';
import {photoKey,matchPhoto,selectViewpointFeatures,classifyObj,parseFirstObjVertex,getObjCoordinateFrame,projectedVertex,rebaseObjForMap,wrapDegrees} from '../js/core.js';
const file=(path)=>({name:path.split('/').pop(),webkitRelativePath:path});
test('matches TorRiv.M with nested date folder and no extension in 360IMG',()=>{
  const list=[file('Views and Vistas/20260710/IMG_20260709_125554_00_013.jpg')];
  assert.equal(matchPhoto('20260710/IMG_20260709_125554_00_013',list),list[0]);
});
test('matches case-insensitively and permits duplicate viewpoints to use same photograph',()=>{
  const list=[file('Root/20260505/STKE60-2.jpg')];
  assert.equal(matchPhoto('20260505/stke60-2',list),list[0]);
  assert.equal(matchPhoto('20260505/STKE60-2.jpg',list),list[0]);
});
test('ambiguous filename fallback never guesses',()=>{
  const list=[file('folder1/same.jpg'),file('folder2/same.jpg')];
  assert.equal(matchPhoto('same.jpg',list),null);
});
test('duplicate VIEW_ID favours record with photo and positive height',()=>{
  const f=(p)=>({type:'Feature',geometry:{type:'Point',coordinates:[138,-34]},properties:{VIEW_ID:'MonH.A',...p}});
  const data=[f({ALTITUDE_1:0,'360IMG':''}),f({ALTITUDE_1:41,'360IMG':'20260505/STKE21-2'})];
  assert.equal(selectViewpointFeatures(data)[0],data[1]);
});
test('OBJ class is determined by filename or folder',()=>{
  assert.equal(classifyObj('Park_10/Points/Park_10__TorRiv.M__Points.obj'),'Points');
  assert.equal(classifyObj('Park_10/Viewsheds/Park_10__TorRiv.M__Viewsheds.obj'),'Viewsheds');
  assert.equal(classifyObj('Park_10/Frustums/Park_10__TorRiv.M__Frustums.obj'),'Frustums');
  assert.equal(classifyObj('lod/Building001.obj'),'Other');
});
test('raw MGA OBJ becomes compact local vertices retaining height and orientation',()=>{
  const raw='v 281387.406250 6134191.000000 26.393936\nv 281218.156250 6134131.500000 128.007584\nvn -0.3330 0.9429 -0.0000\nf 1//1 2//1 1//1';
  const first=parseFirstObjVertex(raw);
  const frame=getObjCoordinateFrame(first,null);
  assert.equal(frame,'RAW_ENH');
  assert.deepEqual(projectedVertex(first,frame,null),first);
  const converted=rebaseObjForMap(raw,first.slice(0,2),frame,null);
  assert.equal(converted.vertexCount,2);
  assert.match(converted.text,/v 0\.00000 26\.39394 0\.00000/);
  assert.match(converted.text,/v -169\.25000 128\.00758 -59\.50000/);
  assert.match(converted.text,/vn -0\.3330 -0\.0000 0\.9429/);
});
test('local XYZ requires reference and reconstructs projected coordinates',()=>{
  const ref={scene_origin:{easting_m:'281849.6765341535',northing_m:'6134404.409386028',height_m:'0'},lod_source_frame:'SCENE_LOCAL'};
  const first=[-100,-200,20];
  assert.equal(getObjCoordinateFrame(first,ref),'SCENE_LOCAL');
  const [e,n,h]=projectedVertex(first,'SCENE_LOCAL',ref);
  assert.ok(Math.abs(e-281749.6765341535)<.00001);assert.ok(Math.abs(n-6134204.409386028)<.00001);assert.equal(h,20);
  assert.throws(()=>getObjCoordinateFrame(first,null),/Supply export_reference/);
});
test('path/case normalization and compass wrap',()=>{
  assert.equal(photoKey('20260501\\STKE43-1.JPG'),'20260501/stke43-1');
  assert.equal(wrapDegrees(-10),350);
});
