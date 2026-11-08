import test from 'node:test';
import assert from 'node:assert/strict';
import {SourceRegistry,createWorkspace,validateWorkspace,reconnectFiles,readAccess,validateReference,relevantFiles} from '../js/workspace.js';
import {readObjEntries} from '../js/importers.js';
const file=(name,text='data',path=name)=>Object.assign(new File([text],name,{lastModified:10}),{path});
const pack=(id,role,files)=>({id,role,name:id,mode:'files',root:'',files});
test('workspace round trip contains references and settings, never file contents or handles',()=>{
  const registry=new SourceRegistry(),photo=file('a.jpg','private image bytes');
  registry.put({...pack('photos','photos',[photo]),access:{secret:true}});
  const doc=createWorkspace('workspace',registry.sources(),{labels:true,selected:'A',headings:{A:5},metroKey:'secret'});
  assert.equal(doc.version,1);assert.deepEqual(validateWorkspace(JSON.parse(JSON.stringify(doc))),doc);
  assert.equal(JSON.stringify(doc).includes('private image bytes'),false);assert.equal(JSON.stringify(doc).includes('secret'),false);
  assert.deepEqual(doc.sources[0].files,[{path:'a.jpg',size:19,lastModified:10}]);
});
test('model packs preserve their own projection reference configuration independently',()=>{
  const registry=new SourceRegistry();
  const reference={source_crs:'EPSG:7854',lod_source_frame:'SCENE_LOCAL',scene_origin:{easting_m:280000,northing_m:6134000,height_m:30},apiKey:'never serialize'};
  registry.put({...pack('models','models',[file('a.obj')]),reference});
  const doc=createWorkspace('w',registry.sources(),{});
  assert.equal(doc.sources[0].referenceConfig.scene_origin.height_m,30);
  assert.equal(JSON.stringify(doc).includes('never serialize'),false);
});
test('schema rejects future versions, traversal, duplicate IDs, missing dependencies and invalid settings',()=>{
  const registry=new SourceRegistry();registry.put(pack('one','photos',[file('a.jpg')]));
  const valid=createWorkspace('w',registry.sources(),{});
  for(const mutate of [d=>d.version=99,d=>d.sources[0].files[0].path='../a.jpg',d=>d.sources.push(d.sources[0]),d=>d.sources[0].referenceId='missing',d=>d.state.map={center:[0,NaN],zoom:4,pitch:0,bearing:0},d=>d.state.labels='yes',d=>d.state.headingStep=3,d=>d.state.visibility=null]){
    const doc=structuredClone(valid);mutate(doc);assert.throws(()=>validateWorkspace(doc));
  }
  assert.throws(()=>validateReference({source_crs:'EPSG:4326'}));
  assert.throws(()=>validateReference({scene_origin:{easting_m:'bad',northing_m:6134000}}));
  assert.throws(()=>validateReference(valid),/Open workspace/);
  const doc=structuredClone(valid);doc.state.map={center:[138.6,-34.9],zoom:15,pitch:0,bearing:0,padding:'invalid'};
  assert.equal('padding' in validateWorkspace(doc).state.map,false);
});
test('pack IDs deduplicate identical inputs but retain different same-named files',async()=>{
  const registry=new SourceRegistry(),files=[file('same.zip','first')];
  const id=await registry.identify('spatial',files);registry.put(pack(id,'spatial',files));
  assert.equal(await registry.identify('spatial',files),id);
  assert.notEqual(await registry.identify('spatial',[file('same.zip','different')]),id);
  assert.equal(registry.conflicts('spatial',[file('same.zip','different')]).length,1);
  const handle=id=>({isSameEntry:async other=>other.key===id,key:id});
  registry.put({...pack('native','models',[file('same.obj')]),access:{files:[handle('a')]}});
  assert.equal(await registry.identify('models',[file('same.obj')],{files:[handle('a')]}),'native');
  assert.notEqual(await registry.identify('models',[file('same.obj')],{files:[handle('b')]}),'native');
});
test('reconnect uses exact relative paths under renamed roots and reports changed metadata',()=>{
  const source={mode:'directory',files:[{path:'original/sub/a.jpg',size:4,lastModified:10}]};
  const same=reconnectFiles(source,[file('a.jpg','data','moved/sub/a.jpg')]);
  assert.equal(same.changed,false);assert.equal(same.files[0].path,'original/sub/a.jpg');
  assert.equal(reconnectFiles(source,[file('a.jpg','new image','moved/sub/a.jpg')]).changed,true);
  assert.throws(()=>reconnectFiles(source,[file('a.jpg','data','moved/other/a.jpg')]),/Missing file/);
  assert.throws(()=>reconnectFiles(source,[file('a.jpg','data','moved/sub/a.jpg'),file('a.jpg','data','moved/sub/a.jpg')]),/Ambiguous/);
});
test('recursive handle indexing never reads or decodes photo content and requires permission',async()=>{
  let contentReads=0;
  const image=file('image.jpg');image.arrayBuffer=()=>{contentReads++;throw Error('must not read');};
  const fileHandle={name:'image.jpg',kind:'file',getFile:async()=>image};
  const folder={name:'sub',kind:'directory',async *values(){yield fileHandle;}};
  const root={name:'photos',queryPermission:async()=> 'granted',async *values(){yield folder;}};
  const files=await readAccess({directory:root});
  assert.equal(files[0].path,'photos/sub/image.jpg');assert.equal(contentReads,0);
  await assert.rejects(readAccess({directory:{...root,queryPermission:async()=> 'prompt'}}),/reconnected/);
});
test('partially restored workspaces retain unresolved source references when saved again',()=>{
  const registry=new SourceRegistry(),manifest={id:'missing',role:'photos',name:'Photos',mode:'files',root:'',files:[{path:'photo.jpg',size:1,lastModified:10}],referenceId:null};
  registry.put({id:'missing',role:'photos',files:[],manifest,unavailable:true});
  const doc=createWorkspace('w',registry.sources(),{});assert.equal(doc.sources[0].files[0].path,'photo.jpg');
});
test('multiple ZIPs retain their own reference configuration and identical internal names',async()=>{
  const previous=globalThis.window;
  globalThis.window={JSZip:{loadAsync:async file=>({files:{
    model:{name:'Park__A__Points.obj',_data:{uncompressedSize:10},async:async()=> 'v 0 0 0'},
    reference:{name:'export_reference.json',async:async()=>JSON.stringify({source_crs:'EPSG:7854',scene_origin:{easting_m:file.name==='one.zip'?280000:281000,northing_m:6134000}})}
  }})}};
  try{
    const {entries}=await readObjEntries([file('one.zip'),file('two.zip')]);
    assert.equal(entries.length,2);assert.notEqual(entries[0].name,entries[1].name);
    assert.deepEqual(entries.map(entry=>entry.reference.scene_origin.easting_m),[280000,281000]);
  }finally{globalThis.window=previous;}
});
test('model folders exclude workspace files and unrelated JSON to avoid self-referencing saves',()=>{
  const files=['a.obj','a.mtl','a.zip','export_reference.json','park.vistas-workspace.json','other.json'].map(name=>file(name));
  assert.deepEqual(relevantFiles('models',files).map(file=>file.name),['a.obj','a.mtl','a.zip','export_reference.json']);
});
