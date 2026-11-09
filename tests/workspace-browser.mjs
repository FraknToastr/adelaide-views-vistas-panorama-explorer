import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

export async function checkWorkspace(page){
  await page.evaluate(async()=>{
    const app=window.vistas,s=app.state;
    await app.selectView(s.photoViews[0].id,{moveMap:false});
    s.map.jumpTo({pitch:42,bearing:17,zoom:16});
    s.viewer.yaw=33;s.viewer.pitch=7;s.viewer.fov=64;s.viewer.render();
  });
  await page.evaluate(()=>{const v=window.vistas.state.viewer;v.rotate(37);});
  await page.locator('#setPhotoNorth').click();
  await page.waitForFunction(()=>window.vistas.state.direction.heading===0);
  assert.equal(await page.evaluate(()=>window.vistas.state.headings.get(window.vistas.state.selected)),await page.evaluate(()=>window.vistas.state.viewer.offset));
 await page.locator('#mapLabelsBtn').click();
  await page.locator('.location[data-location="TorRiv.M"] .location-row input').uncheck();
  await page.locator('#mapLayersBtn').click();
  await page.locator('#mapLayerControls input[data-source="obj"][data-kind="viewshed"]').uncheck();
  assert.equal(await page.locator('.location[data-location="TorRiv.M"] .location-row input').isChecked(),false);
  assert.equal(await page.locator('#mapLayerControls input[data-source="map"][data-kind="point"]').isChecked(),true);
  assert.equal(await page.evaluate(()=>window.vistas.state.map.getLayoutProperty('vistas-labels','visibility')),'none');
  assert.deepEqual(await page.evaluate(()=>{const values=[...window.vistas.state.labels.cache.keys()].map(key=>JSON.parse(key)[1]);return [values.includes(true),values.includes(false)];}),[true,true]);
  await page.evaluate(()=>{
    const s=window.vistas.state;
    window.savedWorkspace=window.vistas.workspaceSnapshot();
    window.savedFiles=new Map(s.sources.values().map(pack=>[pack.id,pack.files]));
    window.showSaveFilePicker=async()=>{throw new DOMException('Write access blocked','NotAllowedError');};
  });
  await page.locator('#importBtn').click();
  const downloading=page.waitForEvent('download');
  await page.locator('#saveWorkspace').click();
  const download=await downloading;
  assert.equal(download.suggestedFilename(),'views-vistas.vistas-workspace.json');
  await page.evaluate(text=>{window.savedWorkspaceText=text;},await readFile(await download.path(),'utf8'));
  assert.deepEqual(await page.evaluate(()=>JSON.parse(window.savedWorkspaceText)),await page.evaluate(()=>window.savedWorkspace));
  const exportChecks=await page.evaluate(()=>{const value=JSON.parse(window.savedWorkspaceText);return {version:value.version,packs:value.sources.length,roles:value.sources.map(s=>s.role).sort(),secret:'metroKey' in value.state,bytes:value.sources.some(s=>'data' in s||'access' in s)};});
  assert.deepEqual(exportChecks,{version:1,packs:4,roles:['models','photos','reference','spatial'],secret:false,bytes:false});
  // Reopening in the same session reuses selected files and decodes only the selected photo.
  await page.evaluate(async()=>{
    window.decodesBeforeWorkspace=window.photoDecodes;
    await window.vistas.state.workspaceUI.open(new File([window.savedWorkspaceText],'round-trip.vistas-workspace.json'));
  });
  assert.equal(await page.evaluate(()=>window.photoDecodes-window.decodesBeforeWorkspace),1);
  assert.equal(await page.evaluate(()=>window.vistas.state.selected===window.savedWorkspace.state.selected),true);
  assert.deepEqual(await page.evaluate(()=>window.vistas.state.gates.snapshot()),await page.evaluate(()=>window.savedWorkspace.state.visibility));
  assert.equal(await page.locator('#mapLabelsBtn').getAttribute('aria-pressed'),'false');
  assert.equal(await page.evaluate(()=>window.vistas.state.obj.loaded.length),9);
  assert.deepEqual(await page.evaluate(()=>{const v=window.vistas.state.viewer;return {yaw:v.yaw,pitch:v.pitch,fov:v.fov};}),{yaw:70,pitch:7,fov:64});
  assert.equal(await page.locator('.location[data-location="TorRiv.M"] .location-row input').isChecked(),false);
  // A failed model parse must preserve the entire live session.
  assert.equal(await page.evaluate(async()=>{
    const app=window.vistas,original=app.state.obj,selected=app.state.selected;
    const resolved=new Map(window.savedWorkspace.sources.map(source=>[source.id,{...source,files:window.savedFiles.get(source.id)}]));
    const model=window.savedWorkspace.sources.find(source=>source.role==='models');
    resolved.get(model.id).files=[new File(['invalid source'],'broken.obj')];
    let rejected=false;try{await app.restoreWorkspace(window.savedWorkspace,resolved);}catch{rejected=true;}
    return rejected&&app.state.obj===original&&app.state.obj.loaded.length===9&&app.state.selected===selected;
  }),true);
  // Make fresh source IDs to simulate a different browser with no remembered access.
  await page.evaluate(()=>{
    const doc=structuredClone(window.savedWorkspace),ids=new Map(doc.sources.map(source=>[source.id,crypto.randomUUID()]));
    for(const source of doc.sources){source.originalId=source.id;source.id=ids.get(source.id);if(source.referenceId)source.referenceId=ids.get(source.referenceId);}
    if(doc.state.activeReference)doc.state.activeReference=ids.get(doc.state.activeReference);
    window.reconnectWorkspace=doc;
    window.pendingWorkspace=window.vistas.state.workspaceUI.open(new File([JSON.stringify(doc)],'reconnect.json'));
  });
  await page.locator('#workspaceReconnect').waitFor({state:'visible'});
  await page.locator('#workspaceCancel').click();await page.evaluate(()=>window.pendingWorkspace);
  assert.equal(await page.evaluate(()=>window.vistas.state.selected===window.savedWorkspace.state.selected),true);
  await page.evaluate(()=>{window.pendingWorkspace=window.vistas.state.workspaceUI.open(new File([JSON.stringify(window.reconnectWorkspace)],'reconnect.json'));});
  await page.locator('#workspaceReconnect').waitFor({state:'visible'});
  assert.equal(await page.locator('#workspaceLoad').isDisabled(),true);
  await page.evaluate(async()=>{
    const rows=[...document.querySelectorAll('#workspaceSources .workspace-source')];
    for(let index=0;index<rows.length;index++){
      const transfer=new DataTransfer();for(const file of window.savedFiles.get(window.reconnectWorkspace.sources[index].originalId))transfer.items.add(file);
      const input=rows[index].querySelector('input');input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));
    }
  });
  await page.waitForFunction(()=>!document.getElementById('workspaceLoad').disabled);
  await page.locator('#workspaceLoad').click();await page.evaluate(()=>window.pendingWorkspace);
  assert.equal(await page.evaluate(()=>window.vistas.state.obj.loaded.length),9);
  assert.equal(await page.evaluate(()=>window.vistas.state.photoIndex.size),52);
  assert.equal(await page.evaluate(()=>window.vistas.state.sources.values().every(source=>!source.unavailable)),true);
  // Verify structured-cloned handles really persist in IndexedDB in this browser.
  assert.equal(await page.evaluate(async()=>{
    const root=await navigator.storage.getDirectory(),name='vistas-test-'+crypto.randomUUID();
    const handle=await root.getFileHandle(name,{create:true});
    await window.vistas.state.workspaceUI.store.put('test-handle',{files:[handle]});
    const stored=await window.vistas.state.workspaceUI.store.get('test-handle');
    const same=await handle.isSameEntry(stored.files[0]);await root.removeEntry(name);return same;
  }),true);
  await page.locator('#mapLabelsBtn').click();
  assert.equal(await page.evaluate(()=>window.vistas.state.map.getLayoutProperty('vistas-labels','visibility')),'visible');
  await page.locator('#importBtn').click();
  const photoPackId=await page.evaluate(()=>window.vistas.state.sources.values('photos')[0].id);
  await page.evaluate(()=>{
    const transfer=new DataTransfer();for(const file of window.vistas.state.sources.values('photos')[0].files)transfer.items.add(file);
    const input=document.getElementById('photosInput');input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));
  });
  await page.locator('#sourceConflict').waitFor({state:'visible'});
  await page.locator('#sourceConflictChoices button[data-source-id="'+photoPackId+'"]').click();
  await page.waitForFunction(()=>!window.vistas.state.workspaceBusy);
  assert.equal(await page.evaluate(()=>window.vistas.state.sources.values('photos').length),1);
  await page.getByRole('button',{name:'Done',exact:true}).click();
  assert.equal(await page.evaluate(async()=>{
    const app=window.vistas,s=app.state,beforeDecodes=window.photoDecodes,yaw=s.viewer.yaw;
    await app.importPack('photos',[new File(['unused fixture'],'additional-photo.jpg')],null,{sourceId:'extra-photos'});
    return s.photoIndex.size===53&&window.photoDecodes===beforeDecodes&&s.viewer.yaw===yaw;
  }),true);
  assert.equal(await page.evaluate(async()=>{
    const app=window.vistas,s=app.state,other=s.obj.loaded[0].model;
    const obj='v 281387 6134191 27\nv 281388 6134191 27\nv 281387 6134192 28\nf 1 2 3';
    await app.importPack('models',[new File([obj],'Extra__NewPoint__Points.obj')],null,{sourceId:'extra-models'});
    const id=s.obj.loaded.find(entry=>entry.sourceId==='extra-models').id;
    const labelled=s.map.getSource('vistas-labels')._data.features.some(feature=>feature.properties.VIEW_ID==='NewPoint');
    await app.importPack('models',[new File([obj.replaceAll('27','29')],'Extra__NewPoint__Points.obj')],null,{sourceId:'extra-models'});
    const stable=s.obj.loaded.length===10&&s.obj.loaded.some(entry=>entry.id===id)&&s.obj.loaded[0].model===other;
    const referenceId=s.sources.values('models')[0].referenceId;
    await app.importPack('reference',[new File([JSON.stringify({source_crs:'EPSG:7854',scene_origin:{easting_m:280000,northing_m:6134000,height_m:100},lod_source_frame:'SCENE_LOCAL'})],'another-reference.json')],null,{sourceId:'extra-reference'});
    const independent=s.obj.loaded[0].model===other&&s.sources.values('models')[0].referenceId===referenceId;
    const spatial=s.sources.values('spatial')[0];
    await app.importPack('spatial',spatial.files,null,{sourceId:'extra-spatial'});
    return stable&&labelled&&independent&&s.pointRecords.length===278&&s.cones.length===278&&s.gates.location('NewPoint');
  }),true);
  await page.evaluate(()=>{
    const doc=structuredClone(window.reconnectWorkspace),ids=new Map(doc.sources.map(source=>[source.id,crypto.randomUUID()]));
    for(const source of doc.sources){source.id=ids.get(source.id);if(source.referenceId)source.referenceId=ids.get(source.referenceId);}
    if(doc.state.activeReference)doc.state.activeReference=ids.get(doc.state.activeReference);
    window.partialWorkspace=doc;window.pendingWorkspace=window.vistas.state.workspaceUI.open(new File([JSON.stringify(doc)],'partial.json'));
  });
  await page.locator('#workspaceReconnect').waitFor({state:'visible'});
  await page.locator('#workspacePartial').click();await page.evaluate(()=>window.pendingWorkspace);
  assert.equal(await page.evaluate(()=>window.vistas.state.locations.size),0);
  assert.equal(await page.evaluate(()=>{const saved=window.vistas.workspaceSnapshot(),expected=window.partialWorkspace;return saved.sources.length===expected.sources.length&&saved.state.selected===expected.state.selected&&saved.state.activeReference===expected.state.activeReference&&JSON.stringify(saved.state.headings)===JSON.stringify(expected.state.headings);}),true);
  await page.evaluate(()=>{delete window.savedFiles;delete window.savedWorkspace;delete window.reconnectWorkspace;delete window.partialWorkspace;delete window.pendingWorkspace;delete window.showSaveFilePicker;});
  console.log('Workspace browser checks passed: save/restore, lazy photos, independent gates, spatial/model/point labels, additive packs/updates, rollback, reconnect/cancel and IndexedDB handles.');
}
