// Microsoft Fluent UI System Icons: Attach 20 Regular (MIT).
// Source and license: THIRD_PARTY_NOTICES.md.
const ATTACH_PATH="M4.82816 10.4848L10.485 4.8279C11.6566 3.65633 13.5561 3.65633 14.7277 4.8279C15.8992 5.99947 15.8992 7.89897 14.7277 9.07054L8.01014 15.7881C7.42436 16.3738 6.47461 16.3738 5.88882 15.7881C5.30304 15.2023 5.30304 14.2525 5.88882 13.6667L11.8992 7.65633C12.0945 7.46106 12.0945 7.14448 11.8992 6.94922C11.704 6.75396 11.3874 6.75396 11.1921 6.94922L5.18172 12.9596C4.20541 13.9359 4.20541 15.5189 5.18172 16.4952C6.15803 17.4715 7.74094 17.4715 8.71725 16.4952L15.4348 9.77765C16.9969 8.21555 16.9969 5.68289 15.4348 4.12079C13.8727 2.55869 11.34 2.55869 9.77791 4.12079L4.12106 9.77765C3.92579 9.97291 3.92579 10.2895 4.12106 10.4848C4.31632 10.68 4.6329 10.68 4.82816 10.4848Z";
let attachmentPath;

export class MapLabels {
  constructor(map){this.map=map;this.cache=new Map();this.sequence=0;}
  image(name,photo){
    const key=JSON.stringify([name,photo]);let sprite=this.cache.get(key);
    if(!sprite){
      const canvas=document.createElement('canvas'),scale=2,context=canvas.getContext('2d');
      context.font='600 12px "Segoe UI", sans-serif';
      let text=String(name).slice(0,160);
      while(text.length&&context.measureText(text+'…').width>320)text=text.slice(0,-1);
      if(text!==name)text+='…';
      const width=Math.ceil(context.measureText(text).width)+14+(photo?19:0),height=25;
      canvas.width=width*scale;canvas.height=height*scale;context.scale(scale,scale);
      context.fillStyle='#fffdf7';context.fillRect(0,0,width,height);
      context.strokeStyle='#203e34';context.lineWidth=1;context.strokeRect(.5,.5,width-1,height-1);
      context.font='600 12px "Segoe UI", sans-serif';context.fillStyle='#203e34';context.textBaseline='middle';context.fillText(text,7,height/2);
      if(photo){
        attachmentPath??=new Path2D(ATTACH_PATH);
        context.save();context.translate(width-21,(height-16)/2);context.scale(.8,.8);
        context.fillStyle='#203e34';context.fill(attachmentPath);context.restore();
      }
      sprite={id:'vistas-label-'+(++this.sequence),data:context.getImageData(0,0,canvas.width,canvas.height)};this.cache.set(key,sprite);
    }
    if(!this.map.hasImage(sprite.id))this.map.addImage(sprite.id,sprite.data,{pixelRatio:2});
    return sprite.id;
  }
  update(points,enabled){
    if(!this.map.getSource('vistas-labels'))return;
    const used=new Set();
    const features=points.map(({id,name,photo,coordinates})=>{
      const image=this.image(name,photo);used.add(image);
      return {type:'Feature',geometry:{type:'Point',coordinates},properties:{VIEW_ID:id,image}};
    });
    this.map.getSource('vistas-labels').setData({type:'FeatureCollection',features});
    if(this.map.getLayer('vistas-labels'))this.map.setLayoutProperty('vistas-labels','visibility',enabled?'visible':'none');
    for(const [key,sprite] of this.cache)if(!used.has(sprite.id)){if(this.map.hasImage(sprite.id))this.map.removeImage(sprite.id);this.cache.delete(key);}
  }
  dispose(){for(const sprite of this.cache.values())if(this.map.hasImage(sprite.id))this.map.removeImage(sprite.id);this.cache.clear();}
}
