# Adelaide Views & Vistas — Panorama Explorer

A static browser application for Adelaide Park Lands viewpoints, view-cone shapefiles, local 360° photographs and georeferenced OBJ layers.

## Start

Run a local HTTP server in this directory, then open its address in Chrome or Edge. The supplied Windows launcher can also start the app.

Example: `python3 -m http.server 8765`, then open http://localhost:8765.

The application uses pinned, externally hosted MapLibre, Three.js, shpjs, JSZip and proj4 libraries. Basemap imagery also requires a network connection.

If the page opens but controls are unresponsive after an update, hard-refresh with **Ctrl+Shift+R**. Local modules use matching versioned URLs to prevent an older cached dependency from being mixed with newer code. Module-loading failures display an on-screen startup error.

## Import

1. Open **Import data** and choose the spatial ZIP under **Viewpoints & view cones**. A ZIP containing both shapefiles loads them together. Separate shapefile ZIPs and matching loose SHP/DBF/PRJ files also work.
2. Under **360° photographs**, choose the parent photo folder. All nested subfolders are indexed automatically. Relative paths such as `20260710/IMG_20260709_125554_00_013` match the source `360IMG` attribute.
3. Optionally choose an OBJ ZIP, OBJ files or a directory under **3D Models**. Model and photograph data are supplied locally and are not bundled in the public repository.
4. Import **Reference JSON** when OBJ coordinates are scene-local rather than projected Easting/Northing/Height.
5. Select a location in the sidebar or click its map point.

Local source files are read in the browser; the application does not upload them. Photo-folder selection indexes file names and paths only. It does not read or decode image contents, create photo URLs or preload images. A selected location can then load its matching photo.

## Workspaces

**Import data → Save workspace** downloads a `.vistas-workspace.json` file. It contains source references, per-model coordinate-reference settings, location/category choices, appearance, grounding, labels, heading adjustments, the selected photo and map/panorama position. It contains no photos, geometry, API keys or absolute machine paths. Keep the original source files available; the workspace file alone is not a data backup.

**Open workspace** restores the referenced packs in one operation when access is available. Chrome/Edge can remember granted file/folder handles in IndexedDB; permissions may need renewing, and another browser, origin/port or computer needs reconnection. Other browsers retain normal file/folder imports and use the reconnect dialog. Choose the matching source folders/files, confirm changed sizes/dates explicitly, then load. Renamed root folders work when their internal relative paths are unchanged. Cancel leaves the current workspace intact; **Load available data** explicitly opens a partial workspace and preserves missing references for later reconnection.

Individual imports add packs alongside existing data. Rechoosing the same native file/folder updates its pack. When ordinary file inputs cannot distinguish identical paths, choose **Update** or **Add as new pack**. Each model pack retains its applicable reference configuration, so later reference imports do not reposition existing models. Workspace restoration indexes photo paths only, then decodes just the selected photo.

## Locations and map controls

The **Layers** button opens or closes the flat location sidebar. Search by local/park name or viewpoint ID, then select a name to view its photo. Each location checkbox enables that location’s layers without changing the selected photo. Unmatched models appear under **Other layers**. **Zoom to selection** frames the selected location without changing visibility.

The sidebar’s **Select all / Select none** toggle changes location checkboxes, including locations outside search results and unmatched models. It never changes the map’s category controls. Map category/group controls never change location checkboxes: an object is visible only when both its location and its source/category are enabled. Existing choices survive additive imports; new locations start enabled.

One compact map panel contains the basemap buttons, MetroMap API key button beside MetroMap, global layer selector, text **2D/3D** toggle, **Aa** location-label toggle, target **Fit locations** control and fullscreen. Labels show local names, with a paperclip when an unambiguous accessible photo match exists; labels follow effective point visibility. Label creation does not decode photos. Search remains in the sidebar.

The map layer selector has **Shapefile** and **3D Models** groups, each with Points, Viewsheds and Frustums gates and its own **Select all / Select none** toggle. Gates apply across locations, including those outside search results. Empty categories are disabled. Choices survive selection and basemap changes and apply to later imports. Shapefile frustums are camera/reference sectors derived from viewpoint attributes.

