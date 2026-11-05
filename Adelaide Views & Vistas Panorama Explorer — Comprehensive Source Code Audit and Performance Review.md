# Adelaide Views & Vistas Panorama Explorer — Comprehensive Source Code Audit and Performance Review

**Repository:** https://github.com/FraknToastr/adelaide-views-vistas-panorama-explorer

## Objective

Audit the current application and produce an evidence-based improvement plan. Prioritise drawing/rendering performance, import responsiveness, CPU/GPU efficiency and resource lifetime, with geospatial correctness as a release constraint. Also assess reliability, security, accessibility, compatibility, maintainability and regression coverage.

The application is functional and has undergone substantial development. Preserve its current design, workflows and intentional behaviour. Separate reproducible defects from intended behaviour and from hypotheses that still need profiling.

**This request authorises an audit and report only. Do not implement the proposed fixes.**

## Scope and working rules

- Follow the applicable `AGENTS.md` and workspace instructions, including tool-discovery and `rtk` requirements. Inspect the current local checkout as the source of truth; the repository URL is a reference, not permission to replace local files with remote versions.
- Record the starting commit SHA, branch, relevant dirty/untracked files and actual Git metadata location. This workspace has used `.vistas-git`; verify it before issuing Git commands. Preserve all existing changes.
- The only project deliverable to write is `CODE_AUDIT.md`. If it exists, preserve unrelated content and clearly identify this review's baseline. Temporary diagnostic scripts and synthetic fixtures may go outside the repository. Do not modify application code, tests, launchers, manifests, lockfiles, data or Blender ZIPs; do not switch branches, commit, push or publish.
- Preserve the static browser architecture: local HTTP serving and GitHub Pages project-path hosting, with no application backend or required build step. Distinguish reliance on external libraries/basemaps from offline operation; a static app is not necessarily an offline app.
- Do not propose a framework/build migration or new runtime dependency without a concrete problem, alternatives, measured justification and migration cost. Distinguish temporary profiling/test tools from application dependencies. Before using a workaround for missing tooling, perform the relevant discovery and name the exact missing package/runtime and why it would help.
- Keep raw photos, OBJ/MTL files, spatial archives and API keys out of Git, uploads and external analysis services. Keep any screenshots, traces or profiles containing local data or credentials local as well. The existing Blender add-on ZIPs are source-code artefacts, not permission to publish spatial data.
- Recommend incremental changes with explicit acceptance criteria. Avoid stylistic refactors, generic optimisation lists and speculative percentage gains.

## 1. Establish the baseline

Map the architecture and data flow before identifying fixes: import → parsing/reprojection → application state → MapLibre/Three.js/DOM → disposal. Inspect all application modules, `index.html`, CSS, README, changelog, tests, launchers, hosting configuration and `Blender/AUDIT.md`. Record anything excluded from review.

Confirm the actual versions and loading paths of MapLibre GL JS, Three.js, shpjs, JSZip and proj4, including CDN/import-map dependencies rather than relying on `package.json` alone. Review module cache/version handling: this app previously failed to initialise when new modules were mixed with stale cached dependencies.

Inventory representative local data using file counts, sizes, dimensions and geometry counts. Use the supplied Park 10 TorRiv.M/Q/R data and `20260710/IMG_20260709_125554_00_013.jpg` where available. Do not decode the entire photo library to establish a baseline. Label supplied data, synthetic fixtures and unavailable inputs separately.

Run the existing checks that the environment supports before drawing conclusions. Capture commands, exit status, actual test coverage and any missing runtime or permission constraint. A DOM mock or unit test does not establish real WebGL behaviour; a sandbox failure does not by itself establish an application defect.

## 2. OBJ loading and rendering

Concentrate on `js/obj-map.js`, `js/core.js`, `js/geo.js` and `js/importers.js`.

Investigate:

- Repeated OBJ text allocations during string splitting, coordinate transformation and parsing.
- Main-thread blocking during import of large geometry files.
- Opportunities for background processing using Web Workers.
- Caching of coordinate transforms and imported geometry.
- GPU draw calls, geometry batching and material reuse.
- Edge geometry generation and memory consumption.
- Frustum culling, bounding volume accuracy and visibility handling.
- Geometry disposal, renderer lifecycle and WebGL context recovery.
- Whether basemap changes cause unnecessary GPU resource reconstruction.
- The cost of OBJ processing when many files are imported simultaneously.
- Peak memory and retained CPU/GPU resources after failed imports, reimports, clearing data and repeated basemap changes.
- Correct interaction between the custom Three.js layer and MapLibre's shared WebGL context, render scheduling and depth/transparency handling.

