import * as THREE from 'three';
import {clamp,wrapDegrees} from './core.js';

export function horizontalFieldOfView(verticalFov,aspect) {
  return THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(verticalFov)/2)*aspect));
}

function textureDimensions(width,height,limit) {
  const scale=Math.min(1,limit/Math.max(width,height));
  return [Math.max(1,Math.floor(width*scale)),Math.max(1,Math.floor(height*scale))];
}

/** One decoded panorama at a time; browsing folders never reaches this class. */
export class PanoramaViewer {
  constructor(element,{onDirection=()=>{},onLoading=()=>{}}={}) {
    this.host=element;
    this.onDirection=onDirection;this.onLoading=onLoading;
    this.yaw=0;this.pitch=0;this.fov=73;this.offset=0;
    this.active=false;this.dragging=false;this.disposed=false;
    this.serial=0;this.frame=null;this.pending=null;this.decoding=null;
    this.texture=null;this.imageSource=null;
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(this.fov,1,.1,2000);
    this.projectionFov=this.fov;this.projectionAspect=1;
    this.directionVector=new THREE.Vector3();
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
    this.renderer.setClearColor('#243c32');
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.domElement.style.display='none';
    this.host.appendChild(this.renderer.domElement);
    this.geometry=new THREE.SphereGeometry(450,76,48);
    this.geometry.scale(-1,1,1);
    this.material=new THREE.MeshBasicMaterial({side:THREE.FrontSide});
    this.mesh=new THREE.Mesh(this.geometry,this.material);
    this.mesh.visible=false;this.scene.add(this.mesh);
    this.events=new AbortController();
    this._bind();
    this.resizeObserver=new ResizeObserver(()=>this.resize());
    this.resizeObserver.observe(this.host);
    this.resize();
  }
  _bind() {
    const canvas=this.renderer.domElement,signal=this.events.signal;
    canvas.addEventListener('pointerdown',e=>{
      if(!this.active)return;
      this.dragging=true;this.prevX=e.clientX;this.prevY=e.clientY;canvas.setPointerCapture(e.pointerId);
    },{signal});
    canvas.addEventListener('pointermove',e=>{
      if(!this.dragging)return;
      const dx=e.clientX-this.prevX,dy=e.clientY-this.prevY;
      this.prevX=e.clientX;this.prevY=e.clientY;
      this.yaw=wrapDegrees(this.yaw-dx*.16);this.pitch=clamp(this.pitch+dy*.14,-87,87);this.render();
    },{signal});
    const end=()=>{this.dragging=false;};
    canvas.addEventListener('pointerup',end,{signal});canvas.addEventListener('pointercancel',end,{signal});
    canvas.addEventListener('lostpointercapture',end,{signal});
    canvas.addEventListener('wheel',e=>{
      if(!this.active)return;
      e.preventDefault();this.fov=clamp(this.fov+Math.sign(e.deltaY)*3,30,105);this.render();
    },{passive:false,signal});
    canvas.addEventListener('dblclick',()=>this.resetView(),{signal});
  }
  load(file,offset=0) {
    if(this.disposed)return Promise.reject(new Error('The panorama viewer has been disposed.'));
    const serial=++this.serial;
    // A stale decode may finish, but it never retains a texture or updates the UI.
    this.pending?.resolve(false);this.decoding?.resolve(false);
    this._releaseImage();
    this.onLoading(true);
    return new Promise((resolve,reject)=>{
      this.pending={file,offset,serial,resolve,reject};
      this._drain();
    });
  }
  async _drain() {
    if(this.decoding||this.disposed)return;
    while(this.pending&&!this.disposed) {
      const request=this.pending;this.pending=null;this.decoding=request;
      let source=null;
      try {
        source=await this._decode(request.file,request.serial);
        if(!source||request.serial!==this.serial||this.disposed) {
          source?.close();request.resolve(false);continue;
        }
        const texture=new THREE.Texture(source.image);
        texture.colorSpace=THREE.SRGBColorSpace;
        texture.flipY=!source.bitmap;
        texture.needsUpdate=true;
        this.imageSource=source;this.texture=texture;source=null;
        this.material.map=texture;this.material.needsUpdate=true;this.mesh.visible=true;
        this.offset=wrapDegrees(Number(request.offset)||0);this.yaw=0;this.pitch=0;this.fov=73;
        this.active=true;this.renderer.domElement.style.display='block';
        this.resize();request.resolve(true);
      } catch(error) {
        source?.close();
        if(request.serial===this.serial&&!this.disposed) {
          this._releaseImage();request.reject(new Error(`Could not decode ${request.file.name}: ${error.message}`));
        } else request.resolve(false);
      } finally {
        if(request.serial===this.serial&&!this.disposed)this.onLoading(false);
        this.decoding=null;
      }
    }
  }
  async _decode(file,serial) {
    const limit=this.renderer.capabilities.maxTextureSize;
    if(typeof createImageBitmap==='function') {
      let bitmap;
      try {
        // ImageBitmap ignores Texture.flipY, so prepare the upload orientation here.
        bitmap=await createImageBitmap(file,{imageOrientation:'flipY',premultiplyAlpha:'none'});
      } catch(error) {
        if(serial!==this.serial||this.disposed)return null;
        return this._decodeImage(file,limit,serial);
      }
      if(serial!==this.serial||this.disposed){bitmap.close();return null;}
      const [width,height]=textureDimensions(bitmap.width,bitmap.height,limit);
      if(width!==bitmap.width||height!==bitmap.height) {
        try {
          const resized=await createImageBitmap(bitmap,{resizeWidth:width,resizeHeight:height,resizeQuality:'high',imageOrientation:'none',premultiplyAlpha:'none'});
          bitmap.close();bitmap=resized;
        } catch(error) {bitmap.close();throw error;}
      }
      return {image:bitmap,bitmap:true,close:()=>bitmap.close()};
    }
    return this._decodeImage(file,limit,serial);
  }
  async _decodeImage(file,limit,serial) {
    const url=URL.createObjectURL(file),image=new Image();image.decoding='async';
    try {
      await new Promise((resolve,reject)=>{
        image.onload=resolve;image.onerror=()=>reject(new Error('Unsupported or damaged image.'));image.src=url;
      });
      if(serial!==this.serial||this.disposed){image.removeAttribute('src');return null;}
      const [width,height]=textureDimensions(image.naturalWidth,image.naturalHeight,limit);
      if(width===image.naturalWidth&&height===image.naturalHeight) {
        return {image,bitmap:false,close:()=>image.removeAttribute('src')};
      }
      const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
      const context=canvas.getContext('2d');
      if(!context)throw new Error('Unable to resize this panorama for the graphics device.');
      context.imageSmoothingEnabled=true;context.imageSmoothingQuality='high';
      context.drawImage(image,0,0,width,height);image.removeAttribute('src');
      return {image:canvas,bitmap:false,close:()=>{canvas.width=canvas.height=1;}};
    } catch(error) {image.removeAttribute('src');throw error;}
    finally {image.onload=image.onerror=null;URL.revokeObjectURL(url);}
  }
  _releaseImage() {
    this.active=false;this.dragging=false;
    if(this.frame!==null){cancelAnimationFrame(this.frame);this.frame=null;}
    this.material.map=null;this.material.needsUpdate=true;this.mesh.visible=false;
    this.texture?.dispose();this.texture=null;
    this.imageSource?.close();this.imageSource=null;
    this.renderer.domElement.style.display='none';
  }
  clear() {
    this.serial++;
    this.pending?.resolve(false);this.pending=null;this.decoding?.resolve(false);
    this._releaseImage();this.onLoading(false);
  }
  setViewToNorth(){return this.changeHeading(-this.currentDirection.heading);}
  changeHeading(delta) {this.offset=wrapDegrees(this.offset+delta);this.render();return this.offset;}
  resetView(){this.yaw=0;this.pitch=0;this.fov=73;this.render();}
  rotate(deltaYaw,deltaPitch=0){this.yaw=wrapDegrees(this.yaw+deltaYaw);this.pitch=clamp(this.pitch+deltaPitch,-87,87);this.render();}
  get currentDirection() {
    return {heading:wrapDegrees(this.yaw+this.offset),horizontalFov:horizontalFieldOfView(this.fov,this.camera.aspect),pitch:this.pitch};
  }
  resize() {
    if(this.disposed)return;
    const width=Math.max(1,this.host.clientWidth),height=Math.max(1,this.host.clientHeight);
    this.camera.aspect=width/height;
    this.renderer.setSize(width,height,false);this.render();
  }
  render() {
    if(!this.active||this.disposed||this.frame!==null)return;
    this.frame=requestAnimationFrame(()=>{
      this.frame=null;
      if(!this.active||this.disposed)return;
      if(this.projectionFov!==this.fov||this.projectionAspect!==this.camera.aspect) {
        this.camera.fov=this.fov;this.camera.updateProjectionMatrix();
        this.projectionFov=this.fov;this.projectionAspect=this.camera.aspect;
      }
      const yaw=THREE.MathUtils.degToRad(this.yaw),pitch=THREE.MathUtils.degToRad(this.pitch);
      this.directionVector.set(Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch));
      // Calibration changes the world bearing, not which image pixels are in view.
      this.camera.lookAt(this.directionVector);
      this.renderer.render(this.scene,this.camera);this.onDirection(this.currentDirection);
    });
  }
  dispose() {
    if(this.disposed)return;
    this.clear();this.disposed=true;this.events.abort();this.resizeObserver.disconnect();
    this.geometry.dispose();this.material.dispose();this.renderer.dispose();this.renderer.domElement.remove();
  }
}
