/** Directional overlap in a local east/north plane; no terrain visibility is inferred. */
const RAD = Math.PI / 180;
const EARTH_RADIUS = 6378137;
const EPSILON = 1e-8;
const wrap = angle => angle >= 0 && angle < 360 ? angle : ((angle % 360) + 360) % 360;
const empty = () => ({type:'FeatureCollection', features:[]});

/** Accept numeric attributes and degree-labelled DBF strings, but never coerce blanks to zero. */
export function parseDegrees(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;
  if (typeof value !== 'string') return null;
  const text = value.trim();
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?\s*°?$/i.test(text)) return null;
  const number = Number(text.replace(/\s*°$/, ''));
  return Number.isFinite(number) ? number : null;
}

/** Keep every valid source slot, without assuming a slot number identifies a polygon. */
export function sourceSectors(rows = []) {
  const sectors = new Map();
  for (const row of rows) {
    const properties = row?.properties || row || {};
    for (let index = 1; index <= 5; index++) {
      const heading = parseDegrees(properties[`BEARING${index}`]);
      const horizontalFov = parseDegrees(properties[`HFOV${index}`]);
      const distance = parseDegrees(properties[`DIST${index}`]);
      if (heading === null || horizontalFov === null || horizontalFov <= 0 || horizontalFov > 360) continue;
      const sector = {heading:wrap(heading), horizontalFov};
      if (distance !== null && distance > 0) sector.distance = distance;
      sectors.set(`${sector.heading}:${horizontalFov}:${sector.distance ?? ''}`, sector);
    }
  }
  return [...sectors.values()];
}

function projection(origin) {
  if (!Array.isArray(origin) || origin.length < 2 || !origin.slice(0,2).every(Number.isFinite)
      || Math.abs(origin[0]) > 180 || Math.abs(origin[1]) >= 90) throw new Error('Invalid viewshed origin.');
  const eastScale = EARTH_RADIUS * RAD * Math.cos(origin[1] * RAD);
  const northScale = EARTH_RADIUS * RAD;
  return {
    toLocal: coordinate => ({x:(coordinate[0] - origin[0]) * eastScale, y:(coordinate[1] - origin[1]) * northScale}),
    toGeographic: point => [origin[0] + point.x / eastScale, origin[1] + point.y / northScale]
  };
}

function ringPoints(ring, project) {
  if (!Array.isArray(ring) || ring.some(point => !Array.isArray(point) || !point.slice(0,2).every(Number.isFinite) || point.length < 2)) return [];
  const points = ring.map(project);
  if (points.length > 1 && points[0].x === points.at(-1).x && points[0].y === points.at(-1).y) points.pop();
  return points;
}

/**
 * Cache triangulation once per location. The injected triangulator accepts plain {x,y}
 * contour/holes and returns index triples into their flattened vertices, as Three's
 * ShapeUtils.triangulateShape does. This preserves concavities, holes and disjoint parts.
 */
export function prepareViewshed(features, origin, triangulate) {
  if (typeof triangulate !== 'function') throw new Error('A polygon triangulator is required.');
  const transform = projection(origin);
  const triangles = [];
  let radius = 0;
  for (const feature of features || []) {
    const geometry = feature?.geometry;
    const polygons = geometry?.type === 'Polygon' ? [geometry.coordinates]
      : geometry?.type === 'MultiPolygon' ? geometry.coordinates : [];
    for (const polygon of polygons || []) {
      if (!Array.isArray(polygon) || !polygon.length) continue;
      const rings = polygon.map(ring => ringPoints(ring, transform.toLocal));
      if (rings.some(ring => ring.length < 3)) continue;
      const vertices = rings.flat();
      // Keep our vertex order stable even if a triangulator reverses its input rings.
      const faces = triangulate(rings[0].map(point => ({...point})), rings.slice(1).map(ring => ring.map(point => ({...point}))));
      for (const face of faces || []) {
        if (!Array.isArray(face) || face.length !== 3 || face.some(index => !Number.isInteger(index) || !vertices[index])) continue;
        const triangle = face.map(index => vertices[index]);
        if (Math.abs(signedArea(triangle)) <= EPSILON) continue;
        triangles.push(triangle);
        for (const point of triangle) radius = Math.max(radius, Math.hypot(point.x,point.y));
      }
    }
  }
  return {origin:origin.slice(0,2), triangles, radius, toGeographic:transform.toGeographic};
}

