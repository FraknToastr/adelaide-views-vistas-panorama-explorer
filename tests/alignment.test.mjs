import test from 'node:test';
import assert from 'node:assert/strict';
import {parseDegrees,sourceSectors,prepareViewshed,clipViewshed,cameraSector} from '../js/alignment.js';

const origin = [138.6,-34.92];
const scaleY = 6378137 * Math.PI / 180;
const scaleX = scaleY * Math.cos(origin[1] * Math.PI / 180);
const geographic = ([x,y]) => [origin[0] + x / scaleX, origin[1] + y / scaleY];
const ring = points => [...points.map(geographic), geographic(points[0])];
const polygon = rings => ({type:'Feature',properties:{},geometry:{type:'Polygon',coordinates:rings.map(ring)}});
const square = [[-10,-10],[10,-10],[10,10],[-10,10]];
const squareTriangulate = () => [[0,1,2],[0,2,3]];
const near = (actual,expected,tolerance = .0001) => assert.ok(Math.abs(actual - expected) < tolerance,`${actual} differs from ${expected}`);
function area(collection) {
  let total = 0;
  for (const feature of collection.features) {
    const polygons = feature.geometry.type === 'Polygon' ? [feature.geometry.coordinates] : feature.geometry.coordinates;
    for (const polygon of polygons) for (let r = 0; r < polygon.length; r++) {
      const points = polygon[r].map(([lng,lat]) => [(lng-origin[0])*scaleX,(lat-origin[1])*scaleY]);
      let twiceArea = 0;
      for (let index = 0; index < points.length-1; index++) twiceArea += points[index][0]*points[index+1][1]-points[index+1][0]*points[index][1];
      total += (r ? -1 : 1)*Math.abs(twiceArea)/2;
    }
  }
  return total;
}

test('DBF degree parsing rejects blanks, nulls and sentinel strings',()=>{
  assert.equal(parseDegrees('48.936°'),48.936);
  assert.equal(parseDegrees(' -2.5 ° '),-2.5);
  assert.equal(parseDegrees('1.2e2'),120);
  assert.equal(parseDegrees(0),0);
  for (const value of ['', ' ',null,undefined,'**********','NaN','22 degrees',Infinity]) assert.equal(parseDegrees(value),null);
});

test('source sectors preserve all valid slots and duplicate cone rows without duplicate sectors',()=>{
  const rows = [
    {properties:{BEARING1:'359',HFOV1:'22.607°',DIST1:'80',BEARING2:'189.066244',HFOV2:'69.382°'}},
    {BEARING1:'359',HFOV1:'22.607°',DIST1:'80',BEARING3:'-90',HFOV3:90},
    {BEARING1:0,HFOV1:'',BEARING2:90,HFOV2:361,BEARING3:90,HFOV3:0}
  ];
  assert.deepEqual(sourceSectors(rows),[
    {heading:359,horizontalFov:22.607,distance:80},
    {heading:189.066244,horizontalFov:69.382},
    {heading:270,horizontalFov:90}
  ]);
});

test('north, east, south and west clipping preserves equal quadrant area across north wrap',()=>{
  const prepared = prepareViewshed([polygon([square])],origin,squareTriangulate);
  near(prepared.radius,Math.sqrt(200));
  for (const heading of [0,90,180,270,360,-90]) near(area(clipViewshed(prepared,heading,90)),100);
  near(area(clipViewshed(prepared,0,45)),100*Math.tan(Math.PI/8));
  assert.equal(prepared.triangles.length,2);
});

test('full, partial and zero directional overlap respect source geometry',()=>{
  const northernSquare = [[-4,4],[4,4],[4,10],[-4,10]];
  const prepared = prepareViewshed([polygon([northernSquare])],origin,squareTriangulate);
  near(area(clipViewshed(prepared,0,100)),48);
  const partial = area(clipViewshed(prepared,45,60));
  assert.ok(partial > 0 && partial < 48);
  assert.deepEqual(clipViewshed(prepared,180,60).features,[]);
});

test('concave outlines remain concave after clipping instead of bridging their cutouts',()=>{
  const outline = [[0,0],[10,0],[10,4],[4,4],[4,10],[0,10]];
  const prepared = prepareViewshed([polygon([outline])],origin,()=>[[0,1,2],[0,2,3],[0,3,4],[0,4,5]]);
  near(area(clipViewshed(prepared,0,90)),32);
});

test('hole-aware cached triangles do not fill holes during clipping',()=>{
  const inner = [[-2,-2],[2,-2],[2,2],[-2,2]];
  let calls = 0;
  const prepared = prepareViewshed([polygon([square,inner])],origin,(outer,holes)=>{
    calls++;
    assert.equal(outer.length,4);
    assert.equal(holes[0].length,4);
    return [[0,1,5],[0,5,4],[1,2,6],[1,6,5],[2,3,7],[2,7,6],[3,0,4],[3,4,7]];
  });
  near(area(clipViewshed(prepared,0,90)),96);
  near(area(clipViewshed(prepared,90,90)),96);
  assert.equal(calls,1,'interaction reuses the prepared triangles');
});

test('MultiPolygon parts stay disconnected',()=>{
  const first = [[-4,4],[-2,4],[-2,8],[-4,8]];
  const second = [[2,4],[4,4],[4,8],[2,8]];
  const feature = {type:'Feature',properties:{},geometry:{type:'MultiPolygon',coordinates:[[ring(first)],[ring(second)]]}};
  const prepared = prepareViewshed([feature],origin,squareTriangulate);
  near(area(clipViewshed(prepared,0,110)),16);
});

test('overlapping source intervals are unioned before clipping to avoid double opacity',()=>{
  const prepared = prepareViewshed([polygon([square])],origin,squareTriangulate);
  const intervals = [{heading:355,horizontalFov:30},{heading:5,horizontalFov:30},{heading:0,horizontalFov:20}];
  near(area(clipViewshed(prepared,0,90,intervals)),area(clipViewshed(prepared,0,40)));
  near(area(clipViewshed(prepared,0,90,[{heading:0,horizontalFov:360}])),100);
  assert.deepEqual(clipViewshed(prepared,0,90,[{heading:180,horizontalFov:30}]).features,[]);
});

test('invalid input does not fabricate overlap',()=>{
  const prepared = prepareViewshed([polygon([square])],origin,squareTriangulate);
  for (const fov of [0,-1,180,360,NaN]) assert.deepEqual(clipViewshed(prepared,0,fov).features,[]);
  assert.deepEqual(clipViewshed(prepared,NaN,90).features,[]);
  assert.equal(cameraSector(origin,0,90,0),null);
  assert.throws(()=>prepareViewshed([],[],squareTriangulate),/origin/);
  assert.throws(()=>prepareViewshed([],origin),/triangulator/);
});

test('sector footprint uses geographic bearings and a metre radius',()=>{
  const sector = cameraSector(origin,0,90,100);
  assert.equal(sector.geometry.type,'Polygon');
  const points = sector.geometry.coordinates[0];
  assert.deepEqual(points[0],origin);
  assert.deepEqual(points.at(-1),origin);
  const left = points[1], right = points.at(-2);
  near((left[0]-origin[0])*scaleX,-Math.sqrt(5000));
  near((right[0]-origin[0])*scaleX,Math.sqrt(5000));
  near((left[1]-origin[1])*scaleY,Math.sqrt(5000));
});
