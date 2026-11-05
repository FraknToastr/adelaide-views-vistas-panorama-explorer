/** Framework-free, testable data helpers for Adelaide Views & Vistas. */
export const CRS = 'EPSG:7854';
export const DEFAULT_CENTER = [138.5995, -34.9195];

export function normalisePath(path) {
  return String(path ?? '').replace(/\\/g, '/').replace(/^\/+/, '').trim().toLowerCase();
}
export function photoKey(path) {
  return normalisePath(path).replace(/\.(jpg|jpeg|png|webp)$/i, '');
}
export function viewId(props = {}) {
  return String(props.VIEW_ID ?? props.view_id ?? props.View_ID ?? '').trim();
}
export function photoReference(props = {}) {
  return String(props['360IMG'] ?? props['360img'] ?? props['360_IMG'] ?? '').trim();
}
export function formatViewName(props = {}) {
  return String(props.PARK_NAME ?? props.park_name ?? props.Park_Name ?? '').trim() || 'Adelaide Park Lands';
}
export function matchPhoto(reference, files) {
  const key = photoKey(reference);
  if (!key) return null;
  const direct = files.filter(f => {
    const p = photoKey(f.webkitRelativePath || f.path || f.name);
    return p === key || p.endsWith('/' + key);
  });
  if (direct.length === 1) return direct[0];
  if (direct.length > 1) return null; // Never pick ambiguously.
  const basename = key.split('/').pop();
  const fallback = files.filter(f => photoKey(f.name).split('/').pop() === basename);
  return fallback.length === 1 ? fallback[0] : null;
}
export function selectViewpointFeatures(features = []) {
  const byId = new Map();
  for (const feature of features) {
    const id = viewId(feature?.properties);
    if (!id || feature?.geometry?.type !== 'Point') continue;
    const p = feature.properties;
    const altitude = Number(p.ALTITUDE_1 ?? 0);
    const score = (photoReference(p) ? 4 : 0) + (Number.isFinite(altitude) && altitude > 0 ? 2 : 0) + (formatViewName(p) !== 'Adelaide Park Lands' ? 1 : 0);
    if (!byId.has(id) || score > byId.get(id).score) byId.set(id, { feature, score });
  }
  return [...byId.values()].map(v => v.feature).sort((a, b) => viewId(a.properties).localeCompare(viewId(b.properties), 'en', {numeric:true}));
}
export function classifyObj(path) {
  const p = normalisePath(path);
  if (/(?:^|[\/_.-])frustums?(?:\.obj|[\/_.-]|$)/i.test(p)) return 'Frustums';
  if (/(?:^|[\/_.-])viewsheds?(?:\.obj|[\/_.-]|$)/i.test(p)) return 'Viewsheds';
  if (/(?:^|[\/_.-])points?(?:\.obj|[\/_.-]|$)/i.test(p)) return 'Points';
  return 'Other';
}
export function parseFirstObjVertex(text) {
  const m = String(text).match(/^v\s+(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s+(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s+(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?)/im);
  if (!m) throw new Error('OBJ file has no vertices.');
  return m.slice(1,4).map(Number);
}
export function getObjCoordinateFrame(firstVertex, reference) {
  const [e, n] = firstVertex;
  if (e >= 100000 && e <= 900000 && n >= 4000000 && n <= 9000000) return 'RAW_ENH';
  if (reference?.scene_origin && (reference?.lod_source_frame === 'SCENE_LOCAL' || reference?.obj_coordinates?.toLowerCase().includes('local'))) return 'SCENE_LOCAL';
  throw new Error('OBJ vertices are not in MGA Zone 54 metres. Supply export_reference.json if they use scene-local coordinates.');
}
export function projectedVertex(firstVertex, frame, reference) {
  if (frame === 'RAW_ENH') return firstVertex;
  if (frame === 'SCENE_LOCAL') {
    const {easting_m,northing_m,height_m} = reference.scene_origin;
    return [firstVertex[0] + Number(easting_m), firstVertex[1] + Number(northing_m), firstVertex[2] + Number(height_m || 0)];
  }
  throw new Error('Unsupported OBJ coordinate frame.');
}
export function rebaseObjForMap(text, frame, reference, project) {
  if(typeof project!=='function')throw new Error('OBJ map projection is required.');
  let count = 0;
  const output = String(text).split(/\r?\n/).map(line => {
    if (/^v\s/.test(line)) {
      const parts = line.trim().split(/\s+/);
      if (parts.length < 4) return line;
      const v = parts.slice(1,4).map(Number);
      if (!v.every(Number.isFinite)) return line;
      const [e,n,h] = projectedVertex(v,frame,reference);
      // XYZ OBJ originally E,N,H. Project E/N into the map's local east/north
      // plane while retaining H as Three.js Y. Never treat MGA offsets as Mercator.
      const xyz=project(e,n,h);
      if(!xyz.every(Number.isFinite))throw new Error('Invalid projected OBJ vertex.');
      count++;
      return 'v '+xyz.map(value=>value.toFixed(5)).join(' ');
    }
    if (/^vn\s/.test(line)) {
      const a = line.trim().split(/\s+/);
      if (a.length >= 4) return `vn ${a[1]} ${a[3]} ${a[2]}`;
    }
    return line;
  }).join('\n');
  if (!count) throw new Error('OBJ contains no valid vertices.');
  return { text: output, vertexCount: count };
}
export function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
export function wrapDegrees(n) { return ((n % 360) + 360) % 360; }
export function safeLabel(s) { return String(s ?? '').replace(/[<>]/g,'').slice(0,160); }