Both separate-category models and combined Blender 1.3.1 exports associate with locations by VIEW_ID. The importer separates combined models internally so the global category controls continue to work.

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

The framed **Spatial appearance** controls sit above the framed **Locations** search controls. Each of **3D Models** and **Shapefiles** has a Point/Line/Fill pill that selects which colour and transparency to edit. All three remain displayed independently. Transparency runs from 0% opaque to 100% invisible; each choice retains its own values. Points default to opaque yellow. Settings apply globally to existing and future imports, survive basemap changes and browser reloads, and can be restored using **Reset appearance**. Camera direction and alignment highlights retain their distinct styling.

## Blender add-ons

The original 1.3.1 and 1.3.2 add-on ZIPs are in `Blender/`. Version 1.3.1 is the version reported as used for the supplied exports; 1.3.2 has not been tested interactively. See [the audit report](Blender/AUDIT.md) for version differences, coordinate precision findings, test results and follow-up recommendations. Neither ZIP bundles photos or OBJ data.

## OBJ grounding

**Ground 3D Models** in the sidebar is enabled by default. Each location's Point, Viewshed and Frustum models receive one shared vertical offset so their lowest imported geometry sits at zero. Their shapes and relative camera heights are preserved. Hidden layers participate in the same baseline calculation; unmatched files are grounded individually.

Uncheck the control to restore original elevations. The selected mode survives OBJ imports and basemap changes for the current page session. Grounding changes model placement only, leaving source files and geometry buffers intact. It uses the lowest imported geometry as the ground baseline, rather than measuring terrain elevation. In the supplied TorRiv.M sample, this retains the camera at approximately 1.6 m above zero.

## Settings

Heading calibration and the optional MetroMap API key use localStorage. The key is saved only when **Remember key in this browser** is checked. **Forget key** removes it from storage and the active session. Imagery tile requests send the key to MetroMap.

Visibility choices last for the page session unless saved in a workspace. Without a workspace, photo files must be selected again after reloading the page.

## Checks

```sh
npm test
python3 tests/test_sample_exports.py
npm run test:browser
```

The unit suite covers source grouping, multi-shapefile imports, recursive metadata-only photo indexing, ambiguity handling, directional clipping with holes and multipart polygons, panorama races and resource cleanup, and individual OBJ visibility and style lifecycle.

When releasing changes to local JavaScript or CSS, update their shared release token in `index.html` together. Startup regression checks verify complete module mappings at both localhost and GitHub Pages project URLs.

The browser check requires an installed Playwright package and its matching Chromium runtime. It looks for a compatible package/browser pair in project, global npm and npm cache packages, or accepts an absolute package location through `PLAYWRIGHT_MODULE`. No package installation is performed by the check.

For full real-data checks, place the supplied spatial ZIP and photo directory in this workspace, or set `VISTAS_SPATIAL_ZIP` and `VISTAS_PHOTO_FOLDER`. The browser check validates the supplied counts, metadata-only photo indexing, all nine OBJ layers, independent location/category gates, model alignment, basemap switching, panorama cleanup and responsive layouts. It also checks workspace save/restore, cancellation, failed-load rollback, reconnection, label sprites and IndexedDB handle persistence. Screenshots go to `/tmp/vistas-browser` by default, configurable with `VISTAS_TEST_ARTIFACTS`.

## Main files

- `index.html`, `css/styles.css`: interface and botanical theme.
- `js/app.js`: application state, map layers and interactions.
- `js/layers.js`, `js/visibility.js`: location grouping, independent visibility gates and photo indexing.
- `js/workspace.js`, `js/workspace-ui.js`: source packs, workspace validation, file-handle storage and reconnect controls.
- `js/map-labels.js`: cached map-label sprites and photo attachment icons.
- `js/alignment.js`: cached polygon preparation and directional clipping.
- `js/panorama.js`, `js/obj-map.js`: demand-rendered panorama and shared-context OBJ renderer.
- `js/importers.js`, `js/core.js`, `js/geo.js`: local file import, data helpers and coordinate conversion.
