## Unreleased

- Restore per-location visibility checkboxes and the sidebar Select all/none toggle without expansion; synchronize with map groups/categories and apply the latest matching intent to new imports.
- Simplify the sidebar to searchable locations; move visibility to global map controls with independent Shapefile/3D Models select-all toggles and future-import category preferences.
- Combine basemap, layers, 2D/3D, fit, API key and fullscreen controls in a compact map panel; standardize visible model labels as 3D Models.
- Add map fullscreen with shared panorama behaviour, distinct fit/3D icons, and a six-category map layer widget synchronized with the sidebar.
- Version local module URLs together to avoid mixed cached code after updates; show startup failures even when the app module cannot load.
- Correct OBJ/shapefile alignment by reprojecting each vertex into a cached local Mercator frame, including camera-highlight origins and Zoom to Selection.
- Support combined Blender 1.3.1 location exports alongside separate-category 1.3.2 exports; preserve shared grounding and independent category visibility.
- Add global Line/Fill colour and transparency controls, remembered appearance settings, reset, and cached OBJ edge overlays.
- Frame Layers search/visibility controls below Spatial appearance; strengthen legends, replace the leaf with a tree, and keep Import data in the main header only.
- Include both original Blender add-on ZIPs and an alignment/precision audit; keep photos and source OBJ/model archives excluded.
- Ground OBJ models at zero per location by default, preserving shared point/viewshed/frustum geometry and camera height; add a sidebar toggle to restore original elevations.

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
