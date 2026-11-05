import {formatViewName,selectViewpointFeatures,viewId} from './core.js';

export const LAYER_KINDS = ['point','viewshed','frustum'];
const OBJ_KIND = {Points:'point',Viewsheds:'viewshed',Frustums:'frustum'};

/** Keep every source row; only the selectable map marker is deduplicated. */
export function buildLocations(pointRecords=[],cones=[],objects=[]) {
  const locations = new Map();
  const ensure = id => {
    if (!locations.has(id)) locations.set(id,{id,label:id,pointRecords:[],cones:[],objects:[],layers:[],point:null});
    return locations.get(id);
  };
  for (const feature of pointRecords) {
    const id=viewId(feature.properties);
    if (id && feature.geometry?.type==='Point') ensure(id).pointRecords.push(feature);
  }
  for (const feature of cones) {
    const id=viewId(feature.properties);
    if (id && /^(Multi)?Polygon$/.test(feature.geometry?.type)) ensure(id).cones.push(feature);
  }
  for (const entry of objects) ensure(entry.viewId || '__unmatched__').objects.push(entry);
  for (const location of locations.values()) {
    const {id,layers}=location;
    location.point=selectViewpointFeatures(location.pointRecords)[0] || null;
    const props=location.point?.properties || location.cones[0]?.properties;
    location.label=id==='__unmatched__'?'Other layers':props?formatViewName(props):id;
    if (location.point) {
      layers.push({id:`point:${id}`,kind:'point',label:'Map point',source:'map'});
      layers.push({id:`frustum:${id}`,kind:'frustum',label:'Photo / reference frustum',source:'map'});
    }
    if (location.cones.length) layers.push({id:`viewshed:${id}`,kind:'viewshed',label:'Map viewshed',source:'map'});
    for (const entry of location.objects) layers.push({id:`obj:${entry.id}`,kind:OBJ_KIND[entry.type] || 'other',label:entry.name.split('/').pop(),source:'obj',entryId:entry.id});
  }
  return new Map([...locations].sort(([,a],[,b])=>a.label.localeCompare(b.label,'en',{numeric:true}) || a.id.localeCompare(b.id,'en',{numeric:true})));
}

export function checkboxState(layers,visibility) {
  const on=layers.filter(layer=>visibility.get(layer.id)!==false).length;
  return {checked:layers.length>0 && on===layers.length,indeterminate:on>0 && on<layers.length,disabled:layers.length===0};
}

export function setLayersVisible(layers,visibility,enabled) {
  for (const layer of layers) visibility.set(layer.id,enabled);
}

/** Keep only the latest action per scope; imports use the latest matching action. */
export class VisibilityIntents {
  constructor(){this.sequence=0;this.rules=new Map();}
  key({locationId=null,source=null,kind=null}){return JSON.stringify([locationId,source,kind]);}
  set(scope,enabled){this.rules.set(this.key(scope),{sequence:++this.sequence,enabled:!!enabled});}
  resolve(layer,locationId,fallback=true){
    let latest=null;
    for(const scope of [{},{locationId},{source:layer.source},{source:layer.source,kind:layer.kind}]){
      const rule=this.rules.get(this.key(scope));
      if(rule&&(!latest||rule.sequence>latest.sequence))latest=rule;
    }
    return latest?latest.enabled:fallback;
  }
}

/** Newly imported files inherit the user's hidden parent/category intent. */
export function inheritVisibility(locations,previous,visibility,defaultVisible=true,intents=null) {
  const previousIds=new Set([...previous.values()].flatMap(location=>location.layers.map(layer=>layer.id)));
  for (const location of locations.values()) {
    const old=previous.get(location.id);
    const allHidden=old?.layers.length>0 && old.layers.every(layer=>visibility.get(layer.id)===false);
    for (const layer of location.layers) {
      if (visibility.has(layer.id)&&(!intents||previousIds.has(layer.id))) continue;
      const siblings=old?.layers.filter(item=>item.kind===layer.kind) || [];
      const categoryHidden=siblings.length>0 && siblings.every(item=>visibility.get(item.id)===false);
      const fallback=visibility.get(layer.id)??(allHidden || categoryHidden?false:defaultVisible);
      visibility.set(layer.id,intents?intents.resolve(layer,location.id,fallback):fallback);
    }
  }
}

/** Build a metadata-only lookup; never open or decode a photo while indexing. */
export function createPhotoIndex(files=[]) {
  const bySuffix=new Map(), byBasename=new Map();
  const key=path=>String(path || '').replace(/\\/g,'/').replace(/^\/+|\/+$/g,'').trim().toLowerCase().replace(/\.(jpg|jpeg|png|webp)$/i,'');
  const add=(map,k,file)=>{if(!map.has(k))map.set(k,file);else if(map.get(k)!==file)map.set(k,null);};
  for (const file of files) {
    const parts=key(file.webkitRelativePath || file.path || file.name).split('/');
    for (let i=0;i<parts.length;i++) add(bySuffix,parts.slice(i).join('/'),file);
    add(byBasename,key(file.name).split('/').pop(),file);
  }
  return {size:files.length,match(reference){const k=key(reference);if(!k)return null;return bySuffix.has(k)?bySuffix.get(k):byBasename.get(k.split('/').pop()) || null;}};
}
