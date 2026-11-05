import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const source=await readFile(new URL('../js/obj-map.js',import.meta.url),'utf8');
let fixtureSerial=0;

/** Instrument the graphics boundary without needing a browser or WebGL runtime. */
async function fixture(){
  const counters={renders:0,rendererDisposals:0,repaints:0,materials:[],geometries:[],importedMaterials:[]};
  class Group {
    constructor(){this.children=[];this.visible=true;this.position={x:0,y:0,z:0};}
    add(object){this.children.push(object);}
    clear(){this.children=[];}
    updateMatrixWorld(){}
    traverse(callback){callback(this);for(const child of this.children)child.traverse(callback);}
  }
  class Box {
    setFromObject(object){
      this.min={x:Infinity,y:Infinity,z:Infinity};
      const visit=(node,parent)=>{
        const world={x:parent.x+node.position.x,y:parent.y+node.position.y,z:parent.z+node.position.z};
        for(const point of node.geometry?.vertices || [])
          for(const [index,axis] of ['x','y','z'].entries())this.min[axis]=Math.min(this.min[axis],world[axis]+point[index]);
        for(const child of node.children)visit(child,world);
      };
      visit(object,{x:0,y:0,z:0});return this;
    }
  }
  class Vector {
    constructor(...values){this.values=values;}
    set(...values){this.values=values;return this;}
  }
  class Matrix {
    makeRotationX(){return this;}
    makeTranslation(){return this;}
    makeScale(){return this;}
    multiply(){return this;}
    fromArray(){return this;}
  }
  class Material {
    constructor(options={}){Object.assign(this,options);this.disposals=0;counters.materials.push(this);}
    dispose(){this.disposals++;}
  }
  class Geometry {
    constructor(valid=true,vertices=[]){this.valid=valid;this.vertices=vertices;this.disposals=0;counters.geometries.push(this);}
    computeBoundingBox(){}
    computeBoundingSphere(){this.boundingSphere={radius:this.valid?1:NaN};}
    dispose(){this.disposals++;}
  }
  class Mesh extends Group {
    constructor(geometry,material){super();this.geometry=geometry;this.material=material;this.isMesh=true;}
  }
  class Camera {constructor(){this.projectionMatrix=new Matrix();}}
  class Renderer {
    resetState(){}
    render(){counters.renders++;}
    dispose(){counters.rendererDisposals++;}
  }
  const THREE={Scene:Group,Group,Camera,Box3:Box,Matrix4:Matrix,Vector2:Vector,Vector3:Vector,MeshBasicMaterial:Material,ShaderMaterial:Material,PointsMaterial:Material,LineBasicMaterial:Material,Mesh,WebGLRenderer:Renderer,DoubleSide:2};
  class OBJLoader {
    parse(text){
      const model=new Group(),original=new Material();
      counters.importedMaterials.push(original);
      const vertices=text.split('\n').filter(line=>/^v\s/.test(line)).map(line=>line.trim().split(/\s+/).slice(1,4).map(Number));
      model.add(new Mesh(new Geometry(!text.includes('# invalid bounds'),vertices),original));
      return model;
    }
  }
  // Import the production controller with only its external graphics boundary replaced.
  // Core coordinate conversion/path logic remains the real application code.
  const key='__objFixture'+(++fixtureSerial);
  globalThis[key]={THREE,OBJLoader};
  globalThis.window={
    proj4:(from,to,coordinates)=>coordinates,
    maplibregl:{MercatorCoordinate:{fromLngLat:()=>({x:0,y:0,z:0,meterInMercatorCoordinateUnits:()=>1})}}
  };
  const text=source
    .replace("import * as THREE from 'three';",'const {THREE}=globalThis['+JSON.stringify(key)+'];')
    .replace("import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';",'const {OBJLoader}=globalThis['+JSON.stringify(key)+'];')
    .replaceAll("'./core.js'",JSON.stringify(new URL('../js/core.js',import.meta.url).href))
    .replaceAll("'./geo.js'",JSON.stringify(new URL('../js/geo.js',import.meta.url).href));
  const {ObjMapLayer}=await import('data:text/javascript;base64,'+Buffer.from(text).toString('base64'));
  delete globalThis[key];
  const map={
    layer:null,styleLoaded:true,
    triggerRepaint(){counters.repaints++;},
    isStyleLoaded(){return this.styleLoaded;},
    getLayer(id){return this.layer?.id===id?this.layer:null;},
    addLayer(layer){this.layer=layer;layer.onAdd(this,{});},
    removeLayer(id){if(this.layer?.id===id){this.layer.onRemove();this.layer=null;}},
    getCanvas(){return {};}
  };
  const notices=[];
  return {layer:new ObjMapLayer(map,(...args)=>notices.push(args)),map,counters,notices};
}

