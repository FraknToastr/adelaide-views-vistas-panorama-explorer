import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {execFileSync} from 'node:child_process';
import {createServer} from 'node:http';
import {createReadStream,existsSync} from 'node:fs';
import {readdir,stat,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {checkPortable} from './portable-browser.mjs';
import {checkWorkspace} from './workspace-browser.mjs';

const require=createRequire(import.meta.url);
const root=path.resolve(fileURLToPath(new URL('../',import.meta.url)));
let playwright;
function compatible(candidate) {
  try {
    const pkg=require(candidate),executable=pkg.chromium.executablePath();
    const revision=executable.match(/chromium-(\d+)/)?.[1];
    const shellRoot=path.join(path.dirname(path.dirname(path.dirname(executable))),'chromium_headless_shell-'+revision);
    const shell=path.join(shellRoot,'chrome-headless-shell-linux64','chrome-headless-shell');
    if(existsSync(executable)||existsSync(shell))return pkg;
  }catch{/* Package or its matching browser runtime is not callable here. */}
}
if(process.env.PLAYWRIGHT_MODULE)playwright=require(process.env.PLAYWRIGHT_MODULE);
else {
  for(const name of ['playwright','@playwright/test']){playwright=compatible(name);if(playwright)break;}
  if(!playwright) {
    const globalRoot=execFileSync('rtk',['proxy','npm','root','-g'],{encoding:'utf8'}).trim();
    for(const name of ['@playwright/test','playwright']){playwright=compatible(path.join(globalRoot,name));if(playwright)break;}
  }
  if(!playwright) {
    const cache=execFileSync('rtk',['proxy','npm','config','get','cache'],{encoding:'utf8'}).trim();
    for(const entry of await readdir(path.join(cache,'_npx')).catch(()=>[])) {
      for(const name of ['playwright','@playwright/test']) {
        playwright=compatible(path.join(cache,'_npx',entry,'node_modules',name));if(playwright)break;
      }
      if(playwright)break;
    }
  }
}
if(!playwright)throw new Error('No matching Playwright/Chromium pair found. Set PLAYWRIGHT_MODULE to a package with its browser runtime.');

const files=await readdir(root,{withFileTypes:true});
const spatial=process.env.VISTAS_SPATIAL_ZIP || files.find(f=>f.name.startsWith('FW__')&&f.name.endsWith('.zip'))?.name;
const photoFolder=process.env.VISTAS_PHOTO_FOLDER || files.find(f=>f.isDirectory()&&f.name.startsWith('Adelaide Park Lands View and Vistas'))?.name;
const artifacts=process.env.VISTAS_TEST_ARTIFACTS || '/tmp/vistas-browser';
await mkdir(artifacts,{recursive:true});
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.jpg':'image/jpeg','.zip':'application/zip'};
const server=createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname).replace(/^\/panorama-explorer(?=\/)/,'');
    const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!file.startsWith(root+path.sep))throw new Error('Invalid path');
    const info=await stat(file);if(!info.isFile())throw new Error('Not a file');
    res.writeHead(200,{'content-type':mime[path.extname(file)] || 'application/octet-stream','content-length':info.size});
    createReadStream(file).pipe(res);
  }catch{res.writeHead(404).end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
let browser,page;
const errors=[];
try {
  browser=await playwright.chromium.launch({headless:true,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  page=await browser.newPage({viewport:{width:1440,height:960}});
  page.setDefaultTimeout(30000);
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',message=>{if(message.type()==='error'&&!/Failed to load resource/.test(message.text()))errors.push(message.text());});
  await page.addInitScript(()=>{
    window.photoDecodes=0;
    const decode=window.createImageBitmap;
    window.createImageBitmap=function(...args){if(args[0] instanceof File)window.photoDecodes++;return decode.apply(this,args);};
  });
  await page.route('**/cdn.jsdelivr.net/**',route=>route.abort());
  await page.goto('http://127.0.0.1:'+server.address().port);
  await page.evaluate(async()=>{window.vistas=await import('/js/app.js');});
  await page.waitForFunction(()=>{const s=window.vistas.state;return !!s.map?.getLayer('vistas-points');});
  await page.screenshot({path:path.join(artifacts,'empty-desktop.png')});
  assert.equal(await page.locator('#zoomToSelection').isDisabled(),true);
  assert.equal(await page.locator('#layerSelectionToggle').isDisabled(),true);
  assert.equal(await page.locator('#groundObjLayers').isChecked(),true);
  assert.equal(await page.locator('#groundObjLayers').isDisabled(),true);
  assert.equal(await page.locator('#mapLayerControls input').count(),6);
  assert.equal(await page.locator('#mapLayerControls input:disabled').count(),6);
  await page.locator('#mapLayersBtn').click();assert.equal(await page.locator('#mapLayerPanel').isVisible(),true);
  await page.keyboard.press('Escape');assert.equal(await page.locator('#mapLayerPanel').isVisible(),false);
  assert.equal(await page.getByRole('button',{name:'Import data',exact:true}).count(),1);
  assert.deepEqual(await page.locator('.appearance-frame > legend').allTextContents(),['Spatial appearance','Locations']);
  await page.locator('#layersBtn').click();assert.equal(await page.locator('#layersPanel').isVisible(),false);
  await page.locator('#layersBtn').click();assert.equal(await page.locator('#layersPanel').isVisible(),true);
  await page.locator('#importBtn').click();
  for(const id of ['spatialInput','photosInput','objInput','objFolderInput','referenceInput']){
    const input=page.locator('#'+id),label=input.locator('..');
    await label.hover();
    assert.equal(await input.evaluate(node=>getComputedStyle(node).pointerEvents),'none');
    assert.equal(await label.evaluate(node=>{const r=node.getBoundingClientRect();return document.elementFromPoint(r.left+r.width/2,r.top+r.height/2)===node;}),true);
    assert.equal(await page.locator('#vistas-tooltip').isVisible(),true);
    assert.equal(await page.locator('#vistas-tooltip').textContent(),await input.getAttribute('aria-label'));
    await page.mouse.move(1,1);assert.equal(await page.locator('#vistas-tooltip').isVisible(),false);
  }
  await page.getByRole('button',{name:'Done',exact:true}).click();
  await checkPortable(browser,page.url());
  if(spatial&&photoFolder) {
    await page.locator('#importBtn').click();
    await page.locator('#spatialInput').setInputFiles(path.resolve(root,spatial));
    await page.waitForFunction(()=>document.getElementById('spatialFeedback').textContent==='Loaded');
    assert.deepEqual(await page.evaluate(()=>{const s=window.vistas.state;return [s.pointRecords.length,s.cones.length,s.locations.size];}),[139,139,90]);
    await page.getByRole('button',{name:'Done',exact:true}).click();
    assert.equal(await page.locator('#layerTree .location-name').count(),90);
    assert.equal(await page.locator('#layerTree input').count(),90);
    assert.equal(await page.locator('#layerTree .disclosure').count(),0);
    await page.locator('#importBtn').click();
    await page.locator('#photosInput').setInputFiles(path.resolve(root,photoFolder));
    await page.waitForFunction(()=>document.getElementById('photosFeedback').textContent==='Ready');
    assert.deepEqual(await page.evaluate(()=>{const s=window.vistas.state;return [s.photoIndex.size,s.photoViews.length,window.photoDecodes];}),[52,53,0]);
    await page.getByRole('button',{name:'Done',exact:true}).click();
    await page.locator('.location[data-location="TorRiv.M"] .location-row input').uncheck();
    assert.equal(await page.locator('#mapLayerControls input').nth(0).evaluate(el=>el.indeterminate),false);
    assert.equal(await page.locator('#mapLayerControls input').nth(0).isChecked(),true);
    await page.locator('#importBtn').click();
    await page.locator('#referenceInput').setInputFiles(path.resolve(root,'samples/export_reference.json'));
    await page.waitForFunction(()=>document.getElementById('referenceFeedback').textContent==='Loaded');
    await page.locator('#objInput').setInputFiles(path.resolve(root,'samples/Park_10.zip'));
    await page.waitForFunction(()=>document.getElementById('objFeedback').textContent==='Loaded');
    assert.deepEqual(await page.evaluate(()=>{const s=window.vistas.state;return [s.obj.loaded.length,s.obj.loaded.filter(e=>e.viewId==='TorRiv.M'&&e.model.visible).length,!!s.map.getLayer(s.obj.layer.id)];}),[9,0,true]);
    await page.getByRole('button',{name:'Done',exact:true}).click();
    assert.equal(await page.locator('#groundObjLayers').isDisabled(),false);
    assert.equal(await page.locator('#mapLayerControls input:disabled').count(),0);
    assert.equal(await page.locator('#mapLayerControls input').nth(3).evaluate(el=>el.indeterminate),false);
    assert.equal(await page.locator('#mapLayerControls input').nth(3).isChecked(),true);
    const alignmentErrors=await page.evaluate(async()=>{
      const THREE=await import('three'),s=window.vistas.state,errors=[];
      const flatten=coords=>typeof coords[0]==='number'?[coords]:coords.flatMap(flatten);
      for(const entry of s.obj.loaded.filter(e=>e.type==='Viewsheds')){
        const target=s.locations.get(entry.viewId).cones.flatMap(f=>flatten(f.geometry.coordinates)).map(ll=>s.obj.projection.fromLngLat(ll));
        let maxError=0;
        entry.model.updateMatrixWorld(true);
        entry.model.traverse(child=>{
          if(!child.isMesh||entry.highlights.includes(child))return;
          const positions=child.geometry.attributes.position;
          for(let i=0;i<positions.count;i++){
            const p=new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(child.matrixWorld);
            maxError=Math.max(maxError,Math.min(...target.map(([x,z])=>Math.hypot(p.x-x,p.z-z))));
          }
        });
        errors.push({viewId:entry.viewId,maxError});
      }
      return errors;
    });
    assert.equal(alignmentErrors.length,3);
    for(const {viewId,maxError} of alignmentErrors)assert.ok(maxError<.3,viewId+' OBJ/SHP mismatch: '+maxError+' m');
    const grounded=await page.evaluate(async()=>{
      const THREE=await import('three'),s=window.vistas.state;
      const groups=new Map();
      for(const entry of s.obj.loaded) {
        if(!groups.has(entry.viewId))groups.set(entry.viewId,[]);
        groups.get(entry.viewId).push({min:new THREE.Box3().setFromObject(entry.model).min.y,offset:entry.model.position.y});
      }
      const frustum=s.obj.loaded.find(e=>e.viewId==='TorRiv.M'&&e.type==='Frustums');
      const cameraHeight=frustum.model.children.find(child=>child.isMesh).geometry.getAttribute('position').getY(0)+frustum.model.position.y;
      return {groups:[...groups.values()],cameraHeight};
    });
    for(const group of grounded.groups) {
      assert.ok(Math.abs(Math.min(...group.map(e=>e.min)))<1e-6);
      assert.equal(new Set(group.map(e=>e.offset)).size,1);
    }
    assert.ok(Math.abs(grounded.cameraHeight-1.6)<1e-4);
    await page.locator('#groundObjLayers').uncheck();
    assert.equal(await page.evaluate(()=>window.vistas.state.obj.loaded.every(e=>e.model.position.y===e.sourcePositionY)),true);
    await page.locator('#groundObjLayers').check();
    await page.locator('.location[data-location="TorRiv.M"] .location-row input').check();
    await page.locator('.location[data-location="TorRiv.M"] .location-name').click();
    await page.waitForFunction(()=>{const s=window.vistas.state;return s.viewer.active && s.viewer.renderer.info.memory.textures===1;});
    assert.equal(await page.evaluate(()=>window.photoDecodes),1);
    const texture=await page.evaluate(()=>{const s=window.vistas.state;return {width:s.viewer.texture?.image.width,height:s.viewer.texture?.image.height,max:s.viewer.renderer.capabilities.maxTextureSize,error:s.viewer.renderer.getContext().getError()};});
    assert.equal(texture.width/texture.height,2);assert.ok(texture.width<=texture.max);assert.equal(texture.error,0);
    await page.evaluate(()=>window.vistas.state.map.jumpTo({center:[138.4,-34.8],zoom:12}));
    await page.locator('#zoomToSelection').click();
    await page.waitForFunction(()=>!window.vistas.state.map.isMoving());
    assert.equal(await page.evaluate(()=>{
      const s=window.vistas.state,point=s.locations.get(s.selected).point;
      return s.selected==='TorRiv.M'&&s.map.getBounds().contains(point.geometry.coordinates.slice(0,2))&&s.map.getZoom()>12;
    }),true);
    assert.equal(await page.evaluate(()=>window.photoDecodes),1);
    await page.locator('#headingPlus').click();
    assert.equal(await page.locator('#headingValue').textContent(),'5°');
    await page.locator('#headingMinus').click();
    await page.locator('#headingStepToggle').click();
    assert.equal(await page.locator('#headingStepToggle').textContent(),'1°');
    await page.locator('#headingPlus').click();
    assert.equal(await page.locator('#headingValue').textContent(),'1°');
    await page.locator('#headingMinus').click();
    assert.equal(await page.locator('#headingValue').textContent(),'0°');
    await page.locator('#headingStepToggle').click();
    assert.equal(await page.locator('#headingStepToggle').textContent(),'5°');
    assert.equal(await page.locator('#photoCompass').isVisible(),false);
    await page.locator('#photoCompassToggle').click();
    assert.equal(await page.locator('#photoCompass').isVisible(),true);
    assert.equal(await page.locator('#photoCompassToggle').getAttribute('aria-pressed'),'true');
    assert.ok(await page.evaluate(()=>{
      const line=document.querySelector('.photo-compass-line').getBoundingClientRect();
      const pane=document.querySelector('.pano-pane').getBoundingClientRect();
      return Math.abs(line.left+line.width/2-pane.left-pane.width/2)<1 && getComputedStyle(document.getElementById('photoCompass')).pointerEvents==='none';
    }));
    // Validate real triangle preparation through Three.ShapeUtils, not a stub.
    await page.evaluate(()=>{const s=window.vistas.state;s.viewer.changeHeading(210);});
    await page.waitForFunction(()=>{const s=window.vistas.state;return s.direction?.heading===210 && s.map.getSource('vistas-overlap')._data.features.length>0;});
    assert.equal(await page.locator('#photoCompassBearing').textContent(),'SW · 210°');
    await page.locator('#photoCompassToggle').click();
    assert.equal(await page.locator('#photoCompass').isVisible(),false);
    await page.locator('#photoCompassToggle').click();
    await page.locator('#locationSearch').fill('TorRiv.M');
    assert.equal(await page.locator('.location:not([hidden])').count(),1);
    await page.locator('#mapLayersBtn').click();
    const objViewshed=page.locator('#mapLayerControls input').nth(4);
    await objViewshed.uncheck();
    assert.equal(await page.evaluate(()=>window.vistas.state.obj.loaded.filter(e=>e.type==='Viewsheds').every(e=>!e.model.visible)),true);
    await objViewshed.check();
    const shapeFrustums=page.locator('#mapLayerControls input').nth(2);
    await shapeFrustums.uncheck();
    assert.equal(await page.evaluate(()=>window.vistas.state.map.getSource('vistas-frustum')._data.features.length),0);
    assert.ok(await page.evaluate(()=>window.vistas.state.map.getSource('vistas-overlap')._data.features.length>0));
    await shapeFrustums.check();
    const shapePoints=page.locator('#mapLayerControls input').nth(0);
    await shapePoints.uncheck();
    assert.equal(await page.evaluate(()=>window.vistas.state.map.getSource('vistas-heading')._data.features.length),0);
    await shapePoints.check();
    // Group actions affect all loaded locations, including those outside search.
    await page.locator('#mapLayerControls button[data-source="map"]').click();
    await page.locator('#mapLayerControls button[data-source="obj"]').click();
    assert.deepEqual(await page.evaluate(()=>{const s=window.vistas.state;return [s.pointsData.features.length,s.conesData.features.length,s.obj.loaded.some(e=>e.model.visible),s.map.getSource('vistas-overlap')._data.features.length];}),[0,0,false,0]);
    assert.equal(await page.locator('#mapLayerControls input:checked').count(),0);
    await page.locator('#mapLayerControls button[data-source="map"]').click();
    assert.equal(await page.evaluate(()=>window.vistas.state.obj.loaded.some(e=>e.model.visible)),false);
    await page.locator('#mapLayerControls button[data-source="obj"]').click();
    assert.equal(await page.evaluate(()=>window.vistas.state.obj.loaded.every(e=>e.model.visible)),true);
    // Sidebar bulk actions include entries outside search and synchronize both groups.
    await page.locator('#layerSelectionToggle').click();
    assert.equal(await page.locator('#mapLayerControls input:checked').count(),6);
    assert.equal(await page.evaluate(()=>window.vistas.state.pointsData.features.length),0);
    assert.equal(await page.locator('#layerTree input:checked').count(),0);
    await page.locator('#layerSelectionToggle').click();
    assert.equal(await page.locator('#mapLayerControls input:checked').count(),6);
    assert.equal(await page.locator('#layerTree input:checked').count(),90);
    await page.locator('#mapLayersBtn').click();
    await objViewshed.uncheck();
    await page.locator('#groundObjLayers').uncheck();
    await page.locator('[data-base="topo"]').click();
    await page.waitForFunction(()=>{const s=window.vistas.state;return !!s.map.getLayer(s.obj.layer.id) && !!s.map.getSource('vistas-overlap');});
    assert.equal(await page.evaluate(()=>{const s=window.vistas.state;return s.obj.loaded.find(e=>e.viewId==='TorRiv.M'&&e.type==='Viewsheds').model.visible;}),false);
    assert.equal(await page.locator('#groundObjLayers').isChecked(),false);
    assert.equal(await page.evaluate(()=>window.vistas.state.obj.loaded.every(e=>e.model.position.y===e.sourcePositionY)),true);
    await page.locator('#groundObjLayers').check();
    assert.equal(await page.evaluate(()=>window.vistas.state.obj.grounded),true);
    await page.locator('#mapLayersBtn').click();
    await objViewshed.check();
    await page.locator('#pitchBtn').click();
    await page.waitForFunction(()=>{const s=window.vistas.state;return s.map.getPitch()>50 && s.obj.renderer.info.render.calls>0;});
    await page.screenshot({path:path.join(artifacts,'loaded-desktop.png')});
    assert.ok(await page.evaluate(()=>{const s=window.vistas.state;return s.obj.renderer.info.programs.every(p=>p.diagnostics?.runnable!==false);}));
    // Rapid selection leaves one resident texture and installs only the final image.
    await page.evaluate(async()=>{const {state:s,selectView}=await import('/js/app.js');const ids=s.photoViews.slice(0,4).map(l=>l.id);await Promise.all(ids.map(id=>selectView(id,{moveMap:false})));});
    await page.waitForFunction(()=>{const s=window.vistas.state;return s.viewer.active&&s.viewer.renderer.info.memory.textures===1;});
    assert.equal(await page.evaluate(()=>{const s=window.vistas.state;return s.selected===s.photoViews[3].id;}),true);
    await page.evaluate(async()=>{const {state:s,selectView}=await import('/js/app.js');await selectView([...s.locations.values()].find(l=>!l.photo).id,{moveMap:false});});
    assert.deepEqual(await page.evaluate(()=>{const s=window.vistas.state;return [s.viewer.active,s.viewer.renderer.info.memory.textures,s.map.getSource('vistas-overlap')._data.features.length];}),[false,0,0]);
    await page.locator('#locationSearch').fill('');
    console.log('Real-data checks: 90 locations, 139 cones, 9 OBJ files; 52 photos indexed with zero decodes; texture '+texture.width+'×'+texture.height+'.');
    await checkWorkspace(page);
  }else console.log('Real-data checks skipped: set VISTAS_SPATIAL_ZIP and VISTAS_PHOTO_FOLDER.');
  for(const [width,height] of [[390,844],[820,1180]]) {
    await page.setViewportSize({width,height});
    await page.locator('#layersBtn').click();
    if(!await page.locator('#layersPanel').isVisible())await page.locator('#layersBtn').click();
    assert.equal(await page.locator('#layersPanel').isVisible(),true);
    await page.locator('#closeLayers').click();
    assert.equal(await page.locator('#layersPanel').isVisible(),false);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    await page.screenshot({path:path.join(artifacts,'responsive-'+width+'.png')});
  }
  assert.deepEqual(errors,[]);
  console.log('Browser integration passed; screenshots: '+artifacts);
}catch(error){
  await writeFile(path.join(artifacts,'failure.txt'),String(error.stack||error));
  console.error('Browser diagnostics:',errors,page?await page.evaluate(()=>({state:document.documentElement.dataset.appState,message:document.getElementById('toastRegion')?.textContent})).catch(()=>null):null);
  throw error;
}finally{await browser?.close();await new Promise(resolve=>server.close(resolve));}