function signedArea(points) {
  let area = 0;
  for (let index = 0; index < points.length; index++) {
    const point = points[index], next = points[(index + 1) % points.length];
    area += point.x * next.y - next.x * point.y;
  }
  return area / 2;
}

function clipPlane(points, normalX, normalY) {
  if (!points.length) return [];
  const result = [];
  let previous = points.at(-1);
  let previousDistance = normalX * previous.x + normalY * previous.y;
  for (const point of points) {
    const distance = normalX * point.x + normalY * point.y;
    const previousInside = previousDistance >= -EPSILON, inside = distance >= -EPSILON;
    if (previousInside !== inside) {
      const ratio = previousDistance / (previousDistance - distance);
      result.push({x:previous.x + (point.x - previous.x) * ratio, y:previous.y + (point.y - previous.y) * ratio});
    }
    if (inside) result.push(point);
    previous = point;
    previousDistance = distance;
  }
  return result;
}

function angularRanges(heading, width) {
  if (width >= 360) return [[0,360]];
  const start = wrap(heading - width / 2), end = start + width;
  return end > 360 ? [[start,360],[0,end-360]] : [[start,end]];
}

function unionRanges(intervals) {
  const ranges = intervals.flatMap(interval => {
    const heading = parseDegrees(interval?.heading), width = parseDegrees(interval?.horizontalFov);
    return heading === null || width === null || width <= 0 || width > 360 ? [] : angularRanges(heading,width);
  }).sort((left,right) => left[0] - right[0]);
  const merged = [];
  for (const range of ranges) {
    const previous = merged.at(-1);
    if (previous && range[0] <= previous[1] + EPSILON) previous[1] = Math.max(previous[1],range[1]);
    else merged.push([...range]);
  }
  return merged;
}

/** Return a fill-only FeatureCollection; triangle seams do not need outline strokes. */
export function clipViewshed(prepared, heading, horizontalFov, intervals = []) {
  if (!prepared?.triangles?.length || !Number.isFinite(heading) || !Number.isFinite(horizontalFov)
      || horizontalFov <= 0 || horizontalFov >= 180) return empty();
  const cameraRanges = angularRanges(heading,horizontalFov);
  const sourceRanges = intervals.length ? unionRanges(intervals) : [[0,360]];
  const ranges = [];
  for (const camera of cameraRanges) for (const source of sourceRanges) {
    const start = Math.max(camera[0],source[0]), end = Math.min(camera[1],source[1]);
    if (end - start > EPSILON) ranges.push([start,end]);
  }
  const pieces = [];
  for (const [start,end] of ranges) {
    const left = start * RAD, right = end * RAD;
    for (const triangle of prepared.triangles) {
      let clipped = clipPlane(triangle,Math.cos(left),-Math.sin(left));
      clipped = clipPlane(clipped,-Math.cos(right),Math.sin(right));
      if (clipped.length < 3 || Math.abs(signedArea(clipped)) <= EPSILON) continue;
      const ring = clipped.map(prepared.toGeographic);
      ring.push([...ring[0]]);
      pieces.push([ring]);
    }
  }
  return {type:'FeatureCollection',features:pieces.length ? [{type:'Feature',properties:{},geometry:{type:'MultiPolygon',coordinates:pieces}}] : []};
}

/** A sector footprint for camera/source reference outlines, with a metre radius. */
export function cameraSector(origin, heading, horizontalFov, radius) {
  if (!Number.isFinite(heading) || !Number.isFinite(horizontalFov) || horizontalFov <= 0 || horizontalFov > 360
      || !Number.isFinite(radius) || radius <= 0) return null;
  const transform = projection(origin);
  const steps = Math.max(2,Math.ceil(horizontalFov / 4));
  const ring = [origin.slice(0,2)];
  for (let index = 0; index <= steps; index++) {
    const angle = (heading - horizontalFov / 2 + horizontalFov * index / steps) * RAD;
    ring.push(transform.toGeographic({x:Math.sin(angle) * radius, y:Math.cos(angle) * radius}));
  }
  ring.push(origin.slice(0,2));
  return {type:'Feature',properties:{},geometry:{type:'Polygon',coordinates:[ring]}};
}
