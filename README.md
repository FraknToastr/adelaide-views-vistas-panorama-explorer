# Adelaide Views & Vistas — Panorama Explorer

A static browser application for Adelaide Park Lands viewpoints, view-cone shapefiles, local 360° photographs and georeferenced OBJ layers.

## Start

Run a local HTTP server in this directory, then open its address in Chrome or Edge. The supplied Windows launcher can also start the app.

Example: `python3 -m http.server 8765`, then open http://localhost:8765.

The application uses pinned, externally hosted MapLibre, Three.js, shpjs, JSZip and proj4 libraries. Basemap imagery also requires a network connection.

## Import

1. Open **Import data** and choose the spatial ZIP under **Viewpoints & view cones**. A ZIP containing both shapefiles loads them together. Separate shapefile ZIPs and matching loose SHP/DBF/PRJ files also work.
2. Under **360° photographs**, choose the parent photo folder. All nested subfolders are indexed automatically. Relative paths such as `20260710/IMG_20260709_125554_00_013` match the source `360IMG` attribute.
3. Optionally choose an OBJ ZIP, OBJ files or a directory under **3D OBJ layers**. Model and photograph data are supplied locally and are not bundled in the public repository.
4. Import **Reference JSON** when OBJ coordinates are scene-local rather than projected Easting/Northing/Height.
5. Select a location in the sidebar or click its map point.

Local source files are read in the browser; the application does not upload them. Photo-folder selection indexes file names and paths only. It does not read or decode image contents, create photo URLs or preload images. A selected location can then load its matching photo.

## Layer selector

The **Layers** button opens or closes the sidebar. Search by park/local label or viewpoint ID. Location labels use `PARK_NAME`, with `VIEW_ID` to distinguish viewpoints. **Expand all** opens every location branch and becomes **Collapse all** when all branches are open.

Each location contains **Point**, **Viewshed** and **Frustum** controls. Expand a location to see its individual map and **3D OBJ** layers. OBJ files remain individually toggleable; location and category checkboxes toggle all their children and show mixed states.

- **Select none** disables every loaded layer, including entries outside the search results; it becomes **Select all** until every layer is enabled again.
- Expanding or selecting a location does not change visibility. **Zoom to selection** frames the active location and its associated point, cones and OBJ geometry without changing layer visibility.
- Visibility survives basemap changes and photo navigation. New OBJ entries inherit hidden location/category states.
- Separate-category OBJ names such as `Park_10__TorRiv.M__Viewsheds.obj` associate with viewpoint `TorRiv.M`. Combined 1.3.1 exports such as `Park_10__TorRiv.M.obj` are separated internally by their generated Point/Viewshed/Frustum object names. Files without a recognizable location token remain available under **Other layers**.
- Viewpoints without photos remain selectable.
- Shapefile cone polygons are the 2D viewshed representation. Optional OBJ viewsheds and frustums are separate 3D layers.

## Photo direction and rendering

Drag/swipe to look around; use the wheel to zoom. Arrow keys pan/tilt, Home resets the camera, and [ / ] navigate photo locations. The heading buttons or Q / E calibrate the photo's compass offset. Calibration changes the map bearing while keeping the viewed image stable; offsets are saved per viewpoint.

The **5° / 1°** button beside the heading stepper switches its increment. Both the minus/plus buttons and Q / E shortcuts use the selected increment; 5° is the default.

The compass button beside Reset toggles a vertical line through the photo centre and its current compass bearing. It follows panning and heading calibration and uses the same calibrated direction as the map. The overlay allows dragging through it and hides whenever no photo is displayed.

The map shows the current horizontal camera sector, source reference sectors where valid bearings/FOVs exist, and the portion of the selected viewshed within the camera sector. Visible OBJ viewsheds receive the same directional mask on their imported surfaces. Each viewshed controls its own highlight; hiding a frustum hides its footprint and outlines.

This is geometric directional overlap. It does not calculate terrain occlusion or verify the source's survey alignment. Images without compass headings require manual calibration.

The viewer decodes only the selected photo, serializes decoding, discards superseded selections and releases previous textures and decoded images. Only the newest pending selection is retained. Rendering is scheduled on demand and interaction updates are coalesced into animation frames.

Large panoramas use their original resolution when the GPU supports it. If the image exceeds the actual GPU texture-size limit, only the working texture is resized, preserving its aspect ratio. Original files remain untouched. Automatic photo recompression is not enabled. A lossless JPEG optimization trial on the supplied TorRiv.M photo reduced its file size by 3.45% with identical decoded pixels, XMP and EXIF; this does not reduce decoded GPU memory. No source photos were rewritten.

## Spatial data

All valid source records are preserved, including multiple cones and repeated cone numbers for the same viewpoint. A single representative map marker is selected per viewpoint, favoring records with a photo reference and positive height.

