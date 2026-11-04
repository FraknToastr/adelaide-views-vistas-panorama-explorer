## Unreleased

- Added a location-based layer sidebar with individual 2D and 3D OBJ controls, mixed states and select all/none.
- Added combined spatial ZIP imports while retaining all valid cone records.
- Added camera-direction viewshed overlap and a light Park Lands theme; removed descriptive UI metadata and prose.
- Added recursive photo indexing without reading images, serialized lazy decoding, GPU-limit texture handling and resource cleanup.
- Cached rendering transforms and photo matches, restored bounded OBJ culling and added unit/browser regression coverage.

# 1.0.0 — 2026-11-04

- First complete standalone, multi-file browser release.
- Responsive 50/50 MapLibre map and Three.js spherical panorama viewer.
- Shapefile ZIP or loose component import, VIEW_ID selection, optional polygon overlay.
- 360IMG-to-photo mapping through subfolders, case-insensitive matching and missing-photo handling.
- Esri World Aerial, Esri World Topography, MetroMap Australia_latest basemaps.
- Explicit opt-in local storage and flush for MetroMap API key.
- EPSG:7854 metre-based OBJ import, zipped/directory/individual; category layer controls; precision-preserving local anchoring.
- Real Park 10 OBJ sample and source export reference included.
- Regression checks for grouping, metre coordinates and sample export contents.
