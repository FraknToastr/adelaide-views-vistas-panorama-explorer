import test from 'node:test';
import assert from 'node:assert/strict';
import {indexWorkspaceFolder,resolveWorkspaceFolderSource,fileInfo,validateWorkspace} from '../js/workspace.js';
function file(path,text='data',date=10){const f=new File([text],path.split('/').at(-1),{lastModified:date});Object.defineProperty(f,'webkitRelativePath',{value:path});return f;}
const source=(mode='files')=>({id:'p',role:'photos',name:'Photos',root:'photos',mode,files:[{path:mode==='directory'?'photos/a.jpg':'a.jpg',size:4,lastModified:10}]});
test('portable paths survive folder moves and subsequent workspace save/load',()=>{
 const folder=indexWorkspaceFolder([file('Renamed/pictures/a.jpg')]);
 const pack=resolveWorkspaceFolderSource(source(),folder);
 assert.equal(pack.changed,false);assert.equal(pack.files[0].path,'a.jpg');
 const info=fileInfo(pack.files[0]);assert.equal(info.relativePath,'pictures/a.jpg');
 const doc=validateWorkspace({format:'adelaide-views-vistas-workspace',version:1,id:'w',sources:[{...source(),files:[info]}],state:{}});
 assert.equal(resolveWorkspaceFolderSource(doc.sources[0],indexWorkspaceFolder([file('Moved/pictures/a.jpg')])).changed,false);
});
test('legacy directory packs resolve as a whole and flag changed metadata',()=>{
 const s=source('directory');
 assert.equal(resolveWorkspaceFolderSource(s,indexWorkspaceFolder([file('Project/collection/photos/a.jpg')])).files.length,1);
 assert.equal(resolveWorkspaceFolderSource(s,indexWorkspaceFolder([file('Project/photos/a.jpg','longer')])).changed,true);
 assert.throws(()=>resolveWorkspaceFolderSource(s,indexWorkspaceFolder([file('Project/one/photos/a.jpg'),file('Project/two/photos/a.jpg')])),/Multiple/);
});
test('ambiguous names, missing files and unsafe relative paths are rejected',()=>{
 assert.throws(()=>resolveWorkspaceFolderSource(source(),indexWorkspaceFolder([file('Project/one/a.jpg'),file('Project/two/a.jpg')])),/Multiple/);
 assert.throws(()=>resolveWorkspaceFolderSource(source(),indexWorkspaceFolder([])),/Missing/);
 assert.throws(()=>validateWorkspace({format:'adelaide-views-vistas-workspace',version:1,id:'w',sources:[{...source(),files:[{...source().files[0],relativePath:'../a.jpg'}]}],state:{}}));
});
