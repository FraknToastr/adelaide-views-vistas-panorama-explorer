import test from 'node:test';
import assert from 'node:assert/strict';
import {buildLocations,checkboxState,setLayersVisible,inheritVisibility,createPhotoIndex,VisibilityIntents} from '../js/layers.js';
import {collectPanoramaFiles,readShapefiles} from '../js/importers.js';

const point=(id,extra={})=>({type:'Feature',properties:{VIEW_ID:id,PARK_NAME:'Park 10',...extra},geometry:{type:'Point',coordinates:[138.6,-34.92]}});
const cone=(id)=>({type:'Feature',properties:{VIEW_ID:id},geometry:{type:'Polygon',coordinates:[[[138.6,-34.92],[138.61,-34.92],[138.6,-34.91],[138.6,-34.92]]]}});
test('location grouping retains all cone rows and explicitly exposes independent OBJ layers',()=>{
  const points=[point('TorRiv.M',{CONE_NO:1}),point('TorRiv.M',{CONE_NO:2,'360IMG':'date/photo'})];
  const objects=['Points','Viewsheds','Frustums'].map(type=>({id:type,name:'Park_10__TorRiv.M__'+type+'.obj',type,viewId:'TorRiv.M'}));
  const locations=buildLocations(points,[cone('TorRiv.M'),cone('TorRiv.M')],objects);
  const location=locations.get('TorRiv.M');
  assert.equal(location.pointRecords.length,2);assert.equal(location.cones.length,2);
  assert.equal(location.point,points[1]);assert.equal(location.label,'Park 10');
  assert.equal(location.layers.filter(l=>l.source==='obj').length,3);
  assert.deepEqual(location.layers.filter(l=>l.source==='obj').map(l=>l.kind),['point','viewshed','frustum']);
});
test('mixed parent state and bulk toggles synchronize individual 2D and 3D leaves',()=>{
  const locations=buildLocations([point('A')],[cone('A')],[{id:'a.obj',viewId:'A',type:'Viewsheds',name:'a.obj'}]);
  const layers=locations.get('A').layers,visibility=new Map();
  assert.equal(checkboxState(layers,visibility).checked,true);
  setLayersVisible([layers[0]],visibility,false);
  assert.equal(checkboxState(layers,visibility).indeterminate,true);
  setLayersVisible(layers,visibility,false);
  assert.deepEqual(checkboxState(layers,visibility),{checked:false,indeterminate:false,disabled:false});
  setLayersVisible(layers,visibility,true);assert.equal(checkboxState(layers,visibility).checked,true);
  assert.equal(checkboxState([],visibility).disabled,true);
});
test('OBJ-only locations and unassociated files remain toggleable',()=>{
  const locations=buildLocations([],[],[{id:'a',name:'a',type:'Other',viewId:''},{id:'b',name:'b',type:'Points',viewId:'B'}]);
  assert.equal(locations.get('__unmatched__').label,'Other layers');
  assert.equal(locations.get('B').layers.length,1);assert.equal(locations.get('B').point,null);
});
test('importing OBJ files preserves hidden location/category intent',()=>{
  const old=buildLocations([point('A')],[cone('A')]);
  const visibility=new Map([['viewshed:A',false]]);
  const objects=['Points','Viewsheds'].map(type=>({id:type,name:type,viewId:'A',type}));
  const next=buildLocations([point('A')],[cone('A')],objects);
  inheritVisibility(next,old,visibility,true);
  assert.equal(visibility.get('obj:Viewsheds'),false);assert.equal(visibility.get('obj:Points'),true);
  const allOff=new Map(old.get('A').layers.map(l=>[l.id,false]));
  inheritVisibility(next,old,allOff,true);
  assert.equal(allOff.get('obj:Points'),false);
});
test('later location, category, group and overall choices win for matching imports only',()=>{
  const intents=new VisibilityIntents(),viewshed={source:'obj',kind:'viewshed'},point={source:'map',kind:'point'};
  intents.set({source:'obj'},true);intents.set({locationId:'A'},false);
  assert.equal(intents.resolve(viewshed,'A'),false);assert.equal(intents.resolve(viewshed,'B'),true);
  intents.set({source:'obj',kind:'viewshed'},true);
  assert.equal(intents.resolve(viewshed,'A'),true);assert.equal(intents.resolve(point,'A'),false);
  intents.set({source:'map'},true);assert.equal(intents.resolve(point,'A'),true);
  intents.set({},false);assert.equal(intents.resolve(viewshed,'A'),false);assert.equal(intents.resolve(point,'C'),false);
  intents.set({locationId:'A'},true);assert.equal(intents.resolve(viewshed,'A'),true);assert.equal(intents.resolve(viewshed,'B'),false);
});
test('location intent hides new models without changing existing choices on rebuild',()=>{
  const old=buildLocations([point('A')],[cone('A')]),visibility=new Map(),intents=new VisibilityIntents();
  intents.set({source:'obj'},true);intents.set({locationId:'A'},false);
  setLayersVisible(old.get('A').layers,visibility,false);
  const objects=[{id:'A-model',type:'Viewsheds',viewId:'A',name:'A.obj'},{id:'B-model',type:'Viewsheds',viewId:'B',name:'B.obj'}];
  const next=buildLocations([point('A'),point('B')],[cone('A')],objects);
  inheritVisibility(next,old,visibility,true,intents);
  assert.equal(visibility.get('obj:A-model'),false);assert.equal(visibility.get('obj:B-model'),true);
  assert.equal(checkboxState(next.get('A').layers,visibility).checked,false);
  intents.set({source:'obj'},true);
  const replacement=buildLocations([point('A')],[cone('A')],[{id:'A-new',type:'Frustums',viewId:'A',name:'A-new.obj'}]);
  inheritVisibility(replacement,next,visibility,true,intents);
  assert.equal(visibility.get('obj:A-new'),true);assert.equal(visibility.get('point:A'),false);
  assert.equal(checkboxState(replacement.get('A').layers,visibility).indeterminate,true);
});
test('reimported identities follow newer intent and repeated actions keep bounded history',()=>{
  const intents=new VisibilityIntents(),visibility=new Map([['obj:model',false]]);
  for(let i=0;i<1000;i++)intents.set({source:'obj'},true);
  assert.equal(intents.rules.size,1);
  const locations=buildLocations([],[],[{id:'model',type:'Points',viewId:'A',name:'model.obj'}]);
  inheritVisibility(locations,new Map(),visibility,true,intents);
  assert.equal(visibility.get('obj:model'),true);
});
test('recursive photo indexing reads metadata only and never guesses ambiguous names',()=>{
  const file=path=>({name:path.split('/').pop(),webkitRelativePath:path,arrayBuffer(){throw Error('Photo was read');},text(){throw Error('Photo was read');}});
  const a=file('Root/20260710/IMG_013.JPG'),b=file('Root/another/IMG_013.jpg'),c=file('Root/nested/more/unique.jpg');
  const files=collectPanoramaFiles([a,b,c,{name:'export.json'}]);
  const index=createPhotoIndex(files);
  assert.equal(index.size,3);assert.equal(index.match('20260710/img_013'),a);
  assert.equal(index.match('IMG_013'),null);assert.equal(index.match('nested/more/unique'),c);
  assert.equal(index.match('missing.jpg'),null);
});
test('spatial ZIP imports both collections while loose files pair by stem',async()=>{
  const calls=[];
  globalThis.window={shp:async input=>{
    calls.push(input);
    if(input instanceof ArrayBuffer)return [{type:'FeatureCollection',features:[point('A')]},{type:'FeatureCollection',features:[cone('A')]}];
    return {type:'FeatureCollection',features:[point(input.dbf.id)]};
  }};
  try {
    const zipped=await readShapefiles([{name:'both.zip',arrayBuffer:async()=>new ArrayBuffer(1)}]);
    assert.equal(zipped.features.length,2);
    const files=['first','second'].flatMap(id=>['shp','dbf'].map(ext=>({name:id+'.'+ext,arrayBuffer:async()=>({id})})));
    const loose=await readShapefiles(files);
    assert.deepEqual(loose.features.map(f=>f.properties.VIEW_ID),['first','second']);
    assert.equal(calls.length,3);
    await assert.rejects(()=>readShapefiles([{name:'x.shp',arrayBuffer:async()=>null}]),/Missing DBF/);
  }finally{delete globalThis.window;}
});
