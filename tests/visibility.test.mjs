import test from 'node:test';
import assert from 'node:assert/strict';
import {VisibilityGates} from '../js/visibility.js';
test('effective visibility is the AND of the location and its category',()=>{
  const gates=new VisibilityGates(),layer={source:'obj',kind:'viewshed'};
  for(const location of [true,false])for(const category of [true,false]){
    gates.setLocation('A',location);gates.setCategory('obj','viewshed',category);
    assert.equal(gates.visible('A',layer),location&&category);
    assert.equal(gates.location('A'),location);assert.equal(gates.category('obj','viewshed'),category);
  }
});
test('bulk categories do not change locations, and location choices do not change categories',()=>{
  const gates=new VisibilityGates();gates.setLocation('A',false);gates.setGroup('obj',false);gates.setGroup('obj',true);
  assert.equal(gates.location('A'),false);assert.equal(gates.category('map','point'),true);
  gates.setCategory('map','point',false);gates.setLocation('A',true);
  assert.equal(gates.category('map','point'),false);assert.equal(gates.visible('A',{source:'map',kind:'point'}),false);
  assert.equal(gates.location('new location'),true);
});
test('gates round-trip without sharing mutable category objects',()=>{
  const gates=new VisibilityGates();gates.setLocation('A',false);gates.setCategory('obj','frustum',false);
  const restored=new VisibilityGates(gates.snapshot());assert.deepEqual(restored.snapshot(),gates.snapshot());
  restored.setGroup('obj',true);assert.equal(gates.category('obj','frustum'),false);
});
