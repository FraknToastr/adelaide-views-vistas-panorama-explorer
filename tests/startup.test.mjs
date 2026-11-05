import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

const root=new URL('../',import.meta.url);
const html=await readFile(new URL('index.html',root),'utf8');
const imports=JSON.parse(html.match(/<script type="importmap">([\s\S]*?)<\/script>/)[1]).imports;
const entry=html.match(/<script id="appModule" type="module" src="([^"]+)"/)[1];

test('local modules share a release URL at localhost and under a GitHub Pages project path',async()=>{
  const version=new URL(entry,'http://localhost/').searchParams.get('v');
  assert.ok(version);
  assert.equal(new URL(html.match(/href="(css\/styles\.css[^\"]*)"/)[1],'http://localhost/').searchParams.get('v'),version);
  for(const base of ['http://localhost:8765/index.html','https://example.github.io/panorama-explorer/']){
    const mappings=new Map(Object.entries(imports).map(([key,value])=>[new URL(key,base).href,new URL(value,base).href]));
    assert.equal(mappings.get(new URL('./js/app.js',base).href),new URL(entry,base).href);
    for(const [key,value] of Object.entries(imports).filter(([key])=>key.startsWith('./js/'))){
      assert.equal(new URL(value,base).searchParams.get('v'),version);
      const source=await readFile(new URL(key,root),'utf8');
      for(const [,dependency] of source.matchAll(/\bfrom\s+['"](\.[^'"]+)['"]/g)){
        const resolved=new URL(dependency,new URL(value,base)).href;
        assert.ok(mappings.has(resolved),'missing release mapping for '+resolved);
        assert.equal(new URL(mappings.get(resolved)).searchParams.get('v'),version);
      }
    }
  }
});

test('the reported stale-geo link failure is reproduced and the fresh versioned graph links',async()=>{
  const source=await readFile(new URL('js/obj-map.js',root),'utf8');
  const link=geo=>source
    .replace("import * as THREE from 'three';",'const THREE={};')
    .replace("import {OBJLoader} from 'three/addons/loaders/OBJLoader.js';",'const OBJLoader=class {};')
    .replaceAll("'./core.js'",JSON.stringify(new URL('js/core.js',root).href))
    .replaceAll("'./geo.js'",JSON.stringify(geo));
  const load=code=>import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'));
  const staleGeo='data:text/javascript,export function toLngLat(){}';
  await assert.rejects(load(link(staleGeo)),/does not provide an export named 'createObjProjection'/);
  const freshGeo=new URL(imports['./js/geo.js'],root).href;
  const loaded=await load(link(freshGeo));
  assert.equal(typeof loaded.ObjMapLayer,'function');
});

test('a module failure before bootstrap displays an error instead of leaving the page silently inert',()=>{
  const guard=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
  const listeners={},notices=[],rootElement={dataset:{}},region={append:el=>notices.push(el)};
  const document={documentElement:rootElement,readyState:'loading',
    addEventListener:(name,fn)=>{listeners[name]=fn;},
    getElementById:()=>region,createElement:()=>({setAttribute(){}})};
  vm.runInNewContext(guard,{document,window:{addEventListener:(name,fn)=>{listeners[name]=fn;}},ErrorEvent:class {}});
  assert.equal(rootElement.dataset.appState,'loading');
  listeners.error({target:{id:'appModule'}});
  assert.equal(rootElement.dataset.appState,'error');assert.equal(notices.length,0);
  listeners.DOMContentLoaded();assert.equal(notices.length,1);
  assert.match(notices[0].textContent,/App could not start/);
  listeners.error({target:{id:'appModule'}});assert.equal(notices.length,1);
});