Identify expensive work by phase: reading/decompression, coordinate conversion, OBJ parsing, edge construction, GPU upload and first visible frame. Distinguish first-use costs from repeated work.

Evaluate typed arrays, transferables, workers, incremental processing, caching and batching only where evidence identifies a bottleneck. Include worker startup/transfer costs, cancellation, cache invalidation and disposal in the recommendation. Any batching proposal must preserve independent visibility, selection, grounding, appearance and highlighting for each location and category.

## 3. Geospatial correctness — critical regression protection

Review the full EPSG:7854 to geographic/Web Mercator coordinate pipeline.

The existing application corrects a previous horizontal misalignment by reprojecting each OBJ vertex into the map coordinate system. `Blender/AUDIT.md` reports an approximately 6.1 m error before correction and a remaining discrepancy below 0.3 m for the supplied sample, consistent with source Float32 precision loss. Treat these as historical, dataset-specific measurements to reproduce, not universal accuracy guarantees or proof of surveyed alignment.

**Preserve the corrected projection behaviour.** Trace `createObjProjection`, `rebaseObjForMap`, reference JSON handling and both projected and scene-local import paths.

Investigate:

- Projected coordinates versus scene-local coordinates.
- Per-vertex reprojection accuracy.
- Precision loss from large coordinate values.
- Float32 and Float64 conversion boundaries.
- GDA2020/MGA Zone 54 and geographic coordinate handling.
- OBJ orientation, scale and height conventions.
- Per-location grounding, including hidden models, unmatched files, reimports and restoration of original elevations without drift.
- Horizontal alignment between shapefiles and imported OBJ geometry.
- Viewshed polygons with interior holes or multiple polygon parts.

Check forward/inverse projection and import-order effects against independent reference values or corresponding source vertices. Record units, axes, vertical assumptions, comparison method and maximum/RMS horizontal error in metres where data supports it. Verify both MapLibre positions and the coordinates used for 3D highlighting and zoom bounds. A round trip through the same function alone is insufficient proof of alignment.

Do not recommend approximate translations or rotations as replacements for per-vertex reprojection. Grounding is a shared vertical placement adjustment using the lowest imported geometry; it does not correct horizontal alignment or measure terrain. Preserve shape and relative camera height. Distinguish verified results, rendering approximations and source-data limitations.

Review the supplied Blender 1.3.1 and 1.3.2 source archives read-only alongside the existing audit, focusing on precision boundaries, axes, export grouping, reference metadata and polygon holes. The user reports using 1.3.1; 1.3.2 has not been interactively validated. Do not infer export provenance from filenames alone. Separate add-on defects from viewer defects, and mock tests from actual Blender export validation.

## 4. Panorama rendering and navigation

Review `js/panorama.js` and its interactions with `js/app.js`.

The application already has recursive metadata-only photo indexing, serialised image selection, demand-driven rendering and explicit cleanup. Verify their actual behaviour before proposing replacements.

Investigate:

- Decode and GPU upload latency.
- Memory usage with large equirectangular JPEGs.
- Rapid navigation between viewpoints.
- Cancellation and cleanup of superseded image requests.
- ImageBitmap, texture and object URL lifecycle.
- Frame scheduling and unnecessary rendering.
- Panorama canvas resizing.
- Browser WebGL context limits.
- GPU memory behaviour after extended navigation.
- Source image dimensions versus decoded image, uploaded texture and displayed canvas dimensions, including hardware texture-size limits.

Folder selection must not read/decode image contents, create an object URL per file or upload images to the GPU. Keep one decode in flight and at most the latest pending selection; superseded results must never replace the current photo. Distinguish cancelling work from safely discarding a completed stale result. Test rapid selection, failures, clearing and disposal during an active load.

Account separately for compressed file size, decoded pixel memory and estimated GPU texture memory. Photo compression is optional and lowest priority: consider it only if measurements justify it, preserve originals and report quality, metadata, cache and repeat-decode tradeoffs. Do not introduce batch conversion or eager preloading during this audit.

## 5. Viewshed and directional alignment processing

Review `js/alignment.js`, `js/app.js` and the OBJ highlight shaders.

The viewer dynamically displays the current camera viewing sector, source view-cone sectors, directional overlap and highlighted 3D viewshed geometry.

