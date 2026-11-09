const FORMAT='adelaide-views-vistas-workspace';
export const MAX_WORKSPACE_BYTES=10*1024*1024;
const ROLES=['spatial','photos','models','reference'];
export const newId=()=>globalThis.crypto.randomUUID?.()||Array.from(globalThis.crypto.getRandomValues(new Uint8Array(16)),v=>v.toString(16).padStart(2,'0')).join('');
export function filePath(file){return String(file.path||file.webkitRelativePath||file.name).replace(/\\/g,'/');}
export function fileInfo(file){
  const info={path:filePath(file),size:file.size,lastModified:file.lastModified};
  if(file.workspaceRelativePath)info.relativePath=file.workspaceRelativePath;
  return info;
}
function validRelativePath(path){
  return typeof path==='string'&&path.split('/').every(part=>part&&part!=='.'&&part!=='..'&&!/[:\\]/.test(part));
}
const signature=files=>JSON.stringify(files.map(fileInfo).sort((a,b)=>a.path.localeCompare(b.path)));
export function validateReference(value){
  if(!value||Array.isArray(value)||typeof value!=='object')throw new Error('Invalid reference JSON.');
  if(value.format===FORMAT)throw new Error('This is a workspace file. Use Open workspace.');
  if(value.source_crs&&value.source_crs!=='EPSG:7854')throw new Error('Unsupported reference CRS.');
  const numeric=value=>(typeof value==='number'||typeof value==='string'&&value.trim()!=='')&&Number.isFinite(Number(value));
  if(value.scene_origin!==undefined&&(!value.scene_origin||typeof value.scene_origin!=='object'||!['easting_m','northing_m'].every(key=>numeric(value.scene_origin[key]))||(value.scene_origin.height_m!==undefined&&!numeric(value.scene_origin.height_m))))throw new Error('Invalid reference scene origin.');
  for(const key of ['lod_source_frame','obj_coordinates'])if(value[key]!==undefined&&typeof value[key]!=='string')throw new Error('Invalid reference coordinate frame.');
  return value;
}
function referenceSettings(value){
  validateReference(value);
  const result=Object.fromEntries(['source_crs','lod_source_frame','obj_coordinates'].filter(key=>value[key]!==undefined).map(key=>[key,value[key]]));
  if(value.scene_origin)result.scene_origin=Object.fromEntries(['easting_m','northing_m','height_m'].filter(key=>value.scene_origin[key]!==undefined).map(key=>[key,value.scene_origin[key]]));
  return result;
}
export class SourceRegistry {
  constructor(){this.packs=new Map();}
  async identify(role,files,access=null){
    for(const pack of this.packs.values()){
      if(pack.role!==role)continue;
      if(access&&pack.access){
        const a=access.directory?[access.directory]:access.files,b=pack.access.directory?[pack.access.directory]:pack.access.files;
        if(a.length===b.length&&(await Promise.all(a.map(async handle=>{for(const candidate of b)if(await handle.isSameEntry(candidate))return true;return false;}))).every(Boolean))return pack.id;
      }else if(!access&&!pack.access&&signature(files)===signature(pack.files))return pack.id;
    }
    return newId();
  }
  put(pack){this.packs.set(pack.id,pack);}
  conflicts(role,files){const paths=files.map(filePath).sort().join('\n');return this.values(role).filter(pack=>pack.files?.length&&pack.files.map(filePath).sort().join('\n')===paths);}
  values(role){return [...this.packs.values()].filter(pack=>!role||pack.role===role);}
  sources(){return this.values().map(pack=>pack.unavailable?pack.manifest:({id:pack.id,role:pack.role,name:pack.name,mode:pack.mode,root:pack.root||'',files:pack.files.map(fileInfo),referenceId:pack.referenceId||null,referenceConfig:pack.role==='models'&&pack.reference?referenceSettings(pack.reference):null}));}
}
export function createWorkspace(id,sources,state){return validateWorkspace({format:FORMAT,version:1,id,sources,state});}
export function validateWorkspace(value){
  const fail=()=>{throw new Error('Invalid or unsupported workspace file.');};
  if(!value||value.format!==FORMAT||value.version!==1||typeof value.id!=='string'||!value.id||!Array.isArray(value.sources)||!value.state||typeof value.state!=='object'||Array.isArray(value.state))fail();
  if(value.sources.length>1000)fail();
  const ids=new Set();let count=0;
  for(const source of value.sources){
    if(!source||typeof source.id!=='string'||!source.id||ids.has(source.id)||!ROLES.includes(source.role)||!['files','directory'].includes(source.mode)||typeof source.name!=='string'||typeof source.root!=='string'||!Array.isArray(source.files)||!source.files.length)fail();
    ids.add(source.id);const paths=new Set();
    for(const file of source.files){
      if(!file||!validRelativePath(file.path)||file.relativePath!==undefined&&!validRelativePath(file.relativePath)||paths.has(file.path)||!Number.isSafeInteger(file.size)||file.size<0||!Number.isFinite(file.lastModified))fail();
      paths.add(file.path);if(++count>100000)fail();
    }
  }
  for(const source of value.sources)if(source.referenceId&&!value.sources.some(p=>p.id===source.referenceId&&p.role==='reference'))fail();
  const s=value.state;
  const object=value=>value!==null&&typeof value==='object'&&!Array.isArray(value);
  if(s.visibility!==undefined){
    if(!object(s.visibility)||s.visibility.locations!==undefined&&!object(s.visibility.locations)||s.visibility.categories!==undefined&&!object(s.visibility.categories))fail();
    if(Object.values(s.visibility.locations||{}).some(v=>typeof v!=='boolean'))fail();
    for(const group of Object.values(s.visibility.categories||{}))if(!object(group)||Object.values(group).some(v=>typeof v!=='boolean'))fail();
  }
  if(s.map&&(!Array.isArray(s.map.center)||s.map.center.length!==2||!s.map.center.every(Number.isFinite)||Math.abs(s.map.center[1])>85.1||![s.map.zoom,s.map.pitch,s.map.bearing].every(Number.isFinite)||s.map.zoom<0||s.map.zoom>24||s.map.pitch<0||s.map.pitch>85))fail();
  if(s.panorama&&(![s.panorama.yaw,s.panorama.pitch,s.panorama.fov].every(Number.isFinite)||Math.abs(s.panorama.pitch)>87||s.panorama.fov<30||s.panorama.fov>110))fail();
  if(s.headings!==undefined&&(!object(s.headings)||Object.values(s.headings).some(v=>!Number.isFinite(v))))fail();
  for(const flag of ['labels','grounded','compass'])if(s[flag]!==undefined&&typeof s[flag]!=='boolean')fail();
  if(s.base!==undefined&&!['aerial','topo','metro'].includes(s.base))fail();
  if(s.selected!==undefined&&s.selected!==null&&typeof s.selected!=='string')fail();
  if(s.appearance)for(const group of ['obj','shape'])for(const part of ['point','line','fill']){
    const v=s.appearance[group]?.[part];if(!/^#[0-9a-f]{6}$/i.test(v?.color)||!Number.isFinite(v?.transparency)||v.transparency<0||v.transparency>100)fail();
  }
  // Whitelist the public document fields; credentials and handles are never exported.
  if(s.activeReference!==undefined&&s.activeReference!==null&&!value.sources.some(source=>source.id===s.activeReference&&source.role==='reference'))fail();
  if(s.headingStep!==undefined&&s.headingStep!==1&&s.headingStep!==5)fail();
  const state=Object.fromEntries(['visibility','map','panorama','headings','labels','grounded','compass','headingStep','base','selected','appearance','activeReference'].filter(key=>s[key]!==undefined).map(key=>[key,s[key]]));
  if(s.map)state.map={center:[...s.map.center],zoom:s.map.zoom,pitch:s.map.pitch,bearing:s.map.bearing};
  if(s.panorama)state.panorama={yaw:s.panorama.yaw,pitch:s.panorama.pitch,fov:s.panorama.fov};
  if(s.appearance)state.appearance=Object.fromEntries(['obj','shape'].map(group=>[group,Object.fromEntries(['point','line','fill'].map(part=>[part,{color:s.appearance[group][part].color,transparency:s.appearance[group][part].transparency}]))]));
  return {format:FORMAT,version:1,id:value.id,sources:value.sources.map(({id,role,name,mode,root,files,referenceId,referenceConfig})=>({id,role,name,mode,root,files:files.map(({path,size,lastModified,relativePath})=>relativePath?{path,size,lastModified,relativePath}:{path,size,lastModified}),referenceId:referenceId||null,referenceConfig:referenceConfig?referenceSettings(referenceConfig):null})),state};
}
// Only handles live in IndexedDB; image/model contents remain on disk.
export class HandleStore {
  async db(){
    if(!globalThis.indexedDB)return null;
    return new Promise((resolve,reject)=>{const request=indexedDB.open('vistas-workspace-access',1);request.onupgradeneeded=()=>request.result.createObjectStore('handles');request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);});
  }
  async get(id){return this.run('readonly',store=>store.get(id));}
  async put(id,access){return this.run('readwrite',store=>store.put(access,id));}
  async run(mode,operation){
    const db=await this.db();if(!db)return null;
    try{return await new Promise((resolve,reject)=>{const tx=db.transaction('handles',mode),request=operation(tx.objectStore('handles'));tx.oncomplete=()=>resolve(request.result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error);});}finally{db.close();}
  }
}
export async function readAccess(access,{request=false}={}){
  const handles=access.directory?[access.directory]:access.files;
  for(const handle of handles){
    let permission=await handle.queryPermission({mode:'read'});
    if(permission!=='granted'&&request)permission=await handle.requestPermission({mode:'read'});
    if(permission!=='granted')throw new Error('File access needs to be reconnected.');
  }
  const files=[];
  async function visit(directory,path){for await(const handle of directory.values())if(handle.kind==='directory')await visit(handle,path+handle.name+'/');else{
    const file=await handle.getFile();Object.defineProperty(file,'path',{value:path+file.name,configurable:true});files.push(file);
  }}
  if(access.directory)await visit(access.directory,access.directory.name+'/');
  else for(const handle of access.files)files.push(await handle.getFile());
  return files;
}
export function relevantFiles(role,files){
  const regex={photos:/\.(jpg|jpeg|png|webp)$/i,spatial:/\.(zip|shp|dbf|shx|prj|cpg)$/i,models:/(\.(obj|zip|mtl)|export_reference\.json)$/i,reference:/\.json$/i}[role];
  return Array.from(files).filter(file=>regex.test(file.name));
}
export function reconnectFiles(source,files){
  const paths=new Map();
  const key=path=>source.mode==='directory'?path.split('/').slice(1).join('/'):path;
  for(const file of files){const path=key(filePath(file));if(paths.has(path))throw new Error('Ambiguous file path: '+path);paths.set(path,file);}
  let changed=false;
  const matched=source.files.map(info=>{
    const file=paths.get(key(info.path));if(!file)throw new Error('Missing file: '+info.path);
    if(file.size!==info.size||file.lastModified!==info.lastModified)changed=true;
    // Preserve the saved path even when the chosen root folder was renamed.
    if(filePath(file)!==info.path)Object.defineProperty(file,'path',{value:info.path,configurable:true});
    return file;
  });
  return {files:matched,changed};
}

