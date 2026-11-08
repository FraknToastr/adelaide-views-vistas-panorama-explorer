export const SOURCES=['map','obj'];
export const KINDS=['point','viewshed','frustum','other'];
// Location selection and category permissions are deliberately independent.
export class VisibilityGates {
  constructor(saved={}){
    this.locations=new Map(Object.entries(saved.locations||{}));
    this.categories=Object.fromEntries(SOURCES.map(source=>[source,Object.fromEntries(KINDS.map(kind=>[kind,saved.categories?.[source]?.[kind]!==false]))]));
  }
  location(id){return this.locations.get(id)!==false;}
  category(source,kind){return this.categories[source]?.[kind]!==false;}
  visible(location,layer){return this.location(location)&&this.category(layer.source,layer.kind);}
  setLocation(id,on){this.locations.set(id,!!on);}
  setCategory(source,kind,on){this.categories[source][kind]=!!on;}
  setGroup(source,on){for(const kind of KINDS)this.setCategory(source,kind,on);}
  snapshot(){return {locations:Object.fromEntries(this.locations),categories:structuredClone(this.categories)};}
}
