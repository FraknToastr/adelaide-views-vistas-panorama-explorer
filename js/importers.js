import {normaliseGeoJSON} from './geo.js';
import {normalisePath} from './core.js';

/** Read shapefiles either from ZIP or separately selected .shp/.dbf/.prj files. */
export async function readShapefiles(files) {
  if (!files?.length) throw new Error('Select a shapefile ZIP or SHP/DBF/PRJ files.');
  if (!window.shp) throw new Error('Shapefile parser did not load. Check your internet connection.');
  const list=Array.from(files);
  const collections=[];
  for (const zip of list.filter(f=>/\.zip$/i.test(f.name))) {
    const parsed=await window.shp(await zip.arrayBuffer());
    collections.push(...(Array.isArray(parsed)?parsed:[parsed]));
  }
  // Pair loose components by their complete stem, never by extension alone.
  const groups=new Map();
  for (const file of list) {
    const match=(file.path||file.webkitRelativePath||file.name).match(/^(.*)\.(shp|dbf|prj|cpg)$/i);
    if (!match) continue;
    const stem=match[1].toLowerCase();
    if (!groups.has(stem)) groups.set(stem,{});
    groups.get(stem)[match[2].toLowerCase()]=file;
  }
  for (const [stem,files] of groups) {
    if (!files.shp) throw new Error(`Missing SHP: ${stem}`);
    if (!files.dbf) throw new Error(`Missing DBF: ${stem}`);
    const buffers=Object.fromEntries(await Promise.all(Object.entries(files).map(async ([ext,file])=>[
      ext,/^(prj|cpg)$/.test(ext)?await file.text():await file.arrayBuffer()
    ])));
    collections.push(await window.shp(buffers));
  }
  if (!collections.length) throw new Error('Choose a shapefile ZIP or matching SHP and DBF files.');
  return normaliseGeoJSON(collections);
}
export async function readObjEntries(files) {
  if (!files?.length) throw new Error('Choose OBJ files or a ZIP archive.');
  const records=[];
  let reference=null;
  const archives=Array.from(files).filter(file=>/\.zip$/i.test(file.name));
  for (const file of Array.from(files)) {
    if (/\.zip$/i.test(file.name)) {
      if (!window.JSZip) throw new Error('ZIP library did not load.');
      const zip=await window.JSZip.loadAsync(file);
      const firstRecord=records.length;let archiveReference=null;
      for (const entry of Object.values(zip.files)) {
        if (entry.dir || !/\.(obj|json)$/i.test(entry.name)) continue;
        if (entry.name.split('/').some(p=>p==='__MACOSX')) continue;
        if (/export_reference\.json$/i.test(entry.name)) {
          try {archiveReference=JSON.parse(await entry.async('string'));reference=archiveReference;} catch { /* non-blocking */ }
        } else if (/\.obj$/i.test(entry.name)) {
          records.push({name:archives.length>1?file.name+'/'+entry.name:entry.name, readText:()=>entry.async('string'), bytes:entry._data?.uncompressedSize || 0});
        }
      }
      if(archiveReference)for(const record of records.slice(firstRecord))record.reference=archiveReference;
    } else if (/\.obj$/i.test(file.name)) {
      records.push({name:file.path||file.webkitRelativePath||file.name,readText:()=>file.text(),bytes:file.size});
    } else if (/export_reference\.json$/i.test(file.name)) {
      reference=JSON.parse(await file.text());
    }
  }
  if (!records.length) throw new Error('No .obj files were found.');
  const total=records.reduce((a,b)=>a+b.bytes,0);
  if (total>500*1024*1024) throw new Error('This preview limits OBJ imports to 500 MB. Split the dataset into location groups.');
  // Reject accidental duplicate filenames from multiple directory selections.
  const unique=new Map(records.map(r=>[normalisePath(r.name),r]));
  return {entries:[...unique.values()],reference};
}
export function collectPanoramaFiles(files) {
  const list=Array.from(files ?? []);
  const images=list.filter(f=>/\.(jpg|jpeg|png|webp)$/i.test(f.name));
  return images;
}