const text='v 281387 6134191 26\nv 281388 6134192 26\nv 281389 6134192 27\nf 1 2 3';
const entry=(type,id='TorRiv.M')=>({name:'Park_10/'+type+'/Park_10__'+id+'__'+type+'.obj',readText:async()=>text});
const allEntries=()=>['Points','Viewsheds','Frustums'].map(type=>entry(type));

test('OBJ points, viewsheds and frustums expose stable file identities and exact source location IDs',async()=>{
  const {layer,counters}=await fixture();
  const unknown={name:'buildings/Building001.obj',readText:async()=>text};
  const summary=await layer.load([...allEntries(),unknown],null);
  assert.equal(summary.loaded,4);
  assert.deepEqual(layer.loaded.map(e=>[e.type,e.viewId]),[['Points','TorRiv.M'],['Viewsheds','TorRiv.M'],['Frustums','TorRiv.M'],['Other','']]);
  assert.equal(new Set(layer.loaded.map(e=>e.id)).size,4);
  assert.equal(layer.loaded[1].id,'park_10/viewsheds/park_10__torriv.m__viewsheds.obj');
  assert.ok(counters.importedMaterials.every(material=>material.disposals===1));
  layer.dispose();
});

test('individual and bulk visibility controls leave unrelated OBJ files unchanged and skip hidden draws',async()=>{
  const {layer,counters}=await fixture();
  await layer.load(allEntries(),null);
  const [point,viewshed,frustum]=layer.loaded;
  layer.setEntryVisible(viewshed.id,false);
  assert.equal(viewshed.model.visible,false);
  assert.equal(point.model.visible,true);
  assert.equal(frustum.model.visible,true);
  layer.layer.render(null,[]);
  assert.equal(counters.renders,1);
  layer.applyEntryVisibility(new Map(layer.loaded.map(e=>[e.id,false])));
  layer.layer.render(null,[]);
  assert.equal(counters.renders,1,'an all-hidden custom layer must not draw');
  layer.applyEntryVisibility({[frustum.id]:true});
  assert.equal(layer.visibleCount,1);
  assert.equal(point.model.visible,false);
  assert.equal(frustum.model.visible,true);
  layer.setVisible('Points',true);
  assert.equal(point.model.visible,true);
  assert.equal(viewshed.model.visible,false);
  layer.dispose();
});

test('selected viewshed highlights share geometry and clear independently of other locations',async()=>{
  const {layer}=await fixture();
  await layer.load([entry('Viewsheds'),entry('Viewsheds','TorRiv.Q'),entry('Frustums')],null);
  const [selected,other,frustum]=layer.loaded;
  layer.setAlignment({active:true,viewId:'TorRiv.M',origin:[138.6,-34.9],heading:359,horizontalFov:80,intervals:[{heading:10,horizontalFov:40}]});
  assert.equal(selected.highlights.length,1);
  assert.equal(selected.highlights[0].geometry,selected.model.children[0].geometry);
  assert.equal(selected.highlights[0].visible,true);
  assert.equal(other.highlights[0].visible,false);
  assert.equal(frustum.highlights.length,0);
  assert.equal(layer.alignmentUniforms.sourceCount.value,1);
  layer.setEntryVisible(selected.id,false);
  assert.equal(selected.model.visible,false,'a highlight must inherit its layer visibility');
  layer.setAlignment({active:false});
  assert.equal(selected.highlights[0].visible,false);
  layer.dispose();
});