export function indexWorkspaceFolder(files){
  const paths=new Map(),names=new Map();
  for(const file of files){
    // Directory inputs include the chosen folder name as their first segment.
    const path=file.webkitRelativePath?.split('/').slice(1).join('/');
    if(!validRelativePath(path))continue;
    paths.set(path,file);
    if(!names.has(file.name))names.set(file.name,[]);
    names.get(file.name).push(path);
  }
  return {paths,names};
}

export function resolveWorkspaceFolderSource(source,{paths,names}){
  const unchanged=(info,file)=>file.size===info.size&&file.lastModified===info.lastModified;
  const candidates=info=>names.get(info.path.split('/').at(-1))||[];
  const matchingPaths=source.files.map(info=>info.relativePath);
  // Legacy directory imports retain their original folder and internal tree.
  // Find one common prefix for the whole pack so files cannot mix across copies.
  if(source.mode==='directory'&&matchingPaths.every(path=>!path)){
    const first=source.files[0];
    const prefixes=paths.has(first.path)?['']:candidates(first)
      .filter(path=>path.endsWith('/'+first.path)).map(path=>path.slice(0,-first.path.length));
    const complete=prefixes.filter(prefix=>source.files.every(info=>paths.has(prefix+info.path)));
    if(complete.length!==1)throw new Error(complete.length?'Multiple folders match '+source.name+'.':'Missing source folder: '+source.root);
    source.files.forEach((info,i)=>{matchingPaths[i]=complete[0]+info.path;});
  }
  let changed=false;
  const files=source.files.map((info,i)=>{
    let path=matchingPaths[i]||info.path;
    if(!paths.has(path)&&!matchingPaths[i]){
      const options=candidates(info);
      const exact=options.filter(option=>unchanged(info,paths.get(option)));
      const matches=exact.length?exact:options;
      if(matches.length>1)throw new Error('Multiple files match '+info.path+'.');
      path=matches[0]||path;
    }
    const original=paths.get(path);
    if(!original)throw new Error('Missing file: '+path);
    if(!unchanged(info,original))changed=true;
    // Keep import-facing paths stable and retain the exact project-relative path for the next save.
    const file=new File([original],original.name,{type:original.type,lastModified:original.lastModified});
    Object.defineProperties(file,{path:{value:info.path,configurable:true},workspaceRelativePath:{value:path}});
    return file;
  });
  return {files,changed};
}
