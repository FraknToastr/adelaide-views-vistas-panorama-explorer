import {installTooltips} from './tooltips.js';
import * as THREE from 'three';
import {DEFAULT_CENTER,viewId,photoReference,safeLabel} from './core.js';
import {registerCRS,boundsFromFeatures,bearingLine} from './geo.js';
import {readShapefiles,readObjEntries,collectPanoramaFiles} from './importers.js';
import {PanoramaViewer} from './panorama.js';
import {ObjMapLayer} from './obj-map.js';
import {defaultAppearance,loadAppearance,saveAppearance,applyShapeAppearance} from './appearance.js';
import {buildLocations,checkboxState,setLayersVisible,inheritVisibility,createPhotoIndex,VisibilityIntents} from './layers.js';
import {prepareViewshed,clipViewshed,cameraSector,sourceSectors} from './alignment.js';

const $=id=>document.getElementById(id);
const EMPTY={type:'FeatureCollection',features:[]};
const METRO_STORAGE='uos.vistas.metromap.key.v1';
let appearance=loadAppearance();
function updateAppearance(){
  applyShapeAppearance(state.map,appearance.shape);
  state.obj?.setAppearance(appearance.obj);
  saveAppearance(appearance);
}
function buildAppearanceControls(){
  const container=$('appearanceControls');container.replaceChildren();
  for(const [group,title] of [['obj','3D Models'],['shape','Shapefiles']]){
    let active='fill';
    const section=element('section','appearance-section');
    section.append(element('h2','',title));
    const row=element('div','appearance-row'),pills=element('div','appearance-pills');
    pills.setAttribute('role','group');pills.setAttribute('aria-label',title+' appearance target');
    const color=document.createElement('input');color.type='color';color.id=group+'Color';
    const slider=document.createElement('input');slider.type='range';slider.min=0;slider.max=100;slider.step=1;slider.id=group+'Transparency';
    const output=element('output');output.htmlFor=slider.id;
    const sync=()=>{
      for(const button of pills.children)button.setAttribute('aria-pressed',String(button.dataset.part===active));
      color.value=appearance[group][active].color;slider.value=appearance[group][active].transparency;
      color.setAttribute('aria-label',title+' '+active+' colour');
      slider.setAttribute('aria-label',title+' '+active+' transparency');
      output.textContent=slider.value+'%';
    };
for(const part of ['point','line','fill']){
const button=element('button','',part[0].toUpperCase()+part.slice(1));button.type='button';button.dataset.part=part;
      button.onclick=()=>{active=part;sync();};pills.append(button);
    }
    color.oninput=()=>{appearance[group][active].color=color.value;updateAppearance();};
slider.oninput=()=>{appearance[group][active].transparency=Number(slider.value);output.textContent=slider.value+'%';updateAppearance();};
    row.append(pills,color);
    const transparency=element('label','appearance-transparency');transparency.htmlFor=slider.id;
    transparency.append(element('span','','Transparency'),slider,output);
    section.append(row,transparency);container.append(section);sync();
  }
}
export const state={
  map:null,obj:null,viewer:null,pointRecords:[],cones:[],locations:new Map(),
  visibility:new Map(),defaultVisible:true,visibilityIntents:new VisibilityIntents(),checkboxes:[],groupToggles:[],
  photoIndex:createPhotoIndex(),photoViews:[],selected:null,direction:null,compassShown:false,headingStep:5,
  base:'aerial',metroKey:'',reference:null,loadingObj:false,selectionSerial:0,spatialSerial:0,
  pointsData:EMPTY,conesData:EMPTY
};
function notify(message,bad=true) {
  const item=document.createElement('div');item.className='toast'+(bad?' bad':'');item.textContent=message;
  $('toastRegion').append(item);setTimeout(()=>item.remove(),bad?8500:4500);
}
function feedback(id,message,error=false){const el=$(id);el.textContent=message;el.classList.toggle('error',error);}
function openModal(id){if(id==='metroModal')$('metroKeyInput').value=state.metroKey;$(id).showModal();}
function closeModal(id){$(id).close();}
function reducedMotion(){return matchMedia('(prefers-reduced-motion: reduce)').matches;}
function basemapStyle(base) {
  const sources={
    aerial:{url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',attribution:'Tiles © Esri, Maxar, Earthstar Geographics, and GIS User Community'},
    topo:{url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',attribution:'Tiles © Esri, HERE, Garmin, OSM contributors and GIS User Community'},
    metro:{url:'https://api-v3.metromap.com.au/tiles/xyz/Australia_latest/{z}/{y}/{x}.png?key='+encodeURIComponent(state.metroKey),attribution:'Imagery © MetroMap, Aerometrex'}
  };
  const item=sources[base] || sources.aerial;
  return {version:8,name:base,sources:{base:{type:'raster',tiles:[item.url],tileSize:256,maxzoom:base==='metro'?22:19,attribution:item.attribution}},layers:[{id:'basemap',type:'raster',source:'base'}]};
}
function useBasemap(next) {
  if(next==='metro'&&!state.metroKey){openModal('metroModal');return;}
  if(!state.map)return;
  state.base=next;
  for(const btn of document.querySelectorAll('.basemap-btn'))btn.setAttribute('aria-pressed',String(btn.dataset.base===next));
  // A full style reload emits style.load, where overlays are reattached from state.
  // MapLibre's default style diff can remove app layers without emitting that event.
  state.map.setStyle(basemapStyle(next),{diff:false});
}
function setSource(id,data){state.map?.getSource(id)?.setData(data);}
function addMapLayers() {
  // style.load means the style graph is ready; raster tiles may still be loading.
  const map=state.map;if(!map)return;
  for(const id of ['points','cones','heading','frustum','reference','overlap'])
    if(!map.getSource('vistas-'+id))map.addSource('vistas-'+id,{type:'geojson',data:EMPTY});
  const layers=[
    {id:'vistas-cones-fill',type:'fill',source:'vistas-cones',paint:{'fill-color':'#ed0c73','fill-opacity':.09}},
    // A dark casing keeps the high-chroma survey line legible over water, lawns and pale concrete.
    {id:'vistas-cones-casing',type:'line',source:'vistas-cones',paint:{'line-color':'#182d3b','line-width':4.1,'line-opacity':.9}},
    {id:'vistas-cones-outline',type:'line',source:'vistas-cones',paint:{'line-color':'#f50083','line-width':2.35,'line-opacity':.98}},
    {id:'vistas-reference',type:'line',source:'vistas-reference',paint:{'line-color':'#ffda26','line-width':2.15,'line-dasharray':[3,2],'line-opacity':.98}},
    {id:'vistas-frustum-fill',type:'fill',source:'vistas-frustum',paint:{'fill-color':'#00e6d0','fill-opacity':.13}},
    {id:'vistas-frustum-outline',type:'line',source:'vistas-frustum',paint:{'line-color':'#eafffb','line-width':2.1,'line-opacity':.98}},
    {id:'vistas-overlap',type:'fill',source:'vistas-overlap',paint:{'fill-color':'#00e6a7','fill-opacity':.68}},
    {id:'vistas-direction',type:'line',source:'vistas-heading',paint:{'line-color':'#fff7d0','line-width':2.8,'line-opacity':1}},
    {id:'vistas-selected',type:'circle',source:'vistas-points',filter:['==',['get','VIEW_ID'],'___none___'],paint:{'circle-radius':15,'circle-color':'#fff7d0','circle-opacity':.28,'circle-stroke-color':'#f50083','circle-stroke-width':2.6}},
    {id:'vistas-points',type:'circle',source:'vistas-points',paint:{'circle-radius':['interpolate',['linear'],['zoom'],12,5.2,17,8.1,20,11],'circle-color':'#ffda26','circle-stroke-color':'#182d3b','circle-stroke-width':2.25}}
  ];
  for(const layer of layers)if(!map.getLayer(layer.id))map.addLayer(layer);
  updateAppearance();state.obj?.attach();updateMapSources();updateAlignment();
}
function refreshPhotoMatches() {
  state.photoViews=[];
  for(const location of state.locations.values()) {
    // One image can legitimately serve more than one viewpoint.
    location.photo=location.point?state.photoIndex.match(photoReference(location.point.properties)):null;
    if(location.photo)state.photoViews.push(location);
  }
}
function rebuildLocations() {
  const previous=state.locations;
  state.locations=buildLocations(state.pointRecords,state.cones,state.obj?.loaded || []);
  inheritVisibility(state.locations,previous,state.visibility,state.defaultVisible,state.visibilityIntents);
  refreshPhotoMatches();
  renderTree();applyVisibility();
}
function updateMapSources() {
  if(!state.map?.getSource('vistas-points'))return;
  const points=[],cones=[];
  for(const location of state.locations.values()) {
    if(location.point && visible('point:'+location.id))points.push({
      ...location.point,properties:{...location.point.properties,VIEW_ID:location.id,photoReady:location.photo?1:0}
    });
    if(visible('viewshed:'+location.id))cones.push(...location.cones);
  }
  state.pointsData={type:'FeatureCollection',features:points};
  state.conesData={type:'FeatureCollection',features:cones};
  setSource('vistas-points',state.pointsData);setSource('vistas-cones',state.conesData);
  if(state.map.getLayer('vistas-selected'))state.map.setFilter('vistas-selected',['==',['get','VIEW_ID'],state.selected || '___none___']);
}
function visible(id){return state.visibility.get(id)!==false;}
function triangulate(contour,holes) {
  const vectors=ring=>ring.map(p=>new THREE.Vector2(p.x,p.y));
  return THREE.ShapeUtils.triangulateShape(vectors(contour),holes.map(vectors));
}
function applyVisibility() {
  const objects=new Map();
  for(const location of state.locations.values())
    for(const layer of location.layers)if(layer.source==='obj')objects.set(layer.entryId,visible(layer.id));
  state.obj?.applyEntryVisibility(objects);
  updateMapSources();updateAlignment();updateCheckboxes();
}
export function setLayerVisibility(ids,enabled) {
  for(const id of ids)state.visibility.set(id,enabled);
  applyVisibility();
}
function updateAlignment() {
  updatePhotoCompass();
  const location=state.locations.get(state.selected);
  const origin=location?.point?.geometry.coordinates.slice(0,2);
  const direction=state.direction;
  const photoActive=!!(origin && direction && state.viewer?.active && location.photo);
  const showFrustum=!!origin && visible('frustum:'+location.id);
  const showViewshed=!!origin && visible('viewshed:'+location.id);
  let frustum=EMPTY,overlap=EMPTY,heading=EMPTY,reference=EMPTY;
  if(origin) {
    if(!location.prepared)location.prepared=prepareViewshed(location.cones,origin,triangulate);
    if(!location.sectors)location.sectors=sourceSectors(location.pointRecords);
    const radius=location.prepared.radius || Math.max(90,...location.sectors.map(s=>s.distance || 0));
    if(showFrustum) {
      reference={type:'FeatureCollection',features:location.sectors.map(s=>cameraSector(origin,s.heading,s.horizontalFov,s.distance || radius)).filter(Boolean)};
      if(photoActive) {
        const sector=cameraSector(origin,direction.heading,direction.horizontalFov,radius);
        frustum={type:'FeatureCollection',features:sector?[sector]:[]};
        if(visible('point:'+location.id))heading={type:'FeatureCollection',features:[bearingLine(...origin,direction.heading,Math.min(radius,100))]};
      }
    }
    if(photoActive&&showViewshed)overlap=clipViewshed(location.prepared,direction.heading,direction.horizontalFov);
    // OBJ highlights are masked by their own imported viewshed surfaces.
    state.obj?.setAlignment({viewId:location.id,origin,heading:direction?.heading || 0,horizontalFov:direction?.horizontalFov || 0,active:photoActive,intervals:[]});
  } else state.obj?.setAlignment({active:false});
  if(!state.map?.getSource('vistas-overlap'))return;
  setSource('vistas-reference',reference);setSource('vistas-frustum',frustum);
  setSource('vistas-overlap',overlap);setSource('vistas-heading',heading);
}
function updatePhotoCompass() {
  const heading=state.direction?.heading;
  const shown=state.compassShown && state.viewer?.active && Number.isFinite(heading);
  $('photoCompass').classList.toggle('hidden',!shown);
  if(shown) {
    const degrees=((Math.round(heading)%360)+360)%360;
    const cardinal=['N','NE','E','SE','S','SW','W','NW'][Math.round(degrees/45)%8];
    $('photoCompassBearing').textContent=cardinal+' · '+String(degrees).padStart(3,'0')+'°';
  }
}
function checkbox(layers,ariaLabel,scope) {
  const input=document.createElement('input');input.type='checkbox';input.setAttribute('aria-label',ariaLabel);
  state.checkboxes.push({input,layers});
  input.addEventListener('change',()=>{if(scope)state.visibilityIntents.set(scope,input.checked);setLayersVisible(layers,state.visibility,input.checked);applyVisibility();});
  return input;
}
function updateCheckboxes() {
  for(const {input,layers} of state.checkboxes)Object.assign(input,checkboxState(layers,state.visibility));
  for(const {button,layers} of state.groupToggles){
    const all=layers.length>0&&layers.every(layer=>visible(layer.id));
    button.disabled=!layers.length;button.textContent=all?'Select none':'Select all';button.setAttribute('aria-pressed',String(all));
  }
  const all=[...state.locations.values()].flatMap(location=>location.layers);
  const selected=all.length>0&&all.every(layer=>visible(layer.id));
  $('layerSelectionToggle').disabled=!all.length;
  $('layerSelectionToggle').textContent=selected?'Select none':'Select all';
  $('layerSelectionToggle').setAttribute('aria-pressed',String(selected));
}
function buildMapLayerControls(){
  const container=$('mapLayerControls');container.replaceChildren();state.groupToggles=[];
  const all=[...state.locations.values()].flatMap(location=>location.layers);
  for(const [source,title] of [['map','Shapefile'],['obj','3D Models']]){
    const group=document.createElement('fieldset');group.append(element('legend','',title));
    const groupLayers=all.filter(layer=>layer.source===source);
    const toggle=element('button','text-button');toggle.type='button';toggle.dataset.source=source;
    state.groupToggles.push({button:toggle,layers:groupLayers});
    toggle.onclick=()=>{
      const enabled=!groupLayers.every(layer=>visible(layer.id));
      state.visibilityIntents.set({source},enabled);
      setLayersVisible(groupLayers,state.visibility,enabled);applyVisibility();
    };
    group.append(toggle);
    for(const [kind,label] of [['point','Points'],['viewshed','Viewsheds'],['frustum','Frustums']]){
      const row=element('label','map-layer-option');
      const layers=all.filter(layer=>layer.source===source&&layer.kind===kind);
      const input=checkbox(layers,title+' '+label,{source,kind});
      row.append(input,document.createTextNode(label));group.append(row);
      if(source==='map'&&kind==='frustum')row.dataset.tooltip='Photo/reference frustums derived from shapefile viewpoints';
    }
    container.append(group);
  }
}
function showMapLayers(show){
  $('mapLayerPanel').hidden=!show;$('mapLayersBtn').setAttribute('aria-expanded',String(show));
}
async function toggleFullscreen(selector){
  const target=document.querySelector(selector);
  try{
    if(document.fullscreenElement===target)await document.exitFullscreen();
    else{if(document.fullscreenElement)await document.exitFullscreen();await target.requestFullscreen();}
  }catch{notify('Fullscreen unavailable.');}
}
function element(tag,className,text) {
  const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=text;return el;
}
function renderTree() {
  const tree=$('layerTree'),scrollTop=tree.scrollTop;
  state.checkboxes=[];const fragment=document.createDocumentFragment();
  const locations=[...state.locations.values()].filter(location=>location.id!=='__unmatched__');
  const names=new Map();
  for(const location of locations)names.set(location.label,(names.get(location.label)||0)+1);
  for(const location of locations){
    const section=element('div','location');section.dataset.location=location.id;
    section.classList.toggle('selected',state.selected===location.id);
    const row=element('div','location-row'),name=element('button','location-name',location.label);name.type='button';
    if(state.selected===location.id)name.setAttribute('aria-current','true');
    if(names.get(location.label)>1||location.label!==location.id)name.append(element('small','',location.id));
    const input=checkbox(location.layers,'All layers for '+location.label+' '+location.id,{locationId:location.id});
    name.onclick=()=>selectView(location.id);row.append(input,name);section.append(row);fragment.append(section);
  }
  tree.replaceChildren(fragment);
  $('zoomToSelection').disabled=!state.locations.has(state.selected);
  $('groundObjLayers').disabled=!state.obj?.loaded.length;
  $('groundObjLayers').checked=state.obj?.grounded??true;
  buildMapLayerControls();filterTree();updateCheckboxes();tree.scrollTop=scrollTop;
}
function filterTree() {
  const query=$('locationSearch').value.trim().toLocaleLowerCase();
  for(const el of $('layerTree').children) {
    const location=state.locations.get(el.dataset.location);
    el.hidden=query!=='' && !(location.label+' '+location.id).toLocaleLowerCase().includes(query);
  }
}
function updateSelectedRow() {
  for(const el of $('layerTree').children)el.classList.toggle('selected',el.dataset.location===state.selected);
}
function showSidebar(show) {
  $('workspace').classList.toggle('sidebar-closed',!show);
  $('layersBtn').setAttribute('aria-expanded',String(show));
}
function storedHeading(id){try{return Number(localStorage.getItem('uos.vistas.heading.'+id)) || 0;}catch{return 0;}}
function saveHeading(id,heading){try{localStorage.setItem('uos.vistas.heading.'+id,String(heading));}catch{/* optional */}}
export async function selectView(id,{moveMap=true}={}) {
  const location=state.locations.get(id);if(!location)return;
  const focusTree=$('layerTree').contains(document.activeElement);
  const serial=++state.selectionSerial;
  state.selected=id;state.direction=null;state.viewer?.clear();
  renderTree();updateSelectedRow();updateAlignment();
  const selectedRow=[...$('layerTree').children].find(el=>el.dataset.location===id);
  if(selectedRow&&!selectedRow.hidden) {
    const tree=$('layerTree'),rowRect=selectedRow.getBoundingClientRect(),treeRect=tree.getBoundingClientRect();
    if(rowRect.top<treeRect.top || rowRect.bottom>treeRect.bottom)tree.scrollTop+=rowRect.top-treeRect.top-24;
    if(focusTree)selectedRow.querySelector('.location-name').focus({preventScroll:true});
  }
  const origin=location.point?.geometry.coordinates.slice(0,2);
  if(moveMap&&state.map) {
    if(origin)state.map.easeTo({center:origin,zoom:Math.max(15.6,state.map.getZoom()),duration:reducedMotion()?0:650});
    else if(location.objects.length)state.obj?.focus();
  }
  updateMapSources();
  if(matchMedia('(max-width: 900px)').matches)showSidebar(false);
  $('panoTitle').textContent=safeLabel(location.label);
  $('panoPlace').textContent=id;
  $('emptyMessage').textContent=location.photo?'Panorama':'No photo';
  $('panoEmpty').classList.toggle('hidden',!!location.photo);
  $('panoHeader').classList.toggle('hidden',!location.photo);
  $('panoFooter').classList.toggle('hidden',!location.photo);
  if(!location.photo)return;
  const offset=storedHeading(id);$('headingValue').textContent=Math.round(offset)+'°';
  $('prevView').disabled=$('nextView').disabled=state.photoViews.length<2;
  try {
    const loaded=await state.viewer.load(location.photo,offset);
    if(serial!==state.selectionSerial || !loaded)return;
    state.direction=state.viewer.currentDirection;updateAlignment();
  } catch(error) {
    if(serial!==state.selectionSerial)return;
    state.direction=null;state.viewer.clear();updateAlignment();
    $('panoEmpty').classList.remove('hidden');$('panoHeader').classList.add('hidden');$('panoFooter').classList.add('hidden');
    $('emptyMessage').textContent='Photo unavailable';notify(error.message);
  }
}
function stepPhoto(delta) {
  const list=state.photoViews;if(!list.length)return;
  const index=list.findIndex(location=>location.id===state.selected);
  selectView(list[(index+delta+list.length)%list.length].id);
}
function updateHeading(delta) {
  if(!state.viewer?.active||!state.selected)return;
  const heading=state.viewer.changeHeading(delta);$('headingValue').textContent=Math.round(heading)+'°';saveHeading(state.selected,heading);
}
function zoomToSelection() {
  const location=state.locations.get(state.selected);
  if(!state.map||!location)return;
  const bounds=new window.maplibregl.LngLatBounds();
  const extend=coordinates=>{
    if(!Array.isArray(coordinates))return;
    if(typeof coordinates[0]==='number') {
      if(coordinates.slice(0,2).length===2&&coordinates.slice(0,2).every(Number.isFinite))bounds.extend(coordinates.slice(0,2));
    } else for(const child of coordinates)extend(child);
  };
  if(location.point)extend(location.point.geometry.coordinates);
  for(const feature of location.cones)extend(feature.geometry.coordinates);
  if(state.obj?.projection)for(const entry of location.objects) {
    const box=new THREE.Box3().setFromObject(entry.model);
    if(box.isEmpty())continue;
    bounds.extend(state.obj.projection.toLngLat(box.min.x,box.min.z));
    bounds.extend(state.obj.projection.toLngLat(box.max.x,box.max.z));
  }
  if(bounds.isEmpty())return;
  state.map.fitBounds(bounds,{padding:50,maxZoom:18,duration:reducedMotion()?0:650});
  if(matchMedia('(max-width: 900px)').matches)showSidebar(false);
}
function fitLocations() {
  if(!state.map)return;
  const bounds=boundsFromFeatures([...state.locations.values()].map(l=>l.point).filter(Boolean));
  const duration=reducedMotion()?0:650;
  if(bounds) {
    const [a,b]=bounds;
    if(a[0]===b[0]&&a[1]===b[1])state.map.easeTo({center:a,zoom:17,duration});
    else state.map.fitBounds(bounds,{padding:60,maxZoom:17,duration});
  } else if(state.obj?.anchorLngLat)state.obj.focus();
  else state.map.easeTo({center:DEFAULT_CENTER,zoom:14.3,duration});
}
async function importSpatial(files) {
  if(!files?.length)return;
  const serial=++state.spatialSerial;feedback('spatialFeedback','Loading…');
  try {
    const collection=await readShapefiles(files);
    if(serial!==state.spatialSerial)return;
    const points=collection.features.filter(f=>f.geometry?.type==='Point' && viewId(f.properties));
    const cones=collection.features.filter(f=>/^(Multi)?Polygon$/.test(f.geometry?.type) && viewId(f.properties));
    if(!points.length&&!cones.length)throw new Error('No named viewpoints or view cones found.');
    ++state.selectionSerial;state.viewer.clear();state.direction=null;state.selected=null;
    if(points.length)state.pointRecords=points;
    if(cones.length)state.cones=cones;
    rebuildLocations();fitLocations();
    $('panoEmpty').classList.remove('hidden');$('panoHeader').classList.add('hidden');$('panoFooter').classList.add('hidden');$('emptyMessage').textContent='Panorama';
    feedback('spatialFeedback','Loaded');
  } catch(error){if(serial===state.spatialSerial){feedback('spatialFeedback',error.message,true);notify(error.message);}}
}
function importPhotos(files) {
  if(!files?.length)return;
  // webkitdirectory supplies recursive File handles. Index paths only: no reads, URLs or decode here.
  const photos=collectPanoramaFiles(files);
  state.photoIndex=createPhotoIndex(photos);refreshPhotoMatches();updateMapSources();
  feedback('photosFeedback',photos.length?'Ready':'No photos found',!photos.length);
  if(state.selected)selectView(state.selected,{moveMap:false});
}
async function importObjFiles(files) {
  if(!files?.length||state.loadingObj)return;
  state.loadingObj=true;feedback('objFeedback','Loading…');
  try {
    const parsed=await readObjEntries(files),reference=parsed.reference || state.reference;
    if(parsed.reference){state.reference=parsed.reference;feedback('referenceFeedback','Loaded');}
    const summary=await state.obj.load(parsed.entries,reference);
    rebuildLocations();feedback('objFeedback',summary.failed.length?'Loaded; some files skipped':'Loaded',!!summary.failed.length);
    if(!state.pointRecords.length)state.obj.focus();
  }catch(error){rebuildLocations();feedback('objFeedback',error.message,true);notify(error.message);}
  finally{state.loadingObj=false;}
}
function setMetroKey() {
  const key=$('metroKeyInput').value.trim();
  if(!key){feedback('metroFeedback','Enter an API key.',true);return;}
  state.metroKey=key;
  try{if($('rememberMetro').checked)localStorage.setItem(METRO_STORAGE,key);else localStorage.removeItem(METRO_STORAGE);}
  catch{notify('Unable to remember the API key.');}
  feedback('metroFeedback','');useBasemap('metro');closeModal('metroModal');
}
function wireUI() {
  buildAppearanceControls();
  $('resetAppearance').onclick=()=>{appearance=defaultAppearance();buildAppearanceControls();updateAppearance();};
  $('importBtn').onclick=()=>openModal('importModal');
  $('metroKeyBtn').onclick=()=>openModal('metroModal');
  for(const el of document.querySelectorAll('[data-close]'))el.onclick=()=>closeModal(el.dataset.close);
  for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',e=>{if(e.target===dialog){const rect=dialog.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)dialog.close();}});
  $('layersBtn').onclick=()=>showSidebar($('layersBtn').getAttribute('aria-expanded')!=='true');
  $('closeLayers').onclick=()=>{showSidebar(false);$('layersBtn').focus();};
  $('sidebarScrim').onclick=()=>showSidebar(false);
  $('locationSearch').oninput=filterTree;
  $('zoomToSelection').onclick=zoomToSelection;
  $('layerSelectionToggle').onclick=()=>{
    const layers=[...state.locations.values()].flatMap(location=>location.layers);
    const enabled=!layers.every(layer=>visible(layer.id));
    state.defaultVisible=enabled;state.visibilityIntents.set({},enabled);
    setLayersVisible(layers,state.visibility,enabled);applyVisibility();
  };
  $('groundObjLayers').onchange=e=>state.obj?.setGrounded(e.target.checked);
  for(const btn of document.querySelectorAll('.basemap-btn'))btn.onclick=()=>useBasemap(btn.dataset.base);
  $('fitBtn').onclick=fitLocations;
  $('mapFullscreen').onclick=()=>toggleFullscreen('.map-pane');
  $('mapLayersBtn').onclick=()=>showMapLayers($('mapLayerPanel').hidden);
  document.addEventListener('pointerdown',event=>{if(!event.target.closest('.map-layer-widget'))showMapLayers(false);});
  document.addEventListener('fullscreenchange',()=>{
    for(const [id,selector,label] of [['mapFullscreen','.map-pane','map'],['panoFullscreen','.pano-pane','panorama']]){
      const active=document.fullscreenElement===document.querySelector(selector),button=$(id);
      button.setAttribute('aria-pressed',String(active));
      button.dataset.tooltip=active?'Exit fullscreen '+label:'Fullscreen '+label;button.setAttribute('aria-label',button.dataset.tooltip);
    }
    state.map?.resize();state.viewer?.resize();
  });
  $('pitchBtn').onclick=()=>{const pitch=state.map.getPitch()>10?0:56;state.map.easeTo({pitch,duration:reducedMotion()?0:500});};
  $('spatialInput').onchange=e=>importSpatial(e.target.files);
  $('photosInput').onchange=e=>importPhotos(e.target.files);
  $('objInput').onchange=e=>importObjFiles(e.target.files);
  $('objFolderInput').onchange=e=>importObjFiles(e.target.files);
  $('referenceInput').onchange=async e=>{
    const file=e.target.files?.[0];if(!file)return;
    try {
      const reference=JSON.parse(await file.text());
      if(!reference || Array.isArray(reference) || typeof reference!=='object')throw new Error('Invalid reference JSON.');
      if(reference.source_crs && reference.source_crs!=='EPSG:7854')throw new Error('Unsupported reference CRS.');
      state.reference=reference;feedback('referenceFeedback','Loaded');
    }catch(error){feedback('referenceFeedback',error.message,true);notify(error.message);}
  };
  $('applyMetro').onclick=setMetroKey;
  $('forgetMetro').onclick=()=>{try{localStorage.removeItem(METRO_STORAGE);}catch{/* optional */}state.metroKey='';$('metroKeyInput').value='';$('rememberMetro').checked=false;feedback('metroFeedback','');if(state.base==='metro')useBasemap('aerial');};
  $('prevView').onclick=()=>stepPhoto(-1);$('nextView').onclick=()=>stepPhoto(1);
  $('headingMinus').onclick=()=>updateHeading(-state.headingStep);$('headingPlus').onclick=()=>updateHeading(state.headingStep);
  $('headingStepToggle').onclick=()=>{
    state.headingStep=state.headingStep===5?1:5;
    const step=state.headingStep,next=step===5?1:5,unit=step===1?'degree':'degrees';
    $('headingStepToggle').textContent=step+'°';
    $('headingStepToggle').dataset.tooltip='Heading step: '+step+'°. Switch to '+next+'°.';
    $('headingStepToggle').setAttribute('aria-label','Heading step: '+step+' '+unit+'. Switch to '+next+' '+(next===1?'degree':'degrees')+'.');
    for(const [id,sign,word] of [['headingMinus','−','minus'],['headingPlus','+','plus']]) {
      $(id).dataset.tooltip='Calibrate heading '+sign+step+'°';
      $(id).setAttribute('aria-label','Calibrate heading '+word+' '+step+' '+unit);
    }
  };
  $('resetView').onclick=()=>state.viewer.resetView();
  $('photoCompassToggle').onclick=()=>{
    state.compassShown=!state.compassShown;
    const label=(state.compassShown?'Hide':'Show')+' centre compass line';
    $('photoCompassToggle').setAttribute('aria-pressed',String(state.compassShown));
    $('photoCompassToggle').setAttribute('aria-label',label);$('photoCompassToggle').dataset.tooltip=label;
    updatePhotoCompass();
  };
  $('panoFullscreen').onclick=()=>toggleFullscreen('.pano-pane');
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&!$('mapLayerPanel').hidden){showMapLayers(false);$('mapLayersBtn').focus();e.preventDefault();return;}
    if(document.querySelector('dialog[open]') || e.target.closest('input,textarea,select,[contenteditable=true]'))return;
    const actions={ArrowLeft:()=>state.viewer.rotate(-6),ArrowRight:()=>state.viewer.rotate(6),ArrowUp:()=>state.viewer.rotate(0,5),ArrowDown:()=>state.viewer.rotate(0,-5),Home:()=>state.viewer.resetView(),'[':()=>stepPhoto(-1),']':()=>stepPhoto(1),q:()=>updateHeading(-state.headingStep),e:()=>updateHeading(state.headingStep)};
    const action=actions[e.key];if(action){e.preventDefault();action();}
    if(e.key==='Escape')showSidebar(false);
  });
}
function bootstrap() {
  wireUI();renderTree();
  if(matchMedia('(max-width: 900px)').matches)showSidebar(false);
  try{state.metroKey=localStorage.getItem(METRO_STORAGE)||'';$('rememberMetro').checked=!!state.metroKey;}catch{/* optional */}
  registerCRS();
  if(!window.maplibregl)throw new Error('Map unavailable. Check your connection and reload.');
  state.map=new window.maplibregl.Map({container:'map',style:basemapStyle('aerial'),center:DEFAULT_CENTER,zoom:14.2,pitch:0,attributionControl:true,antialias:true,maxPitch:75});
  state.map.addControl(new window.maplibregl.NavigationControl({showCompass:true,showZoom:true}),'bottom-right');
  state.obj=new ObjMapLayer(state.map,notify);
  state.viewer=new PanoramaViewer($('panoCanvas'),{
    onLoading:loading=>$('panoLoading').classList.toggle('hidden',!loading),
    onDirection:direction=>{state.direction=direction;updateAlignment();}
  });
  state.map.on('style.load',addMapLayers);
  state.map.on('click','vistas-points',e=>{const feature=e.features?.[0];if(feature)selectView(viewId(feature.properties));});
  state.map.on('mouseenter','vistas-points',()=>state.map.getCanvas().style.cursor='pointer');
  state.map.on('mouseleave','vistas-points',()=>state.map.getCanvas().style.cursor='');
  state.map.on('pitch',()=>{
    const active=state.map.getPitch()>10,button=$('pitchBtn'),mode=active?'3D':'2D',next=active?'2D':'3D';
    button.textContent=mode;button.setAttribute('aria-pressed',String(active));
    button.dataset.tooltip='Map view: '+mode+'. Switch to '+next+'.';button.setAttribute('aria-label',button.dataset.tooltip);
  });
  state.map.on('error',e=>{if(state.base==='metro'&&/401|403/.test(String(e.error?.message||'')))notify('MetroMap rejected the API key.');});
  const resize=new ResizeObserver(()=>state.map.resize());resize.observe(document.querySelector('.map-pane'));
  window.addEventListener('pagehide',event=>{if(event.persisted)return;state.viewer.dispose();resize.disconnect();state.obj.clear();state.map.remove();});
  document.documentElement.dataset.appState='ready';
}
window.addEventListener('unhandledrejection',event=>notify(event.reason?.message || 'Unable to complete the action.'));
const disposeTooltips=installTooltips();
window.addEventListener('pagehide',event=>{if(!event.persisted)disposeTooltips();});
try{bootstrap();}catch(error){document.documentElement.dataset.appState='error';notify(error.message);console.error(error);}