Determine whether panorama rotation causes excessive:

- Polygon clipping and triangulation
- Geographic coordinate transformations
- GeoJSON object creation
- MapLibre source updates
- Shader uniform updates
- Garbage collection
- Map redraws or style recalculations

Measure callback/update frequency, work per frame and visible overlay latency during rotation and zoom. Trace which state changes require each recomputation or `setData` call. Evaluate caching, change detection, scheduling or throttling against that evidence, including the cost of invalidation and any visual lag.

Preserve the behaviour for multipart polygons, holes, repeated view cones and overlapping angular sectors. Validate 2D clipping and 3D shader highlighting separately. If support is incomplete, report the defect instead of assuming the current implementation handles every case. Directional overlap is not terrain occlusion or proof of absolute compass calibration; photos without reliable heading metadata may still need manual adjustment.

## 6. Application architecture and UI responsiveness

Review `js/app.js`, `js/layers.js`, `js/appearance.js`, `index.html` and `css/styles.css`.

Assess:

- State consistency across imports, selections and basemap changes.
- Duplicated logic and unnecessary recalculations.
- Event listener and observer lifecycle.
- DOM update frequency and unnecessary layout measurements.
- Search and location navigation performance.
- Map layer visibility and category controls.
- Appearance settings and browser storage.
- Responsive behaviour and fullscreen transitions.
- Keyboard navigation, focus handling and accessibility.
- MetroMap key handling and security.
- Startup failure reporting, stale module caches and asset/module paths under a GitHub Pages project subdirectory.
- Launcher handling of the intended document root, Windows/WSL UNC paths and occupied ports, including a server already serving the wrong directory.

Exercise the current flat location list, per-location checkboxes and sidebar Select all/none toggle alongside the map's Shapefile and 3D Models category/group controls. Check mixed states, disabled empty groups, filtered-out locations, unmatched models, reimports and latest-applicable visibility intent for later imports. Hiding a location must not change the selected photo. Appearance and visibility must survive basemap/style reloads as intended.

Preserve the current compact interface and single header Import data entry point. Do not propose new metadata panels or extra controls as performance fixes. Check keyboard focus, accessible names/states and fullscreen exits without redesigning the UI.

## 7. Import reliability and security

Audit handling of user-supplied shapefiles, ZIPs, JSON, OBJ files and panorama folders.

Check for:

- Malformed and incomplete files.
- Oversized files and ZIP decompression expansion.
- Invalid coordinate values.
- Duplicate or ambiguous viewpoint associations.
- Unexpected file encodings.
- Partial imports and recovery from failures.
- Resource leaks after unsuccessful imports.
- Safe handling of filenames and displayed attribute values.
- Correct CRS/reference metadata validation and rejection of non-finite or implausible coordinates.
- Remote material/texture references, path traversal and whether archive entries or filenames can trigger unintended network or file access.
- Clear error messages and consistent state after a partial or cancelled operation.

Preserve the existing `VIEW_ID` / `360IMG` matching process, including cases where multiple viewpoints reference the same photograph.

Verify nested-folder paths, extension/case handling, ambiguous basenames and repeated photo references. Do not silently select a different photo to resolve ambiguity.

Trace network and persistence behaviour. Distinguish necessary CDN/basemap requests and MetroMap authentication from any transfer of imported data. Verify Remember/Forget key behaviour without putting keys in reports, logs or screenshots. Report a demonstrated exposure and its conditions rather than treating all browser storage as an automatic vulnerability.

## 8. Tests and benchmarking

Review `package.json`, all unit/browser tests and `tests/test_sample_exports.py`. Check the documented commands and whether discovery works in an ordinary developer environment. Review `rtk proxy npm` usage in `tests/browser.mjs` as a portability question while respecting this workspace's requirement to use `rtk` for shell commands.

Check the Playwright JavaScript package and its matching browser executable separately. Use relevant package/environment discovery before declaring a tool absent; use an absolute installed package path where appropriate. Distinguish missing packages, missing runtimes, unresolved dependencies and sandbox restrictions.

Identify gaps that protect observable correctness or resource lifetime. Avoid tests that merely mirror implementation details. Do not add tests during this audit; give concrete fixtures and assertions in the plan.

Where executable, benchmark representative operations:

