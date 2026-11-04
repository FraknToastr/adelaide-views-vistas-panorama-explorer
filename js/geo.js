import {CRS} from './core.js';
export function registerCRS() {
  if (!window.proj4) throw new Error('The projection library did not load. Please check your internet connection.');
  // GDA2020 MGA Zone 54: metre units; ellipsoid GRS80. Geographic output is WGS84 longitude/latitude.
  window.proj4.defs(CRS, '+proj=utm +zone=54 +south +ellps=GRS80 +units=m +no_defs +type=crs');
}
export function toLngLat(easting,northing) {
  if (!Number.isFinite(easting) || !Number.isFinite(northing)) throw new Error('Invalid projected coordinates.');
  return window.proj4(CRS,'EPSG:4326',[easting,northing]);
}
export function plausibleLonLat(coords) {
  return coords?.[0] >= 110 && coords?.[0] <= 160 && coords?.[1] >= -47 && coords?.[1] <= -5;
}
function convertCoords(coords) {
  if (!Array.isArray(coords)) return coords;
  if (typeof coords[0] === 'number') {
    if (!Number.isFinite(coords[0]) || !Number.isFinite(coords[1])) return coords;
    if (plausibleLonLat(coords)) return coords;
    const [lng,lat] = toLngLat(coords[0],coords[1]);
    return [lng,lat,...coords.slice(2)];
  }
  return coords.map(convertCoords);
}
export function normaliseGeoJSON(input) {
  const collections = Array.isArray(input) ? input : [input];
  const features = [];
  for (const col of collections) {
    if (col?.type === 'FeatureCollection') features.push(...(col.features || []));
    else if (col?.type === 'Feature') features.push(col);
  }
  if (!features.length) throw new Error('No features found in the selected shapefile.');
  return {type:'FeatureCollection', features:features.filter(f=>f.geometry).map(f=>({
    type:'Feature', id:f.id, properties:{...(f.properties || {})}, geometry:{...f.geometry,coordinates:convertCoords(f.geometry.coordinates)}
  }))};
}
export function boundsFromFeatures(features) {
  let west=Infinity,south=Infinity,east=-Infinity,north=-Infinity;
  for (const f of features) {
    if (f.geometry?.type !== 'Point') continue;
    const [lng,lat] = f.geometry.coordinates;
    if (!Number.isFinite(lng)||!Number.isFinite(lat)) continue;
    west=Math.min(west,lng);east=Math.max(east,lng);south=Math.min(south,lat);north=Math.max(north,lat);
  }
  return Number.isFinite(west)?[[west,south],[east,north]]:null;
}
export function bearingLine(lng,lat,heading,distanceM=100) {
  const theta=heading*Math.PI/180, r=6378137, rad= Math.PI/180;
  const endLat=lat+(Math.cos(theta)*distanceM/r)/rad;
  const endLon=lng+(Math.sin(theta)*distanceM/(r*Math.cos(lat*rad)))/rad;
  return {type:'Feature',properties:{},geometry:{type:'LineString',coordinates:[[lng,lat],[endLon,endLat]]}};
}
