import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const source=await readFile(new URL('../js/obj-map.js',import.meta.url),'utf8');
let fixtureSerial=0;

/** Instrument the graphics boundary without needing a browser or WebGL runtime. */
async function fixture(){
  const counters={renders:0,rendererDisposals:0,repaints:0,materials:[],geometries:[],importedMaterials:[]};
  class Group {
    constructor(){this.children=[];this.visible=true;}
    add(object){this.children.push(object);}
    clear(){this.children=[];}
    traverse(callback){callback(this);for(const child of this.children)child.traverse(callback);}
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
    constructor(valid=true){this.valid=valid;this.disposals=0;counters.geometries.push(this);}
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
  const THREE={Scene:Group,Group,Camera,Matrix4:Matrix,Vector2:Vector,Vector3:Vector,MeshBasicMaterial:Material,ShaderMaterial:Material,PointsMaterial:Material,LineBasicMaterial:Material,Mesh,WebGLRenderer:Renderer,DoubleSide:2};
  class OBJLoader {
    parse(text){
      const model=new Group(),original=new Material();
      counters.importedMaterials.push(original);
      model.add(new Mesh(new Geometry(!text.includes('# invalid bounds')),original));
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
