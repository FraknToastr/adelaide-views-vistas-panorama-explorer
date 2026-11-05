export function defaultAppearance(){return {
obj:{point:{color:'#ffff00',transparency:0},line:{color:'#203e34',transparency:0},fill:{color:'#8c9d62',transparency:76}},
shape:{point:{color:'#ffff00',transparency:0},line:{color:'#f50083',transparency:2},fill:{color:'#ed0c73',transparency:91}}
};}
const KEY='uos.vistas.appearance.v1';
export function loadAppearance(){
  const result=defaultAppearance();
  try {
    const saved=JSON.parse(localStorage.getItem(KEY));
for(const group of ['obj','shape'])for(const part of ['point','line','fill']){
const value=saved?.[group]?.[part]??(part==='point'?{transparency:saved?.[group]?.fill?.pointTransparency}:null);
      if(/^#[0-9a-f]{6}$/i.test(value?.color))result[group][part].color=value.color;
      if(Number.isFinite(value?.transparency))result[group][part].transparency=Math.round(Math.max(0,Math.min(100,value.transparency)));
    }
  }catch{/* Storage is optional. */}
  return result;
}
export function saveAppearance(value){try{localStorage.setItem(KEY,JSON.stringify(value));}catch{/* Storage is optional. */}}
export function applyShapeAppearance(map,value){
  const opacity=part=>1-value[part].transparency/100;
  const set=(id,key,v)=>{if(map?.getLayer(id))map.setPaintProperty(id,key,v);};
  set('vistas-cones-fill','fill-color',value.fill.color);
  set('vistas-cones-fill','fill-opacity',opacity('fill'));
  set('vistas-cones-outline','line-color',value.line.color);
  set('vistas-cones-outline','line-opacity',opacity('line'));
  set('vistas-cones-casing','line-opacity',opacity('line')*.9);
set('vistas-points','circle-color',value.point.color);
set('vistas-points','circle-opacity',opacity('point'));
  set('vistas-points','circle-stroke-color',value.line.color);
  set('vistas-points','circle-stroke-opacity',opacity('line'));
}
