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
    add(object){if(object.parent)object.parent.children=object.parent.children.filter(child=>child!==object);this.children.push(object);object.parent=this;}
    attach(object){this.add(object);}
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
    constructor(options={}){Object.assign(this,options);this.color={value:options.color,set(value){this.value=value;}};this.disposals=0;counters.materials.push(this);}
    dispose(){this.disposals++;}
  }
  class Geometry {
    constructor(valid=true,vertices=[]){this.valid=valid;this.vertices=vertices;this.disposals=0;counters.geometries.push(this);}
    computeBoundingBox(){}
    computeVertexNormals(){}
    computeBoundingSphere(){this.boundingSphere={radius:this.valid?1:NaN};}
    dispose(){this.disposals++;}
  }
  class Mesh extends Group {
    constructor(geometry,material){super();this.geometry=geometry;this.material=material;this.isMesh=true;}
  }
  class Camera {constructor(){this.projectionMatrix=new Matrix();}}
  class EdgesGeometry extends Geometry {constructor(){super();}}
  class LineSegments extends Mesh {constructor(...args){super(...args);this.isMesh=false;this.isLine=true;}}
  class Renderer {
    resetState(){}
    render(){counters.renders++;}
    dispose(){counters.rendererDisposals++;}
  }
  const THREE={Scene:Group,Group,Camera,Box3:Box,Matrix4:Matrix,Vector2:Vector,Vector3:Vector,MeshBasicMaterial:Material,ShaderMaterial:Material,PointsMaterial:Material,LineBasicMaterial:Material,Mesh,EdgesGeometry,LineSegments,WebGLRenderer:Renderer,DoubleSide:2};
  class OBJLoader {
    parse(text){
      const model=new Group(),vertices=[],parts=[];
      let part={name:'',vertices:[]};parts.push(part);
      for(const line of text.split('\n')){
        const fields=line.trim().split(/\s+/);
        if(fields[0]==='v')vertices.push(fields.slice(1,4).map(Number));
        if(fields[0]==='o'||fields[0]==='g'){part={name:fields.slice(1).join(' '),vertices:[]};parts.push(part);}
        if(fields[0]==='f')for(const token of fields.slice(1)){const index=Number(token.split('/')[0]);part.vertices.push(vertices[index<0?vertices.length+index:index-1]);}
      }
      for(const p of parts.filter(p=>p.vertices.length)){
        const original=new Material();counters.importedMaterials.push(original);
        const child=new Mesh(new Geometry(!text.includes('# invalid bounds'),p.vertices),original);child.name=p.name;model.add(child);
      }
      return model;
    }
  }
  // Import the production controller with only its external graphics boundary replaced.
  // Core coordinate conversion/path logic remains the real application code.
  const key='__objFixture'+(++fixtureSerial);
  globalThis[key]={THREE,OBJLoader};
  globalThis.window={
    proj4:(from,to,coordinates)=>coordinates,
    maplibregl:{MercatorCoordinate:class {
      constructor(x,y,z=0){this.x=x;this.y=y;this.z=z;}
      static fromLngLat([lng,lat]){return new this(lng,-lat);}
      meterInMercatorCoordinateUnits(){return 1;}
      toLngLat(){return {lng:this.x,lat:-this.y};}
    }}
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

test('v1.3.1 combined exports split into location-associated categories with shared grounding',async()=>{
  const {layer,counters}=await fixture();
  const combined='v 281387 6134191 24.8\nv 281388 6134191 26.3\nv 281387 6134192 24.8\n'+
    'v 281390 6134200 24.85\nv 281400 6134210 24.85\nv 281387 6134191 24.85\n'+
    'v 281387 6134191 26.4\nv 281410 6134200 70\nv 281400 6134210 90\n'+
    'o Point_TorRiv.M\nf 1 2 3\no Viewshed_TorRiv.M_1_1\nf 4 5 6\no Frustum_TorRiv.M_1\nf 7 8 9';
  const summary=await layer.load([{name:'Park_10/Park_10__TorRiv.M.obj',readText:async()=>combined}],null);
  assert.equal(summary.loaded,3);assert.equal(summary.vertices,9);
  assert.deepEqual(layer.loaded.map(e=>[e.viewId,e.type]),[['TorRiv.M','Points'],['TorRiv.M','Viewsheds'],['TorRiv.M','Frustums']]);
  assert.equal(new Set(layer.loaded.map(e=>e.id)).size,3);
  for(const e of layer.loaded)near(e.groundOffset,-24.8);
  const viewshed=layer.loaded.find(e=>e.type==='Viewsheds');
  assert.equal(viewshed.highlights.length,1);
  layer.setEntryVisible(viewshed.id,false);
  assert.equal(viewshed.model.visible,false);assert.equal(layer.visibleCount,2);
  layer.setAlignment({active:true,viewId:'TorRiv.M',origin:[281387,6134191],heading:0,horizontalFov:90});
  assert.deepEqual(layer.alignmentUniforms.originMap.value.values,[0,0]);
  layer.dispose();assert.ok(counters.geometries.every(g=>g.disposals===1));
});

test('appearance and grounding reuse geometry and leave the alignment highlight material intact',async()=>{
  const {layer,counters}=await fixture();
const appearance={point:{color:'#ffff00',transparency:25},line:{color:'#ffffff',transparency:100},fill:{color:'#ff0000',transparency:50}};
  layer.setAppearance(appearance);await layer.load(allEntries(),null);
  const highlight=layer.loaded[1].highlights[0].material;
  const count=counters.geometries.length;
  for(const e of layer.loaded){
    const mesh=e.model.children[0],edge=mesh.children.find(c=>c.isLine);
assert.equal(mesh.material.color.value,e.type==='Points'?'#ffff00':'#ff0000');
assert.equal(mesh.material.opacity,e.type==='Points'?.75:.5);
assert.equal(edge.material.opacity,e.type==='Points'?.75:0);assert.equal(edge.material.depthWrite,false);
  }
  for(let i=0;i<5;i++){layer.setAppearance(appearance);layer.setGrounded(i%2===0);}
  assert.equal(counters.geometries.length,count);
  assert.equal(layer.loaded[1].highlights[0].material,highlight);
  assert.equal(highlight.opacity,undefined,'shader highlight opacity is independent');
  layer.dispose();
});

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
