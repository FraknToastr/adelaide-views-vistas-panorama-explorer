import {HandleStore,readAccess,reconnectFiles,relevantFiles,validateWorkspace,indexWorkspaceFolder,resolveWorkspaceFolderSource,newId,MAX_WORKSPACE_BYTES} from './workspace.js';

export function installWorkspaceUI({registry,snapshot,restore,importFiles,notify,setBusy}){
  const $=id=>document.getElementById(id),store=new HandleStore();let busy=false;
  const useNativePickers=window.location.protocol!=='file:';
  const inputs={spatialInput:'spatial',photosInput:'photos',objInput:'models',objFolderInput:'models',referenceInput:'reference'};
  function lock(on){busy=on;setBusy(on);for(const id of ['saveWorkspace','openWorkspace','openWorkspaceFolder',...Object.keys(inputs)])$(id).disabled=on;}
  function offerStandard(input,status,error){
    status.textContent=error.message+' ';
    const button=document.createElement('button');button.type='button';button.className='button secondary';button.textContent='Choose using standard picker';
    button.onclick=()=>{input.dataset.standardPickerOnce='true';input.click();};status.append(button);
  }
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
      if(input.dataset.standardPickerOnce){delete input.dataset.standardPickerOnce;return;}
      const available=directory?window.showDirectoryPicker:window.showOpenFilePicker;
      if(!useNativePickers||!available||busy)return;event.preventDefault();
      // Invoke the picker before awaiting anything, preserving the user gesture.
      const feedbackId={spatial:'spatialFeedback',photos:'photosFeedback',models:'objFeedback',reference:'referenceFeedback'}[role];
      choose(role,directory,input,()=>{lock(true);$(feedbackId).textContent='Indexing…';}).then(({files,access})=>{lock(false);return add(role,files,access);}).catch(error=>{lock(false);if(error.name!=='AbortError'){offerStandard(input,$(feedbackId),error);}});
    });
  }
  $('saveWorkspace').onclick=()=>{
    if(busy)return;
    try{
      const name='views-vistas.vistas-workspace.json';
      const blob=new Blob([JSON.stringify(snapshot(),null,2)],{type:'application/json'});
      if(blob.size>MAX_WORKSPACE_BYTES)throw new Error('Workspace metadata exceeds the 10 MB limit. Split the data into smaller workspaces.');
      const url=URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=url;link.download=name;
      document.body.append(link);
      try{link.click();}finally{link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
      $('workspaceFeedback').textContent='Workspace download requested. Check your browser’s downloads.';
    }catch(error){notify(error.message);}
  };
  async function open(file,folder=null){
    if(busy)return;lock(true);$('workspaceFeedback').textContent='Opening workspace…';
    try{
      if(file.size>MAX_WORKSPACE_BYTES)throw new Error('Workspace JSON exceeds the 10 MB limit.');
      const workspace=validateWorkspace(JSON.parse(await file.text())),resolved=new Map(),pending=[];
      for(const source of workspace.sources){
        try{
          let access=null,result;
          if(folder)result=resolveWorkspaceFolderSource(source,folder);
          else{
            const current=registry().packs.get(source.id);
            access=current?.access||await store.get(source.id);
            const files=access?await readAccess(access):current?.files;
            if(!files?.length)throw new Error('Choose the workspace folder or reconnect this source.');
            result=reconnectFiles(source,files);
          }
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
            if(useNativePickers&&(directory?window.showDirectoryPicker:window.showOpenFilePicker)){const result=await choose(item.source.role,directory);await accept(result.files,result.access);}
            else input.click();
          }catch(error){if(error.name!=='AbortError')offerStandard(input,status,error);}
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
  $('openWorkspaceFolder').onclick=()=>$('workspaceFolderInput').click();
  $('workspaceFolderInput').onchange=()=>{
    const input=$('workspaceFolderInput'),folder=indexWorkspaceFolder(input.files||[]);
    input.value='';
    if(busy||!folder.paths.size)return;
    const workspaces=[...folder.paths].filter(([path])=>!path.includes('/')&&/\.vistas-workspace(?: \(\d+\))?\.json$/i.test(path));
    if(!workspaces.length){
      notify('Put the .vistas-workspace.json file at the top of the folder containing your source data, then choose that folder.');
      return;
    }
    if(workspaces.length===1){open(workspaces[0][1],folder);return;}
    const dialog=$('chooseWorkspace'),list=$('workspaceChoices');
    list.replaceChildren();
    for(const [path,file] of workspaces){
      const button=document.createElement('button');
      button.type='button';button.className='button secondary';button.textContent=path;
      button.onclick=()=>{dialog.close();open(file,folder);};
      list.append(button);
    }
    dialog.addEventListener('close',()=>list.replaceChildren(),{once:true});
    dialog.showModal();
  };
  $('openWorkspace').onclick=async()=>{
    if(busy)return;
    try{
      if(useNativePickers&&window.showOpenFilePicker){const [handle]=await window.showOpenFilePicker({types:[{description:'Views & Vistas workspace',accept:{'application/json':['.json']}}]});await open(await handle.getFile());}
      else $('workspaceInput').click();
    }catch(error){if(error.name!=='AbortError')offerStandard($('workspaceInput'),$('workspaceFeedback'),error);}
  };
  $('workspaceInput').onchange=()=>{const file=$('workspaceInput').files?.[0];$('workspaceInput').value='';if(file)open(file);};
  return {open,store};
}
