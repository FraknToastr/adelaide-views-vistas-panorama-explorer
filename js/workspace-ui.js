import {HandleStore,readAccess,reconnectFiles,relevantFiles,validateWorkspace,newId,MAX_WORKSPACE_BYTES,filePath} from './workspace.js';

export function installWorkspaceUI({registry,snapshot,restore,importFiles,notify,setBusy}){
  const $=id=>document.getElementById(id),store=new HandleStore();let busy=false;
  const inputs={spatialInput:'spatial',photosInput:'photos',objInput:'models',objFolderInput:'models',referenceInput:'reference'};
  function lock(on){busy=on;setBusy(on);for(const id of ['saveWorkspace','openWorkspace',...Object.keys(inputs)])$(id).disabled=on;}
  async function choose(role,directory,input,onPicked=()=>{}){
    const extensions={spatial:'.zip,.shp,.dbf,.shx,.prj,.cpg',photos:'.jpg,.jpeg,.png,.webp',models:'.zip,.obj,.json,.mtl',reference:'.json'};
    const access=directory?{directory:await window.showDirectoryPicker({mode:'read'})}:{files:await window.showOpenFilePicker({multiple:role!=='reference',types:[{description:role==='reference'?'Reference JSON':role,accept:{'application/octet-stream':(input?.accept||extensions[role]).split(',')}}]})};
    onPicked();
    return {access,files:relevantFiles(role,await readAccess(access))};
  }
  async function add(role,files,access=null){
    if(busy)return;lock(true);
    try{
      let sourceId;
      if(!access){const conflicts=registry().conflicts(role,files);if(conflicts.length){sourceId=await chooseIdentity(conflicts);if(!sourceId)return;}}
      const pack=await importFiles(role,relevantFiles(role,files),access,{sourceId});
      if(pack?.access)try{await store.put(pack.id,pack.access);}catch{notify('Data loaded. File access could not be remembered; reconnect it when opening the workspace.',false);}
      else if(pack)await store.put(pack.id,null).catch(()=>{});
    }catch(error){if(error.name!=='AbortError')notify(error.message);}
    finally{lock(false);}
  }
  function chooseIdentity(packs){
    const dialog=$('sourceConflict'),list=$('sourceConflictChoices');list.replaceChildren();
    return new Promise(resolve=>{
      let choice=null;
      for(const [index,pack] of packs.entries()){const button=document.createElement('button');button.type='button';button.className='button secondary';button.dataset.sourceId=pack.id;button.textContent='Update '+pack.name+(packs.length>1?' (pack '+(index+1)+')':'');button.onclick=()=>{choice=pack.id;dialog.close();};list.append(button);}
      const close=()=>{dialog.removeEventListener('close',close);resolve(choice);};dialog.addEventListener('close',close);
      $('sourceAddNew').onclick=()=>{choice=newId();dialog.close();};$('sourceConflictCancel').onclick=()=>dialog.close();dialog.showModal();
    });
  }
  for(const [id,role] of Object.entries(inputs)){
    const input=$(id),directory=input.hasAttribute('webkitdirectory');
    input.onchange=()=>{const files=Array.from(input.files||[]);input.value='';if(files.length)add(role,files);};
    input.addEventListener('click',event=>{
      const available=directory?window.showDirectoryPicker:window.showOpenFilePicker;
      if(!available||busy)return;event.preventDefault();
      // Invoke the picker before awaiting anything, preserving the user gesture.
      const feedbackId={spatial:'spatialFeedback',photos:'photosFeedback',models:'objFeedback',reference:'referenceFeedback'}[role];
      choose(role,directory,input,()=>{lock(true);$(feedbackId).textContent='Indexing…';}).then(({files,access})=>{lock(false);return add(role,files,access);}).catch(error=>{lock(false);if(error.name!=='AbortError'){$(feedbackId).textContent=error.message;notify(error.message);}});
    });
  }
  $('saveWorkspace').onclick=async()=>{
    if(busy)return;
    try{
      const document=snapshot(),text=JSON.stringify(document,null,2),name='views-vistas.vistas-workspace.json';
      if(new Blob([text]).size>MAX_WORKSPACE_BYTES)throw new Error('Workspace metadata exceeds the 10 MB limit. Split the data into smaller workspaces.');
      if(window.showSaveFilePicker){
        const handle=await window.showSaveFilePicker({suggestedName:name,types:[{description:'Views & Vistas workspace',accept:{'application/json':['.json']}}]});
        for(const pack of registry().values()){
          const sameName=()=>pack.files.some(file=>file.name===handle.name)||pack.manifest?.files.some(file=>file.path.split('/').pop()===handle.name);
          let source=false;
          try{
            if(pack.access?.files){for(const input of pack.access.files)if(await handle.isSameEntry(input)){source=true;break;}}
            else if(pack.access?.directory){const relative=await pack.access.directory.resolve(handle);source=!!relative&&pack.files.some(file=>filePath(file).split('/').slice(1).join('/')===relative.join('/'));}
            else source=sameName();
          }catch{source=sameName();}
          if(source)throw new Error('Choose a workspace filename that does not overwrite an imported source file.');
        }
        const writable=await handle.createWritable();try{await writable.write(text);await writable.close();}catch(error){await writable.abort().catch(()=>{});throw error;}
      }else{
        const url=URL.createObjectURL(new Blob([text],{type:'application/json'})),link=window.document.createElement('a');
        link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
      }
      $('workspaceFeedback').textContent='Workspace saved. Source files remain on disk.';
    }catch(error){if(error.name!=='AbortError')notify(error.message);}
  };
  async function open(file){
    if(busy)return;lock(true);$('workspaceFeedback').textContent='Opening workspace…';
    try{
      if(file.size>MAX_WORKSPACE_BYTES)throw new Error('Workspace JSON exceeds the 10 MB limit.');
      const workspace=validateWorkspace(JSON.parse(await file.text())),resolved=new Map(),pending=[];
      for(const source of workspace.sources){
        try{
          const current=registry().packs.get(source.id),access=current?.access||await store.get(source.id);
          const files=access?await readAccess(access):current?.files;
          if(!files?.length)throw new Error('Reconnect this source.');
          const result=reconnectFiles(source,files);
          const pack={...source,...result,access};
          if(result.changed)pending.push({source,pack,message:'Files have changed since this workspace was saved.'});else resolved.set(source.id,pack);
        }catch(error){pending.push({source,message:error.message});}
      }
      if(pending.length&&!await reconnect(workspace,pending,resolved)){ $('workspaceFeedback').textContent='Workspace opening cancelled.';return; }
      await restore(workspace,resolved);
      for(const pack of resolved.values())if(pack.access)await store.put(pack.id,pack.access).catch(()=>{});
      $('workspaceFeedback').textContent=resolved.size===workspace.sources.length?'Workspace loaded.':'Workspace loaded with unavailable packs. Reopen it to reconnect them.';
      if($('importModal').open)$('importModal').close();
    }catch(error){$('workspaceFeedback').textContent='Workspace was not loaded.';notify(error.message);}
    finally{lock(false);}
  }
  function reconnect(workspace,pending,resolved){
    const dialog=$('workspaceReconnect'),list=$('workspaceSources');list.replaceChildren();
    return new Promise(resolve=>{
      const update=()=>{$('workspaceLoad').disabled=resolved.size!==workspace.sources.length;$('workspacePartial').textContent='Load available data ('+resolved.size+'/'+workspace.sources.length+' packs)';};
      for(const item of pending){
        const row=document.createElement('section');row.className='workspace-source';
        const name=document.createElement('strong');name.textContent=item.source.role+': '+item.source.name;
        const status=document.createElement('p');status.textContent=item.message;
        const button=document.createElement('button');button.type='button';button.className='button secondary';button.textContent=item.pack?'Use updated files':'Reconnect';
        const input=document.createElement('input');input.type='file';input.multiple=item.source.role!=='reference';input.hidden=true;
        if(item.source.mode==='directory'){input.setAttribute('webkitdirectory','');input.setAttribute('directory','');}
        async function accept(files,access){
          try{
            const result=reconnectFiles(item.source,files),pack={...item.source,...result,access};
            if(result.changed){item.pack=pack;button.textContent='Use updated files';status.textContent='Files differ from the saved sizes/dates. Choose “Use updated files” to continue.';}
            else complete(pack);
          }catch(error){status.textContent=error.message;}
        }
        function complete(pack){resolved.set(item.source.id,pack);button.disabled=true;status.textContent=pack.changed?'Updated files accepted.':'Reconnected.';update();}
        input.onchange=()=>accept(Array.from(input.files||[]),null);
        button.onclick=async()=>{
          if(item.pack){complete(item.pack);return;}
          try{
            const directory=item.source.mode==='directory';
            if(directory?window.showDirectoryPicker:window.showOpenFilePicker){const result=await choose(item.source.role,directory);await accept(result.files,result.access);}
            else input.click();
          }catch(error){if(error.name!=='AbortError')status.textContent=error.message;}
        };
        row.append(name,status,button,input);list.append(row);
      }
      let accepted=false;
      const close=()=>{dialog.removeEventListener('close',close);resolve(accepted);};
      dialog.addEventListener('close',close);
      $('workspaceLoad').onclick=()=>{accepted=true;dialog.close();};
      $('workspacePartial').onclick=()=>{accepted=true;dialog.close();};
      $('workspaceCancel').onclick=()=>dialog.close();
      update();dialog.showModal();
    });
  }
  $('openWorkspace').onclick=async()=>{
    if(busy)return;
    try{
      if(window.showOpenFilePicker){const [handle]=await window.showOpenFilePicker({types:[{description:'Views & Vistas workspace',accept:{'application/json':['.json']}}]});await open(await handle.getFile());}
      else $('workspaceInput').click();
    }catch(error){if(error.name!=='AbortError')notify(error.message);}
  };
  $('workspaceInput').onchange=()=>{const file=$('workspaceInput').files?.[0];$('workspaceInput').value='';if(file)open(file);};
  return {open,store};
}