The supplied spatial ZIP contains 139 non-null point records, 139 non-null polygon records and 90 named viewpoint IDs. There are photo references for 53 locations; multiple locations can share a photograph. Null geometries and unnamed placeholder records are excluded from rendering.

The app uses shapefile geometry and PRJ information, rather than guessing coordinate units from field names. The supplied GDA2020 / MGA Zone 54 data is compatible with EPSG:7854. Its fields named LONG and LAT contain projected metre coordinates.

OBJ Easting/Northing coordinates are individually reprojected from MGA54 into MapLibre Mercator, then rebased before conversion to GPU buffers. This accounts for grid-north rotation and projection scale differences; raw MGA offsets are not used as map offsets. Height remains in source metres. Scene-local coordinates require a matching scene origin. Import computes and caches geometry, normals, edges and bounds; navigation and appearance changes do not repeat projection work. Source OBJ textures are not loaded. Preview limits remain 110 MB of text per OBJ and 500 MB combined OBJ inputs.

The local TorRiv.M sample had approximately 6.1 m of horizontal display error with the former anchor-only conversion. Corrected import aligns its viewshed within approximately 0.3 m of the shapefile, reflecting existing OBJ float32 rounding. The importer cannot recover source precision already lost before export.

## Spatial appearance

The framed **Spatial appearance** controls sit above the framed **Layers** search and visibility controls. Each of **3D objects** and **Shapefiles** has a Line/Fill pill that selects which colour and transparency to edit. Both lines and fills remain displayed. Transparency runs from 0% opaque to 100% invisible; each choice retains its own values. Settings apply globally to existing and future imports, survive basemap changes and browser reloads, and can be restored using **Reset appearance**. Points initially remain opaque until fill transparency is edited. Camera direction and alignment highlights retain their distinct styling.

## Blender add-ons

The original 1.3.1 and 1.3.2 add-on ZIPs are in `Blender/`. Version 1.3.1 is the version reported as used for the supplied exports; 1.3.2 has not been tested interactively. See [the audit report](Blender/AUDIT.md) for version differences, coordinate precision findings, test results and follow-up recommendations. Neither ZIP bundles photos or OBJ data.

## OBJ grounding

**Ground OBJ layers** in the sidebar is enabled by default. Each location's Point, Viewshed and Frustum models receive one shared vertical offset so their lowest imported geometry sits at zero. Their shapes and relative camera heights are preserved. Hidden layers participate in the same baseline calculation; unmatched files are grounded individually.

Uncheck the control to restore original elevations. The selected mode survives OBJ imports and basemap changes for the current page session. Grounding changes model placement only, leaving source files and geometry buffers intact. It uses the lowest imported geometry as the ground baseline, rather than measuring terrain elevation. In the supplied TorRiv.M sample, this retains the camera at approximately 1.6 m above zero.

## Settings

Heading calibration and the optional MetroMap API key use localStorage. The key is saved only when **Remember key in this browser** is checked. **Forget key** removes it from storage and the active session. Imagery tile requests send the key to MetroMap.

Layer visibility lasts for the page session. Photo files must be selected again after a page reload.

## Checks

```sh
npm test
python3 tests/test_sample_exports.py
npm run test:browser
```

The unit suite covers source grouping, multi-shapefile imports, recursive metadata-only photo indexing, ambiguity handling, directional clipping with holes and multipart polygons, panorama races and resource cleanup, and individual OBJ visibility and style lifecycle.

The browser check requires an installed Playwright package and its matching Chromium runtime. It looks for a compatible package/browser pair in project, global npm and npm cache packages, or accepts an absolute package location through `PLAYWRIGHT_MODULE`. No package installation is performed by the check.

For full real-data checks, place the supplied spatial ZIP and photo directory in this workspace, or set `VISTAS_SPATIAL_ZIP` and `VISTAS_PHOTO_FOLDER`. The browser check validates the supplied dataset counts, zero photo decodes during folder indexing, all nine OBJ layers, mixed and bulk visibility, basemap switching, panorama loading and cleanup, and desktop/mobile layouts. Screenshots go to `/tmp/vistas-browser` by default, configurable with `VISTAS_TEST_ARTIFACTS`.

## Main files

- `index.html`, `css/styles.css`: interface and botanical theme.
- `js/app.js`: application state, map layers and interactions.
- `js/layers.js`: location hierarchy, visibility and photo indexing.
- `js/alignment.js`: cached polygon preparation and directional clipping.
- `js/panorama.js`, `js/obj-map.js`: demand-rendered panorama and shared-context OBJ renderer.
- `js/importers.js`, `js/core.js`, `js/geo.js`: local file import, data helpers and coordinate conversion.
