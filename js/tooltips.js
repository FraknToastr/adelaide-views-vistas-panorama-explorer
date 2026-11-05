// One shared tooltip: no native title bubbles or per-control listeners.
export function installTooltips(doc=document){
  const win=doc.defaultView,tip=doc.createElement('div');
  tip.id='vistas-tooltip';tip.className='accessible-tooltip';tip.setAttribute('role','tooltip');tip.hidden=true;
  let active=null,hover=null,focus=null,pointer=null,dismissed=null;
  const events=new win.AbortController(),options={capture:true,signal:events.signal};
  function migrate(root){
    const nodes=[...(root.matches?.('[title]')?[root]:[]),...(root.querySelectorAll?.('[title]')||[])];
    for(const node of nodes){
      const title=node.getAttribute('title');
      if(title){
        node.dataset.tooltip=title;
        if(node.matches('button,a,input,[role="button"]')&&!node.hasAttribute('aria-label')&&!node.hasAttribute('aria-labelledby')&&!node.textContent.trim())node.setAttribute('aria-label',title);
      }
      node.removeAttribute('title');
    }
  }
  function target(node){return node?.closest?.('[data-tooltip]');}
  function hide(){
    if(active){const ids=(active.getAttribute('aria-describedby')||'').split(/\s+/).filter(id=>id&&id!==tip.id);if(ids.length)active.setAttribute('aria-describedby',ids.join(' '));else active.removeAttribute('aria-describedby');}
    active=null;tip.hidden=true;
  }
  function position(){
    if(!active)return;
    const rect=(active.closest('.choose-file')||active).getBoundingClientRect(),margin=10,width=tip.offsetWidth,height=tip.offsetHeight;
    const x=hover===active&&pointer?pointer.x:rect.left+rect.width/2;
    const y=hover===active&&pointer?pointer.y:rect.bottom;
    const gap=hover===active&&pointer?40:12;
    let left=x+20,top=y+gap;
    if(left+width>win.innerWidth-margin)left=x-width-20;
    if(top+height>win.innerHeight-margin)top=(hover===active&&pointer?pointer.y:rect.top)-height-gap;
    tip.style.left=Math.max(margin,Math.min(left,win.innerWidth-width-margin))+'px';
    tip.style.top=Math.max(margin,Math.min(top,win.innerHeight-height-margin))+'px';
  }
  function show(node){
    if(!node||node===dismissed||node.disabled||!node.isConnected||!node.getClientRects().length){hide();return;}
    if(active!==node){hide();active=node;const ids=new Set((node.getAttribute('aria-describedby')||'').split(/\s+/).filter(Boolean));ids.add(tip.id);node.setAttribute('aria-describedby',[...ids].join(' '));}
    const host=node.closest('dialog[open]')||doc.fullscreenElement||doc.body;
    if(tip.parentNode!==host)host.append(tip);
    if(tip.textContent!==node.dataset.tooltip)tip.textContent=node.dataset.tooltip;
    tip.hidden=false;position();
  }
  migrate(doc);
  const observer=new win.MutationObserver(records=>{
    for(const record of records){
      if(record.type==='childList'){for(const node of record.addedNodes)if(node.nodeType===1&&node!==tip)migrate(node);}
      else if(record.attributeName==='title')migrate(record.target);
    }
    if(active){if(!active.isConnected||active.disabled||!active.getClientRects().length)hide();else if(tip.textContent!==active.dataset.tooltip)show(active);}
  });
  observer.observe(doc.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['title','data-tooltip','disabled','hidden']});
  doc.addEventListener('pointerover',event=>{
    if(event.pointerType==='touch')return;
    if(tip.contains(event.target))return;
    const node=target(event.target);if(node===hover)return;
    hover=node;dismissed=null;pointer={x:event.clientX,y:event.clientY};show(hover||focus);
  },options);
  doc.addEventListener('pointerout',event=>{
    if(hover&&!hover.contains(event.relatedTarget)&&!tip.contains(event.relatedTarget)){hover=null;pointer=null;dismissed=null;show(focus);}
    if(event.target===tip&&!tip.contains(event.relatedTarget)&&!active?.contains(event.relatedTarget))hide();
  },options);
  doc.addEventListener('focusin',event=>{const node=target(event.target);if(node&&event.target.matches(':focus-visible')){focus=node;dismissed=null;show(node);}},options);
  doc.addEventListener('focusout',()=>{focus=null;show(hover);},options);
  doc.addEventListener('keydown',event=>{if(event.key==='Escape'&&active){dismissed=active;hide();event.preventDefault();event.stopPropagation();}},options);
  doc.addEventListener('pointerdown',()=>{dismissed=active;focus=null;hide();},options);
  const clear=()=>{hover=null;focus=null;pointer=null;hide();};
  doc.addEventListener('scroll',clear,options);doc.addEventListener('fullscreenchange',clear,options);
  doc.addEventListener('visibilitychange',clear,options);win.addEventListener('blur',clear,{signal:events.signal});
  win.addEventListener('resize',clear,{signal:events.signal});
  return ()=>{clear();observer.disconnect();events.abort();tip.remove();};
}
