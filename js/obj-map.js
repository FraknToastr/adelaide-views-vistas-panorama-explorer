import * as THREE from 'three';
import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';
import {CRS,classifyObj,normalisePath,parseFirstObjVertex,getObjCoordinateFrame,projectedVertex,rebaseObjForMap} from './core.js';
import {createObjProjection} from './geo.js';

const COLOURS={Points:0x346b53,Viewsheds:0x8c9d62,Frustums:0xb0823c,Other:0x6d7e83};
const MAX_INTERVALS=32;

// Only associate files that explicitly encode an ID. Unnamed exports stay unmatched.
function locationId(name){
  const parts=String(name).replace(/\\/g,'/').split('/').pop().replace(/\.obj$/i,'').split('__');
  return parts.length>1 && /^(?:points?|viewsheds?|frustums?)$/i.test(parts.at(-1)) ? parts.at(-2).trim() : parts.length===2?parts[1].trim():'';
}

// v1.3.1 combines categories in one location OBJ; v1.3.2 exports each separately.
function modelParts(model,name){
  const type=classifyObj(name);
  if(type!=='Other'||!locationId(name))return [{model,type,name,id:normalisePath(name)}];
  const children=[];
  model.traverse(child=>{if(child.geometry&&(child.isMesh||child.isPoints||child.isLine))children.push(child);});
  if(!children.some(child=>classifyObj(child.name)!=='Other'))return [{model,type,name,id:normalisePath(name)}];
  model.updateMatrixWorld(true);
  const groups=new Map();
  for(const child of children){
    const kind=classifyObj(child.name);
    if(!groups.has(kind))groups.set(kind,new THREE.Group());
    groups.get(kind).attach(child);
  }
  return [...groups].map(([kind,group])=>({
    model:group,type:kind,name:name+' · '+kind,id:normalisePath(name)+'#'+kind.toLowerCase()
  }));
}

function disposeObject(object){
  const geometries=new Set(),materials=new Set();
  object.traverse(child=>{
    if(child.geometry)geometries.add(child.geometry);
    for(const material of [child.material].flat())if(material)materials.add(material);
  });
  // Highlight meshes share their base mesh's geometry.
  for(const geometry of geometries)geometry.dispose();
  for(const material of materials)material.dispose();
}

