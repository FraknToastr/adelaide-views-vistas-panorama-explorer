import {mkdir,copyFile} from 'node:fs/promises';
import {build} from 'esbuild';
const assets={
 'maplibre-gl/dist/maplibre-gl.js':'maplibre-gl.js',
 'maplibre-gl/dist/maplibre-gl.css':'maplibre-gl.css',
 'maplibre-gl/LICENSE.txt':'maplibre-gl-LICENSE.txt',
 'shpjs/dist/shp.min.js':'shp.min.js','shpjs/LICENSE.md':'shpjs-LICENSE.md',
 'jszip/dist/jszip.min.js':'jszip.min.js','jszip/LICENSE.markdown':'jszip-LICENSE.markdown',
 'proj4/dist/proj4.js':'proj4.js','proj4/LICENSE.md':'proj4-LICENSE.md',
 'three/build/three.module.js':'three/three.module.js',
 'three/build/three.core.js':'three/three.core.js',
 'three/examples/jsm/loaders/OBJLoader.js':'three/addons/loaders/OBJLoader.js',
 'three/LICENSE':'three-LICENSE.txt'
};
for(const [source,target] of Object.entries(assets)){
 const destination=new URL('../vendor/'+target,import.meta.url);
 await mkdir(new URL('.',destination),{recursive:true});
 await copyFile(new URL('../node_modules/'+source,import.meta.url),destination);
}
await build({entryPoints:['js/app.js'],bundle:true,format:'iife',minify:true,outfile:'js/app-local.bundle.js',legalComments:'eof'});
console.log('Local libraries and double-click bundle regenerated.');