test('basemap style replacement releases GPU resources and retains scene objects, selection and visibility',async()=>{
  const {layer,map,counters}=await fixture();
  await layer.load(allEntries(),null);
  const [point,viewshed]=layer.loaded;
  layer.setEntryVisible(point.id,false);
  layer.setGrounded(false);
  layer.setAlignment({active:true,viewId:'TorRiv.M',origin:[138.6,-34.9],heading:20,horizontalFov:70});
  const geometry=viewshed.model.children[0].geometry;
  layer.layer.render(null,[]);
  map.removeLayer(layer.layer.id);
  assert.equal(geometry.disposals,1,'shared base/highlight geometry is released exactly once');
  assert.equal(counters.rendererDisposals,1);
  assert.equal(layer.loaded.length,3);
  layer.attach();layer.layer.render(null,[]);
  assert.equal(counters.renders,2);
  assert.equal(point.model.visible,false);
  assert.equal(viewshed.highlights[0].visible,true);
  assert.equal(layer.grounded,false);
  assert.equal(point.model.position.y,0);
  layer.setGrounded(true);
  assert.equal(point.model.position.y,-26);
  layer.clear();
  assert.equal(geometry.disposals,2);
  assert.equal(layer.visibleCount,0);
  assert.equal(layer.loaded.length,0);
  layer.dispose();
});

test('invalid OBJ bounds are skipped and disposed without blocking remaining files',async()=>{
  const {layer,counters,notices}=await fixture();
  const invalid={name:'Park_10__invalid__Viewsheds.obj',readText:async()=>text+'\n# invalid bounds'};
  const summary=await layer.load([invalid,entry('Points')],null);
  assert.equal(summary.loaded,1);
  assert.equal(summary.failed.length,1);
  assert.match(summary.failed[0],/invalid geometry/);
  assert.equal(counters.geometries[0].disposals,1);
  assert.equal(counters.importedMaterials[0].disposals,1);
  assert.equal(notices.length,1);
  layer.dispose();
});

test('clearing an in-flight import prevents late files from entering the scene',async()=>{
  const {layer}=await fixture();
  let release;
  const waiting={name:'Park_10__TorRiv.M__Viewsheds.obj',readText:()=>new Promise(resolve=>{release=resolve;})};
  const pending=layer.load([waiting],null);
  layer.clear();release(text);
  const summary=await pending;
  assert.equal(summary.cancelled,true);
  assert.equal(layer.loaded.length,0);
  assert.equal(layer.group.children.length,0);
  layer.dispose();
});

const heightEntry=(type,id,heights)=>({
  name:`Park_10/${type}/Park_10__${id}__${type}.obj`,
  readText:async()=>heights.map((h,i)=>`v ${281387+i} ${6134191+i} ${h}`).join('\n')+'\nf 1 2 3'
});
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-6,`${actual} differs from ${expected}`);

test('grounding uses one baseline per location and preserves camera height and 3D shape',async()=>{
  const {layer}=await fixture();
  await layer.load([
    heightEntry('Frustums','A',[26.4,24.82,150]),
    heightEntry('Points','A',[24.8,26.3,25]),
    heightEntry('Viewsheds','A',[24.85,24.85,24.85]),
    heightEntry('Points','B',[70,71.6,70.8]),
    heightEntry('Frustums','B',[71.6,70.2,170])
  ],null);
  for(const object of layer.loaded) {
    near(object.model.position.y,object.viewId==='A'?-24.8:-70);
    assert.equal(object.model.position.x,0);assert.equal(object.model.position.z,0);
  }
  const frustum=layer.loaded[0],geometry=frustum.model.children[0].geometry;
  near(geometry.vertices[0][1]+frustum.model.position.y,1.6);
  near(geometry.vertices[2][1]-geometry.vertices[0][1],123.6);
  near(Math.min(...layer.loaded.filter(e=>e.viewId==='A').map(e=>e.sourceMinHeight+e.model.position.y)),0);
  const lowest=layer.loaded.find(e=>e.type==='Points'&&e.viewId==='A');
  layer.setEntryVisible(lowest.id,false);layer.setGrounded(true);
  near(frustum.model.position.y,-24.8);
  layer.dispose();
});