- Application startup and first usable map.
- Importing both shapefiles.
- Indexing a folder containing many JPG files.
- Loading and switching panoramas.
- Rapid panorama rotation with alignment overlays visible.
- Importing increasingly large OBJ datasets.
- Switching basemaps repeatedly.
- Changing layer visibility and appearance.
- Extended interaction sessions and memory cleanup.
- Idle map/panorama behaviour and recovery after repeated hide/show, fullscreen and resize cycles.

For each scenario, define the action, dataset scale, timing boundaries and cache state before measuring. Separate network/CDN/tile latency from parsing, CPU processing, GPU upload and rendering. Record browser/build, OS, device, available CPU/GPU details, viewport/device-pixel ratio, renderer mode and run count. Use repeated runs and report a median/range; label single runs and unavailable counters explicitly.

Use Performance APIs, traces, long-task/frame diagnostics, renderer counters and memory tools where supported. Record import time, time to usable display, interaction frame times/overlay latency, draw calls/geometry counts and memory trends as relevant. Label GPU-byte estimates and noisy browser memory figures; do not present them as exact measurements. Look for a plateau across repeated cycles rather than assuming immediate garbage collection.

This phase establishes a baseline only. Expected gains remain hypotheses until an implementation is compared under equivalent conditions. Synthetic fixtures must include their generation method and limits; mocks, unavailable real data or a blocked browser run must never be reported as a full browser pass.

## 9. Preserve critical functionality

The following must remain operational:

- Default equal map/panorama split and current responsive behaviour
- Esri World Aerial, Esri World Topography and MetroMap
- MetroMap API key save and forget controls
- Shapefile import and spatial reprojection
- Recursive panorama folder matching
- Interactive panorama navigation and compass calibration
- Current camera sector and viewshed overlays
- OBJ imports in projected metres
- Legacy combined and separate-category Blender OBJ exports
- Flat location list with per-location visibility and overall Select all/none, synchronised with the two map layer groups and their Points/Viewsheds/Frustums and Select all/none controls
- 2D/3D map modes
- Per-location model grounding, reversible elevations, and global Shapefile/3D Models Line/Fill colour and transparency settings
- Location search, selection, zoom and navigation
- Responsive and fullscreen layouts
- Direct local HTTP hosting, the supplied Windows launcher, and GitHub Pages project-path asset loading

## 10. Required audit deliverable

Produce `CODE_AUDIT.md`, using current source file/line references and the recorded baseline SHA. Include:

**A. Executive summary**

Briefly describe the architecture, working strengths, most significant risks and top priorities. State the review scope, starting worktree state, tested environment and limitations. Do not give an unqualified performance or geospatial-accuracy verdict when the evidence is incomplete.

**B. Findings table**

Give each finding a stable ID and include severity (Critical / High / Medium / Low), evidence status, source reference, affected workflow, impact, proposed correction, effort and regression risk. Use evidence statuses such as Reproduced defect, Static-code finding, Measured bottleneck or Hypothesis requiring profiling. Severity reflects user impact, not how interesting the technique is.

Keep the table concise; put root cause, reproducible steps/commands, measurements, assumptions and acceptance criteria below it by finding ID. State expected benefit qualitatively unless measured. Consolidate duplicate symptoms with one cause, distinguish previously documented issues from new findings, and omit generic advice without a code path or concrete risk.

**C. Prioritised improvement plan**

Group recommendations into:

1. Immediate correctness and reliability fixes
2. High-impact performance optimisations
3. Memory and GPU efficiency improvements
4. Maintainability and testing improvements
5. Optional architectural enhancements

Rank within each group by impact, confidence, effort and risk. Link every action to a finding ID and identify dependencies. A low-effort change is not automatically higher priority than a correctness defect.

**D. Benchmark baseline**

Provide the scenario, dataset scale, environment, cache state, run count, metric/result and measurement method. Include commands or local artefact paths sufficient to repeat the test. Use Not measured or Blocked with the exact reason instead of fabricated values. Report test outcomes separately from performance measurements.

**E. Implementation sequence**

Recommend small changes in dependency order. For each step, identify affected modules, the behaviour to preserve, regression checks, benchmark comparison, acceptance threshold and a simple rollback approach. Justify any numerical threshold using the baseline or an explicit requirement. Highlight work that needs real Blender exports, additional data or a user decision.

End the report with an evidence checklist: reviewed areas, executed checks, confirmed results, untested assumptions and remaining validation. If no significant problem is demonstrated in an area, say so; there is no quota for findings.

Stop after the audit and provide a concise summary linking to the report. Implementation, source changes and Git synchronisation require a subsequent request.
