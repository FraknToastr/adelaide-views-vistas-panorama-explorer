import test from 'node:test';
import assert from 'node:assert/strict';
import {createObjProjection} from '../js/geo.js';
import {rebaseObjForMap} from '../js/core.js';

// Synthetic MGA54 control points, not imported geometry. Geographic references
// were calculated with proj4 2.15.0 / GRS80, the app's pinned projection engine.
const controls=[
  {en:[281000,6134000],ll:[138.60282622441957,-34.91283680728174]},
  {en:[281300,6134250],ll:[138.60617290115283,-34.91064910341847]},
  {en:[280850,6133900],ll:[138.60115937639767,-34.91370538054646]},
  {en:[282000,6135000],ll:[138.61402458997765,-34.90404244787351]}
];
const radians=Math.PI/180,circumference=2*Math.PI*6371008.8;
class Mercator {
  constructor(x,y,z=0){Object.assign(this,{x,y,z});}
  static fromLngLat([lng,lat]){return new this(lng/360+.5,.5-Math.asinh(Math.tan(lat*radians))/(2*Math.PI));}
  toLngLat(){return {lng:(this.x-.5)*360,lat:Math.atan(Math.sinh((.5-this.y)*2*Math.PI))/radians};}
  meterInMercatorCoordinateUnits(){return 1/(circumference*Math.cos(this.toLngLat().lat*radians));}
}
function setup(){
  let calls=0;
  globalThis.window={proj4:(_,__,en)=>{
    calls++;
    const control=controls.find(c=>c.en[0]===en[0]&&c.en[1]===en[1]);
    assert.ok(control,'unexpected projected input '+en);return control.ll;
  },maplibregl:{MercatorCoordinate:Mercator}};
  return ()=>calls;
}
const near=(a,b,tolerance=1e-9)=>assert.ok(Math.abs(a-b)<tolerance,`${a} != ${b}`);

test('OBJ vertices follow Mercator positions, independent of MGA grid north or import anchor',()=>{
  setup();
  for(const anchor of controls){
    const projection=createObjProjection(anchor.en);
    for(const control of controls){
      const [x,h,z]=projection.project(...control.en,26.4);
      const expected=Mercator.fromLngLat(control.ll);
      near(projection.anchor.x+x*projection.scale,expected.x,1e-14);
      near(projection.anchor.y-z*projection.scale,expected.y,1e-14);
      assert.equal(h,26.4);
      const restored=projection.toLngLat(x,z);
      near(restored[0],control.ll[0]);near(restored[1],control.ll[1]);
    }
  }
  const projection=createObjProjection(controls[0].en),v=projection.project(...controls[3].en,0);
  assert.ok(Math.hypot(v[0]-1000,v[2]-1000)>20,'raw MGA offsets must not be reused as map offsets');
});

test('absolute and scene-local exports produce equivalent small GPU coordinates without changing height',()=>{
  const calls=setup(),projection=createObjProjection(controls[0].en);
  const raw='v 281000 6134000 26.4\nv 281300 6134250 90\nv 280850 6133900 -2\nf 1 2 3';
  const local='v 0 0 -73.6\nv 300 250 -10\nv -150 -100 -102\nf 1 2 3';
  const reference={scene_origin:{easting_m:'281000',northing_m:'6134000',height_m:'100'}};
  const a=rebaseObjForMap(raw,'RAW_ENH',null,projection.project);
  const b=rebaseObjForMap(local,'SCENE_LOCAL',reference,projection.project);
  assert.deepEqual(a,b);assert.equal(a.vertexCount,3);
  assert.match(a.text,/v 0\.00000 26\.40000 0\.00000/);
  assert.match(a.text,/f 1 2 3/);
  const importedCalls=calls();
  projection.fromLngLat(controls[1].ll);projection.toLngLat(0,0);
  assert.equal(calls(),importedCalls,'navigation/alignment in the cached map frame must not repeat MGA reprojection');
  assert.throws(()=>rebaseObjForMap(raw,'RAW_ENH',null),/projection is required/);
  assert.throws(()=>rebaseObjForMap(raw,'RAW_ENH',null,()=>[NaN,0,0]),/Invalid projected/);
});
