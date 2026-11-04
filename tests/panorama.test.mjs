import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

let moduleNumber=0;
const radians=n=>n*Math.PI/180;
const tick=()=>new Promise(resolve=>setImmediate(resolve));
const deferred=()=>{let resolve,reject;const promise=new Promise((ok,bad)=>{resolve=ok;reject=bad;});return {promise,resolve,reject};};
const bitmap=(width=4096,height=2048)=>({width,height,closed:0,close(){this.closed++;}});

async function harness({limit=16384,decode=async()=>bitmap()}={}) {
  const frames=new Map();let frameId=0;
  const loading=[],directions=[],decodes=[];
  globalThis.window={devicePixelRatio:1};
  globalThis.ResizeObserver=class {observe(){} disconnect(){this.disconnected=true;}};
  globalThis.requestAnimationFrame=fn=>{frames.set(++frameId,fn);return frameId;};
  globalThis.cancelAnimationFrame=id=>frames.delete(id);
  globalThis.createImageBitmap=async(input,options)=>{decodes.push({input,options});return decode(input,options);};
  class Disposable {dispose(){this.disposed=true;}}
  const three={
    MathUtils:{degToRad:radians,radToDeg:n=>n*180/Math.PI},
    Scene:class {add(){}},
    Vector3:class {set(x,y,z){this.x=x;this.y=y;this.z=z;return this;}},
    PerspectiveCamera:class {
      constructor(fov,aspect){this.fov=fov;this.aspect=aspect;}
      updateProjectionMatrix(){this.projections=(this.projections||0)+1;}
      lookAt(vector){this.look=[vector.x,vector.y,vector.z];}
    },
    WebGLRenderer:class extends Disposable {
      constructor(){super();this.capabilities={maxTextureSize:limit};this.renders=0;this.domElement={style:{},addEventListener(){},remove(){}};}
      setPixelRatio(){} setClearColor(){} setSize(){}
      render(){this.renders++;}
    },
    SphereGeometry:class extends Disposable {scale(){}},
    MeshBasicMaterial:class extends Disposable {},
    Mesh:class {constructor(geometry,material){this.geometry=geometry;this.material=material;}},
    Texture:class extends Disposable {constructor(image){super();this.image=image;}}
  };
  globalThis.__panoramaThree=three;
  const core=new URL('../js/core.js',import.meta.url).href;
  const source=(await readFile(new URL('../js/panorama.js',import.meta.url),'utf8'))
    .replace("import * as THREE from 'three';",'const THREE=globalThis.__panoramaThree;')
    .replace("from './core.js'",`from '${core}'`);
  const exports=await import('data:text/javascript;base64,'+Buffer.from(source+`\n// instance ${moduleNumber++}`).toString('base64'));
  const host={clientWidth:800,clientHeight:400,appendChild(){}};
  const viewer=new exports.PanoramaViewer(host,{onLoading:v=>loading.push(v),onDirection:v=>directions.push(v)});
  return {viewer,host,loading,directions,decodes,exports,frames,
    flush(){const jobs=[...frames.values()];frames.clear();for(const fn of jobs)fn();}};
}

test('folder-independent viewer is lazy and coalesces camera changes into one frame',async()=>{
  const h=await harness();
  assert.equal(h.decodes.length,0);
  assert.equal(h.viewer.renderer.renders,0);
  await h.viewer.load({name:'selected.jpg'});
  assert.equal(h.decodes.length,1);
  h.viewer.rotate(5);h.viewer.rotate(5);h.viewer.render();
  assert.equal(h.frames.size,1);
  h.flush();
  assert.equal(h.viewer.renderer.renders,1);
  assert.equal(h.directions[0].heading,10);
  assert.equal(h.frames.size,0);
  const projections=h.viewer.camera.projections;
  h.viewer.rotate(5);h.flush();
  assert.equal(h.viewer.camera.projections,projections);
  h.viewer.fov=90;h.viewer.render();h.flush();
  assert.equal(h.viewer.camera.fov,90);
  assert.equal(h.viewer.camera.projections,projections+1);
  h.viewer.dispose();
});

