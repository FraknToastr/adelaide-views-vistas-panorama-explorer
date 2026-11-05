# Blender add-on alignment audit

Audited 2026-11-05. Version 1.3.1 is the version reported as used for the source exports; 1.3.2 has not been tested interactively by the user. Both original ZIPs are retained unchanged alongside this report.

## Result

The main TorRiv.M misalignment was in the explorer: it treated MGA Zone 54 easting/northing offsets as north-aligned map offsets. The original local sample reproduced approximately 6.1 m of horizontal error. Reprojecting every vertex into MapLibre Mercator coordinates reduces the mismatch to less than 0.3 m, the precision already present in the OBJ data. No Blender add-on change is necessary to correct that main display error.

All 80 source TorRiv.M OBJ viewshed vertices match shapefile XY vertices exactly when the latter are rounded to float32. Before that rounding, the maximum nearest-vertex difference is approximately 0.245 m. This is evidence of coordinate precision loss, not a separate translation that should be manually calibrated away.

## Findings and code evidence

### Precision: large coordinates enter Blender vectors and mesh storage

`georef.py` deliberately stores origins as decimal strings and parses them as Python floats. This is a useful safeguard. However, `views.py:399–411` converts the origin to `mathutils.Vector` in `output_origin_for_frame`, and `views.py:525–534` combines vector components with the temporary edit translation. Mesh construction then passes coordinates to `mesh.from_pydata` (`views.py:197–202`). Temporary LOD restoration also uses Blender transforms.

These vector/mesh/transform boundaries do not preserve the original Python decimal precision at northings near 6.1 million metres. RAW_ENH outputs are particularly exposed. Converting a rounded origin to a vector before subtracting it also prevents scene-local generation from retaining the full original origin precision. The supplied raw export demonstrates float32 rounding, although the export alone cannot identify every stage that contributed to it.

Recommendation for a future revision: retain origins and the complete edit/restore translation as Python double-precision values, subtract the shared origin before constructing Blender vectors or meshes, and export small local coordinates with explicit reference metadata. Preserve that local frame through restoration/export; adding a large origin back into a Blender transform can reintroduce the loss. Merely printing extra decimal places during OBJ export cannot recover precision already lost. Validate the complete workflow in real Blender before releasing this change.

### Versions 1.3.1 and 1.3.2 have the same geometry calculations

`georef.py`, `lod.py` and `views.py` are byte-for-byte identical between the supplied ZIPs. The exporter, its documentation and its batch-export mock tests changed. Version 1.3.1 groups objects by location and VIEW_ID into a combined OBJ. Version 1.3.2 additionally groups by source geometry type and exports Points, Viewsheds and Frustums separately.

Both use +Y forward, +Z up and scale 1.0. The exporter applies object transforms and writes scene-frame/CRS reference metadata. It does not reproject to Web Mercator, which is appropriate: that conversion belongs in the map application.

The supplied Park 10 sample uses the separate-category layout described by 1.3.2. That layout alone is not proof of which installed build produced it. Record the actual installed build and original export reference when reproducing an export; do not relabel existing data based only on its filenames.

The explorer now supports both known layouts: combined files retain their source filename and are separated internally using generated Point/Viewshed/Frustum object names. Each component participates in the same location's visibility, grounding and highlight rules.

### Polygon holes need a separate future improvement

`create_viewshed` (`views.py:208–224`) creates an independent face for every shapefile ring. It does not distinguish exterior boundaries from holes. A source polygon containing holes can therefore become filled across its holes in the exported OBJ. This does not explain the measured TorRiv.M rotation/offset. A future add-on revision should triangulate polygons with their interior rings, with a real Blender export regression fixture.

### Height and bearing assumptions remain explicit

Ground height comes from ALTITUDE_1 or the default; eye height comes from ELEVATION or 1.6 m. The generated point is a marker sphere, not the camera's eye position. Viewsheds use a 0.05 m offset and frustums a 0.03 m ground clearance. Frustum bearings are used as planar MGA angles (`views.py:237–244`), and no surveyed alignment or height datum is proved by that construction. The explorer's grounding option is a shared vertical placement adjustment, not a horizontal projection correction or a terrain survey.

## Verification and limitations

- 1.3.1: 12 streamlined-workflow and 14 batch-export mock tests passed.
- 1.3.2: 12 streamlined-workflow and 16 batch-export mock tests passed.
- The explorer's corrected import was checked with the real Three.js 0.180.0 OBJ parser and proj4 2.15.0 against the local Park 10 sample, in forward and reverse import order. All three sample viewsheds meet the 0.3 m corresponding-vertex tolerance; TorRiv.M retains its approximately 1.6 m camera height. A synthetic combined export verifies the legacy layout without committing source model data.
- Mock tests do not simulate Blender's real float32 numerical boundaries or certify the actual `bpy.ops.wm.obj_export` runtime. Interactive Blender export, LOD edit/restore and a precision-preserving add-on revision still need real Blender validation. No claim is made that 1.3.2 has passed that validation.

## Original archive integrity and publication

| Original ZIP | SHA-256 |
| --- | --- |
| Adelaide_GeoLOD_Views_Vistas_Blender5_v1.3.1.zip | `28cfb1cd7028338016b8a4f20a2c5e0ae69108b6ba49920d2d37207446ff4052` |
| Adelaide_GeoLOD_Views_Vistas_Blender5_v1.3.2.zip | `2ef57904dd94f37f14401da562fdd292d5c8392a966febfc2ec14763b028fe33` |

Both ZIPs contain add-on source, documentation and tests, with no photos, OBJ or MTL data. The archive files and this report are intended for GitHub. Windows Zone.Identifier markers, local model samples, source spatial archives and photographs remain excluded.
