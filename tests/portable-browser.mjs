import assert from 'node:assert/strict';
import {readFile,mkdtemp,mkdir,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
export async function checkPortable(browser,url){
 const page=await browser.newPage({acceptDownloads:true});const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/cdn.jsdelivr.net/**',route=>route.abort());
 try{
 await page.goto(url);await page.evaluate(async()=>{window.vistas=await import('/js/app.js');});
 await page.waitForFunction(()=>document.documentElement.dataset.appState==='ready');
 await page.locator('#importBtn').click();
 await page.evaluate(()=>{window.showOpenFilePicker=async()=>{throw new DOMException('Policy denied','NotAllowedError');};window.showSaveFilePicker=async()=>{throw new Error('Must use download');};});
 await page.locator('#referenceInput').evaluate(el=>el.click());
 const fallback=page.locator('#referenceFeedback button');await fallback.waitFor();
 const choosing=page.waitForEvent('filechooser');await fallback.click();
 await (await choosing).setFiles({name:'export_reference.json',mimeType:'application/json',buffer:Buffer.from('{"source_crs":"EPSG:7854"}')});
 await page.waitForFunction(()=>window.vistas.state.sources.values().length===1);
 const downloading=page.waitForEvent('download');await page.locator('#saveWorkspace').click();
 const download=await downloading,document=JSON.parse(await readFile(await download.path(),'utf8'));
 assert.equal(document.sources.length,1);assert.equal(document.sources[0].role,'reference');
 const folder=await mkdtemp(path.join(tmpdir(),'vistas-portable-'));await mkdir(path.join(folder,'data'));
 await writeFile(path.join(folder,'data','export_reference.json'),'{"source_crs":"EPSG:7854"}');
 // Use the browser's actual metadata, allowing file timestamp differences to take the confirmation path.
 await writeFile(path.join(folder,'project.vistas-workspace.json'),JSON.stringify(document));
 await writeFile(path.join(folder,'alternate.vistas-workspace.json'),JSON.stringify(document));
 await page.reload();await page.evaluate(async()=>{window.vistas=await import('/js/app.js');});
 await page.locator('#importBtn').click();await page.locator('#workspaceFolderInput').setInputFiles(folder);
 await page.locator('#chooseWorkspace').waitFor();
 await page.getByRole('button',{name:'project.vistas-workspace.json',exact:true}).click();
 await page.waitForFunction(()=>document.getElementById('workspaceReconnect').open||window.vistas.state.workspaceRestored===true);
 if(await page.locator('#workspaceReconnect').isVisible()){
   await page.getByRole('button',{name:'Use updated files',exact:true}).click();await page.locator('#workspaceLoad').click();
 }
 await page.waitForFunction(()=>window.vistas.state.workspaceRestored===true);
 const relative=await page.evaluate(()=>window.vistas.workspaceSnapshot().sources[0].files[0].relativePath);
 assert.equal(relative,'data/export_reference.json');assert.deepEqual(errors,[]);
 }finally{await page.close();}
 const hosted=await browser.newPage();const hostedErrors=[];hosted.on('pageerror',e=>hostedErrors.push(e.message));
 try{
 await hosted.route('**/cdn.jsdelivr.net/**',r=>r.abort());
 await hosted.goto(new URL('/panorama-explorer/',url).href);
 await hosted.waitForFunction(()=>document.documentElement.dataset.appState==='ready');
 assert.equal(await hosted.locator('canvas.maplibregl-canvas').count(),1);assert.deepEqual(hostedErrors,[]);
 }finally{await hosted.close();}
 const local=await browser.newPage({acceptDownloads:true});const localErrors=[];local.on('pageerror',e=>localErrors.push(e.message));
 await local.route('**/cdn.jsdelivr.net/**',r=>r.abort());
 try{
 await local.goto(new URL('../index.html',import.meta.url).href);
 await local.waitForFunction(()=>document.documentElement.dataset.appState==='ready');
 await local.locator('#importBtn').click();const downloading=local.waitForEvent('download');await local.locator('#saveWorkspace').click();
 assert.equal((await downloading).suggestedFilename(),'views-vistas.vistas-workspace.json');assert.deepEqual(localErrors,[]);
 }finally{await local.close();}
 console.log('Portable browser checks passed: denied picker fallback, download, folder reconnect, local-file launch; CDN blocked.');
}