test('only the latest selection decodes next; obsolete images never update the scene',async()=>{
  const first=deferred(),latest=deferred();
  const h=await harness({decode:input=>input.name==='first.jpg'?first.promise:latest.promise});
  const old=h.viewer.load({name:'first.jpg'});
  const dropped=h.viewer.load({name:'middle.jpg'});
  const current=h.viewer.load({name:'latest.jpg'});
  assert.equal(await old,false);
  assert.equal(await dropped,false);
  assert.equal(h.decodes.length,1);
  const oldBitmap=bitmap();first.resolve(oldBitmap);await tick();
  assert.equal(oldBitmap.closed,1);
  assert.equal(h.decodes.length,2);
  assert.equal(h.decodes[1].input.name,'latest.jpg');
  assert.equal(h.loading.includes(false),false);
  const selected=bitmap();latest.resolve(selected);
  assert.equal(await current,true);
  h.flush();
  assert.equal(h.viewer.texture.image,selected);
  assert.deepEqual(h.loading,[true,true,true,false]);
  h.viewer.dispose();
  assert.equal(selected.closed,1);
});

test('a replacement promptly releases its predecessor and clear cancels a pending install',async()=>{
  const waiting=deferred(),selected=bitmap();
  const h=await harness({decode:input=>input.name==='first.jpg'?Promise.resolve(selected):waiting.promise});
  await h.viewer.load({name:'first.jpg'});h.flush();
  const texture=h.viewer.texture;
  const next=h.viewer.load({name:'second.jpg'});
  assert.equal(texture.disposed,true);
  assert.equal(selected.closed,1);
  assert.equal(h.viewer.active,false);
  assert.equal(h.viewer.renderer.domElement.style.display,'none');
  h.viewer.clear();
  assert.equal(await next,false);
  const stale=bitmap();waiting.resolve(stale);await tick();
  assert.equal(stale.closed,1);
  assert.equal(h.viewer.texture,null);
  assert.equal(h.frames.size,0);
  h.viewer.dispose();
});

test('large panoramas fit the actual GPU limit while retaining 2:1 projection and upload orientation',async()=>{
  const original=bitmap(11904,5952),resized=bitmap(8192,4096);
  const h=await harness({limit:8192,decode:async(input,options)=>options.resizeWidth?resized:original});
  await h.viewer.load({name:'full-resolution.jpg'});
  assert.equal(h.decodes.length,2);
  assert.equal(h.decodes[0].options.imageOrientation,'flipY');
  assert.deepEqual([h.decodes[1].options.resizeWidth,h.decodes[1].options.resizeHeight],[8192,4096]);
  assert.equal(h.decodes[1].options.imageOrientation,'none');
  assert.equal(original.closed,1);
  assert.equal(h.viewer.texture.image,resized);
  assert.equal(h.viewer.texture.flipY,false);
  h.viewer.dispose();
  assert.equal(resized.closed,1);
});

test('calibration rotates world bearing without moving the viewed image; FOV follows pane aspect',async()=>{
  const h=await harness();
  assert.ok(Math.abs(h.exports.horizontalFieldOfView(90,2)-126.86989764584402)<1e-9);
  await h.viewer.load({name:'north.jpg'},20);
  h.viewer.rotate(350);h.flush();
  const look=[...h.viewer.camera.look];
  assert.equal(h.directions.at(-1).heading,10);
  assert.ok(Math.abs(look[0]-Math.sin(radians(350)))<1e-12);
  assert.ok(Math.abs(look[2]+Math.cos(radians(350)))<1e-12);
  h.viewer.changeHeading(30);h.flush();
  assert.equal(h.directions.at(-1).heading,40);
  assert.deepEqual(h.viewer.camera.look,look);
  const wide=h.viewer.currentDirection.horizontalFov;
  h.host.clientWidth=400;h.viewer.resize();h.flush();
  assert.ok(h.viewer.currentDirection.horizontalFov<wide);
  h.viewer.dispose();
});

test('decode failure leaves no previous image, and disposed viewers refuse new loads',async()=>{
  const h=await harness();
  await h.viewer.load({name:'good.jpg'});h.flush();
  const texture=h.viewer.texture;
  h.viewer._decode=async()=>{throw new Error('damaged image');};
  await assert.rejects(h.viewer.load({name:'bad.jpg'}),/bad.jpg: damaged image/);
  assert.equal(texture.disposed,true);
  assert.equal(h.viewer.active,false);
  assert.equal(h.viewer.texture,null);
  assert.equal(h.loading.at(-1),false);
  h.viewer.dispose();
  assert.equal(h.viewer.geometry.disposed,true);
  assert.equal(h.viewer.material.disposed,true);
  assert.equal(h.viewer.resizeObserver.disconnected,true);
  await assert.rejects(h.viewer.load({name:'later.jpg'}),/disposed/);
});
