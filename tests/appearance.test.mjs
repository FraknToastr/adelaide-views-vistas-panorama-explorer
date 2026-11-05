import test from 'node:test';
import assert from 'node:assert/strict';
import {defaultAppearance,loadAppearance,saveAppearance,applyShapeAppearance} from '../js/appearance.js';

test('appearance survives storage and rejects invalid colour values',()=>{
  let stored=null;
  globalThis.localStorage={getItem:()=>stored,setItem:(_,v)=>{stored=v;}};
  const value=defaultAppearance();value.obj.line.color='#123456';value.shape.fill.transparency=55;
  saveAppearance(value);assert.deepEqual(loadAppearance(),value);
stored=JSON.stringify({shape:{fill:{color:'#123456',transparency:90,pointTransparency:35}}});
assert.deepEqual(loadAppearance().shape.point,{color:'#ffff00',transparency:35});
  stored=JSON.stringify({obj:{line:{color:'bad',transparency:200}}});
  assert.equal(loadAppearance().obj.line.color,'#203e34');
  assert.equal(loadAppearance().obj.line.transparency,100);
  stored='invalid';assert.deepEqual(loadAppearance(),defaultAppearance());
  delete globalThis.localStorage;
});

test('transparent shapefile outlines also hide their casing without changing alignment overlays',()=>{
  const calls=[];
  const map={getLayer:()=>true,setPaintProperty:(...args)=>calls.push(args)};
const value=defaultAppearance().shape;value.line.transparency=100;value.fill.transparency=100;value.point.transparency=100;
  applyShapeAppearance(map,value);
  assert.ok(calls.some(([id,key,v])=>id==='vistas-cones-casing'&&key==='line-opacity'&&v===0));
  assert.ok(calls.some(([id,key,v])=>id==='vistas-points'&&key==='circle-opacity'&&v===0));
  assert.equal(calls.some(([id])=>['vistas-overlap','vistas-direction','vistas-selected'].includes(id)),false);
  assert.doesNotThrow(()=>applyShapeAppearance({getLayer:()=>false},value));
});
test('point colour and transparency are independent from polygon fill',()=>{
const paint=new Map();
const map={getLayer:()=>true,setPaintProperty:(id,key,value)=>paint.set(id+':'+key,value)};
const value=defaultAppearance().shape;
value.fill.color='#123456';value.fill.transparency=100;value.point.transparency=20;
applyShapeAppearance(map,value);
assert.equal(paint.get('vistas-points:circle-color'),'#ffff00');
assert.equal(paint.get('vistas-points:circle-opacity'),.8);
assert.equal(paint.get('vistas-cones-fill:fill-color'),'#123456');
assert.equal(paint.get('vistas-cones-fill:fill-opacity'),0);
});