export class ObjMapLayer {
  constructor(map,notify=()=>{}){
    this.map=map;this.notify=notify;
    this.scene=new THREE.Scene();
    this.camera=new THREE.Camera();
    this.group=new THREE.Group();this.scene.add(this.group);
    this.loaded=[];this.reference=null;this.anchorEN=null;this.anchorLngLat=null;
    this.grounded=true;this.projection=null;
    this.visibility={Points:true,Viewsheds:true,Frustums:true,Other:true};
    this.entryVisibility=new Map();this.visibleCount=0;this.loadSerial=0;
    this.renderer=null;this.alignment=null;this.alignmentOrigin=null;
    this.anchorMatrix=new THREE.Matrix4();
    this.scaleMatrix=new THREE.Matrix4();
    this.rotateMatrix=new THREE.Matrix4().makeRotationX(Math.PI/2);
    this.alignmentUniforms={
      originMap:{value:new THREE.Vector2()},
      cameraSector:{value:new THREE.Vector3(0,1,1)},
      sourceCount:{value:0},
      sourceSectors:{value:Array.from({length:MAX_INTERVALS},()=>new THREE.Vector3())}
    };
    this.layer={
      id:'vistas-3d-models',type:'custom',renderingMode:'3d',
      onAdd:(map,gl)=>{
        this.renderer=new THREE.WebGLRenderer({canvas:map.getCanvas(),context:gl});
        this.renderer.autoClear=false;
      },
      // Dispose events release the old renderer's GPU buffers/programs. Geometry
      // arrays and scene objects remain reusable when the next style attaches.
      onRemove:()=>{
        for(const entry of this.loaded)disposeObject(entry.model);
        this.renderer?.dispose();this.renderer=null;
      },
      render:(gl,matrix)=>{
        if(!this.renderer||!this.anchorLngLat||!this.visibleCount)return;
        this.camera.projectionMatrix.fromArray(matrix).multiply(this.anchorMatrix);
        this.renderer.resetState();
        this.renderer.render(this.scene,this.camera);
        this.renderer.resetState();
      }
    };
  }
  _cacheAnchor(){
    const {anchor:coord,scale}=this.projection;
    this.anchorMatrix.makeTranslation(coord.x,coord.y,coord.z);
    this.scaleMatrix.makeScale(scale,scale,scale);
    this.anchorMatrix.multiply(this.scaleMatrix).multiply(this.rotateMatrix);
  }
  attach(){
    if((!this.map.getStyle?.()&&!this.map.isStyleLoaded())||!this.loaded.length||this.map.getLayer(this.layer.id))return;
    this.map.addLayer(this.layer,this.map.getLayer('vistas-points')?'vistas-points':undefined);
  }
  _updateVisibility(){
    this.visibleCount=0;
    for(const entry of this.loaded){
      entry.model.visible=this.entryVisibility.has(entry.id)?this.entryVisibility.get(entry.id):this.visibility[entry.type]!==false;
      if(entry.model.visible)this.visibleCount++;
      for(const highlight of entry.highlights)highlight.visible=!!(this.alignment?.active && entry.viewId && entry.viewId===this.alignment.viewId);
    }
  }
  setVisible(type,enabled){
    this.visibility[type]=!!enabled;
    for(const entry of this.loaded)if(entry.type===type)this.entryVisibility.set(entry.id,!!enabled);
    this._updateVisibility();this.map.triggerRepaint();
  }
  setEntryVisible(id,enabled){
    this.entryVisibility.set(id,!!enabled);
    this._updateVisibility();this.map.triggerRepaint();
  }
  applyEntryVisibility(values){
    for(const [id,enabled] of values instanceof Map?values:Object.entries(values))this.entryVisibility.set(id,!!enabled);
    this._updateVisibility();this.map.triggerRepaint();
  }
  setGrounded(enabled){
    this.grounded=!!enabled;
    this._applyGrounding();this.map.triggerRepaint();
  }
  setAppearance(value){
    this.appearance=value;
    for(const entry of this.loaded)this._applyAppearance(entry);
    this.map.triggerRepaint();
  }
  _applyAppearance(entry){
    if(!this.appearance)return;
    const highlights=new Set(entry.highlights);
    entry.model.traverse(child=>{
      if(!child.material||highlights.has(child))return;
const part=(child.isPoints||entry.type==='Points')?'point':child.isLine?'line':'fill',value=this.appearance[part];
      for(const material of [child.material].flat()){
        material.color.set(value.color);
material.opacity=1-value.transparency/100;
        material.transparent=material.opacity<1;
        material.depthWrite=material.opacity===1;
        material.needsUpdate=true;
      }
    });
  }
  _applyGrounding(){
    // Cache source bounds at import time. Never measure already-translated models
    // or depend on visibility when finding a location's shared ground baseline.
    const baselines=new Map();
    const key=entry=>entry.viewId?'location:'+entry.viewId:'file:'+entry.id;
    for(const entry of this.loaded){
      const id=key(entry);
      baselines.set(id,Math.min(baselines.get(id)??Infinity,entry.sourceMinHeight));
    }
    for(const entry of this.loaded){
      entry.groundOffset=this.grounded?-baselines.get(key(entry)):0;
      // Local map axes are east,height,north: only Y changes during grounding.
      entry.model.position.y=entry.sourcePositionY+entry.groundOffset;
      entry.model.updateMatrixWorld(true);
    }
  }
  setAlignment(alignment){
    this.alignment=null;
    if(alignment?.active && this.anchorEN && alignment.origin?.length===2 && Number.isFinite(alignment.heading) && Number.isFinite(alignment.horizontalFov)){
      try{
        const previous=this.alignmentOrigin;
        const projected=previous && previous.lng===alignment.origin[0] && previous.lat===alignment.origin[1]
          ? previous.projected : this.projection.fromLngLat(alignment.origin);
        const [e,n]=projected;
        if(Number.isFinite(e)&&Number.isFinite(n)){
          this.alignmentOrigin={lng:alignment.origin[0],lat:alignment.origin[1],projected};
          const uniforms=this.alignmentUniforms;
          uniforms.originMap.value.set(e,n);
          this._sector(uniforms.cameraSector.value,alignment.heading,alignment.horizontalFov);
          const intervals=(alignment.intervals||[]).filter(s=>Number.isFinite(s.heading)&&Number.isFinite(s.horizontalFov)&&s.horizontalFov>0);
          // More intervals than the shader supports are merged into the unmasked
          // camera sector rather than silently hiding valid source directions.
          uniforms.sourceCount.value=intervals.length<=MAX_INTERVALS?intervals.length:0;
          for(let i=0;i<uniforms.sourceCount.value;i++)this._sector(uniforms.sourceSectors.value[i],intervals[i].heading,intervals[i].horizontalFov);
          this.alignment=alignment;
        }
      }catch{/* A missing projection is handled by the main import flow. */}
    }
    this._updateVisibility();this.map.triggerRepaint();
  }
  _sector(target,heading,fov){
    const radians=heading*Math.PI/180;
    target.set(Math.sin(radians),Math.cos(radians),Math.cos(Math.max(0,Math.min(360,fov))*Math.PI/360));
  }
  _highlightMaterial(){
    return new THREE.ShaderMaterial({
      uniforms:this.alignmentUniforms,
      side:THREE.DoubleSide,transparent:true,depthWrite:false,
      polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1,
      vertexShader:
        'varying vec2 surfaceMap;\n'+
        'void main(){\n'+
        '  vec4 world=modelMatrix*vec4(position,1.0);\n'+
        '  surfaceMap=world.xz;\n'+
        '  gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);\n'+
        '}',
      fragmentShader:
        'uniform vec2 originMap;\n'+
        'uniform vec3 cameraSector;\n'+
        'uniform int sourceCount;\n'+
        'uniform vec3 sourceSectors['+MAX_INTERVALS+'];\n'+
        'varying vec2 surfaceMap;\n'+
        'void main(){\n'+
        '  vec2 delta=surfaceMap-originMap;\n'+
        '  float distanceM=length(delta);\n'+
        '  if(distanceM<0.01)discard;\n'+
        '  vec2 direction=delta/distanceM;\n'+
        '  if(dot(direction,cameraSector.xy)<cameraSector.z)discard;\n'+
        '  bool inside=sourceCount==0;\n'+
        '  for(int i=0;i<'+MAX_INTERVALS+';i++){\n'+
        '    if(i>=sourceCount)break;\n'+
        '    if(dot(direction,sourceSectors[i].xy)>=sourceSectors[i].z)inside=true;\n'+
        '  }\n'+
        '  if(!inside)discard;\n'+
        '  gl_FragColor=vec4(0.22,0.48,0.32,0.62);\n'+
        '  #include <tonemapping_fragment>\n'+
        '  #include <colorspace_fragment>\n'+
        '}'
    });
  }
  clear(){
    this.loadSerial++;
    for(const entry of this.loaded)disposeObject(entry.model);
    this.group.clear();this.loaded=[];this.visibleCount=0;
    this.anchorEN=null;this.anchorLngLat=null;this.projection=null;this.alignment=null;this.alignmentOrigin=null;
    this.map.triggerRepaint();
  }
  async load(entries,reference,progress=()=>{}){
    if(reference?.source_crs && reference.source_crs!==CRS)throw new Error('OBJ reference CRS '+reference.source_crs+' is not supported. Expected '+CRS+'.');
    this.clear();this.reference=reference||null;
    const serial=this.loadSerial,loader=new OBJLoader();
    let vertices=0;const fail=[];
    for(const [i,item] of entries.entries()){
      let model=null,material=null;
      const roots=[],pending=[],oldMaterials=new Set();
      try{
        progress('Parsing '+(i+1)+'/'+entries.length);
        if(item.bytes>110*1024*1024)throw new Error('Individual OBJ exceeds 110 MB preview limit.');
        const text=await item.readText();
        if(serial!==this.loadSerial)return {loaded:0,vertices:0,failed:[],cancelled:true};
        if(text.length>110*1024*1024)throw new Error('Individual OBJ exceeds 110 MB preview limit.');
        const first=parseFirstObjVertex(text);
        const frame=getObjCoordinateFrame(first,this.reference);
        const [e,n]=projectedVertex(first,frame,this.reference);
        const anchor=this.anchorEN||[e,n];
        const projection=this.projection||createObjProjection(anchor);
        const transformed=rebaseObjForMap(text,frame,this.reference,projection.project);
        model=loader.parse(transformed.text);roots.push(model);
        const parts=modelParts(model,item.name);
        for(const part of parts)if(part.model!==model)roots.push(part.model);
        for(const part of parts){
          model=part.model;
          const type=part.type,transparent=type==='Frustums'||type==='Viewsheds';
          const opacity=transparent ? .24 : 1;
          const renderables=[],meshes=[],highlights=[];
          model.traverse(child=>{
            if(!child.geometry || !(child.isMesh||child.isPoints||child.isLine))return;
            const geometry=child.geometry;
            if(child.isMesh)geometry.computeVertexNormals();
            geometry.computeBoundingBox();geometry.computeBoundingSphere();
            if(!Number.isFinite(geometry.boundingSphere?.radius))throw new Error('OBJ contains invalid geometry.');
            renderables.push(child);
          });
          if(!renderables.length)throw new Error('OBJ has no renderable geometry.');
          const sourceMinHeight=new THREE.Box3().setFromObject(model).min.y;
          if(!Number.isFinite(sourceMinHeight))throw new Error('OBJ contains invalid height bounds.');
          material=new THREE.MeshBasicMaterial({color:COLOURS[type],side:THREE.DoubleSide,transparent,opacity,depthWrite:!transparent});
          for(const child of renderables){
            for(const old of [child.material].flat())if(old)oldMaterials.add(old);
            if(child.isMesh){child.material=material;meshes.push(child);}
            else if(child.isPoints)child.material=new THREE.PointsMaterial({color:COLOURS[type],size:3,sizeAttenuation:false,transparent,opacity,depthWrite:!transparent});
            else if(child.isLine)child.material=new THREE.LineBasicMaterial({color:COLOURS[type],transparent,opacity,depthWrite:!transparent});
            child.frustumCulled=true;
          }
          for(const old of oldMaterials)old.dispose();
          oldMaterials.clear();
          if(!meshes.length)material.dispose();
          for(const mesh of meshes){
            const edges=new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,25),new THREE.LineBasicMaterial({color:0x203e34,depthWrite:false}));
            edges.renderOrder=1;mesh.add(edges);
          }
          if(type==='Viewsheds'&&meshes.length){
            const overlayMaterial=this._highlightMaterial();
            for(const mesh of meshes){
              const highlight=new THREE.Mesh(mesh.geometry,overlayMaterial);
              highlight.visible=false;highlight.renderOrder=2;
              mesh.add(highlight);highlights.push(highlight);
            }
          }
          const entry={id:part.id,name:part.name,sourceName:item.name,type,viewId:locationId(item.name),model,material,highlights,
            vertices:renderables.reduce((count,child)=>count+(child.geometry.attributes?.position?.count||0),0)||transformed.vertexCount,
            sourceMinHeight,sourcePositionY:model.position.y,groundOffset:0};
          this._applyAppearance(entry);pending.push(entry);
        }
        if(!this.anchorEN){
          this.anchorEN=anchor;this.projection=projection;this.anchorLngLat=projection.anchorLngLat;this._cacheAnchor();
        }
        for(const entry of pending){this.loaded.push(entry);this.group.add(entry.model);}
        vertices+=transformed.vertexCount;
      }catch(error){
        for(const old of oldMaterials)old.dispose();
        for(const root of roots)disposeObject(root);
        if(!roots.length)material?.dispose();
        fail.push(item.name+': '+error.message);
      }
      // Yield between files so location controls and cancellation remain usable.
      if(i%4===3)await new Promise(resolve=>setTimeout(resolve,0));
      if(serial!==this.loadSerial)return {loaded:0,vertices:0,failed:[],cancelled:true};
    }
    if(!this.loaded.length)throw new Error('No OBJ geometry loaded. '+fail.slice(0,2).join('; '));
    this._applyGrounding();
    this._updateVisibility();this.attach();this.map.triggerRepaint();
    if(fail.length)this.notify(fail.length+' OBJ file(s) skipped. '+fail[0],true);
    return {loaded:this.loaded.length,vertices,failed:fail};
  }
  focus(){
    if(!this.anchorLngLat)return;
    this.map.flyTo({center:this.anchorLngLat,zoom:17.4,pitch:50,bearing:-15,duration:1100});
  }
  dispose(){
    this.clear();
    if(this.map.getLayer(this.layer.id))this.map.removeLayer(this.layer.id);
    else{this.renderer?.dispose();this.renderer=null;}
    this.entryVisibility.clear();
  }
}