test('grounding toggles restore original elevations without geometry changes or accumulated drift',async()=>{
  const {layer,counters}=await fixture();
  await layer.load([heightEntry('Points','A',[24.8,26.4,25]),heightEntry('Viewsheds','A',[24.85,25,26])],null);
  const snapshots=layer.loaded.map(e=>JSON.stringify(e.model.children[0].geometry.vertices));
  const geometries=counters.geometries.length;
  for(let i=0;i<10;i++) {
    layer.setGrounded(false);
    assert.ok(layer.loaded.every(e=>e.model.position.y===0&&e.groundOffset===0));
    layer.setGrounded(true);
    for(const object of layer.loaded)near(object.model.position.y,-24.8);
  }
  assert.deepEqual(layer.loaded.map(e=>JSON.stringify(e.model.children[0].geometry.vertices)),snapshots);
  assert.equal(counters.geometries.length,geometries);
  assert.ok(counters.geometries.every(g=>g.disposals===0));
  layer.dispose();
});

test('unmatched OBJ files ground independently rather than sharing a fabricated location',async()=>{
  const {layer}=await fixture();
  const first=heightEntry('Points','A',[10,12,11]),second=heightEntry('Points','B',[80,82,81]);
  first.name='buildings/one.obj';second.name='buildings/two.obj';
  await layer.load([first,second],null);
  assert.deepEqual(layer.loaded.map(e=>e.viewId),['','']);
  assert.deepEqual(layer.loaded.map(e=>e.model.position.y),[-10,-80]);
  layer.dispose();
});

test('grounding handles negative elevations and scene-origin heights in projected units',async()=>{
  const {layer}=await fixture();
  await layer.load([heightEntry('Points','A',[-8,-6.4,-7])],null);
  near(layer.loaded[0].model.position.y,8);
  const local={name:'Park_10__A__Points.obj',readText:async()=> 'v 0 0 -4\nv 1 0 -2.4\nv 0 1 -3\nf 1 2 3'};
  const reference={lod_source_frame:'SCENE_LOCAL',scene_origin:{easting_m:281387,northing_m:6134191,height_m:100}};
  await layer.load([local,heightEntry('Points','B',[30,31.6,31])],reference);
  near(layer.loaded[0].sourceMinHeight,96);near(layer.loaded[0].model.position.y,-96);
  near(layer.loaded[1].sourceMinHeight,30);near(layer.loaded[1].model.position.y,-30);
  layer.setGrounded(false);
  assert.ok(layer.loaded.every(e=>e.model.position.y===0));
  layer.dispose();
});

test('the chosen height mode survives replacement imports and file order does not change grounding',async()=>{
  const {layer}=await fixture();
  const objects=[heightEntry('Frustums','A',[27,25,130]),heightEntry('Points','A',[24,25.5,25])];
  layer.setGrounded(false);await layer.load(objects,null);
  assert.ok(layer.loaded.every(e=>e.model.position.y===0));
  layer.setGrounded(true);
  const offsets=new Map(layer.loaded.map(e=>[e.id,e.model.position.y]));
  await layer.load([...objects].reverse(),null);
  assert.ok(layer.grounded);
  for(const object of layer.loaded)assert.equal(object.model.position.y,offsets.get(object.id));
  layer.dispose();
});
