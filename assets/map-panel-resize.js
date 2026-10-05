(function(window){
 'use strict';
 window.MapPanelResize={attach(map){
  const app=window.document.querySelector('.app');
  const handle=app.querySelector('.map-panel-handle');
  const wrap=app.querySelector('.map-wrap');
  const mobile=window.matchMedia('(max-width:800px)');
  let ratio=null,drag=null;
  function limits(){
   const available=app.clientHeight-handle.offsetHeight;
   const min=Math.min(150,available/2);
   return {available,min,max:Math.max(min,available-160)};
  }
  function setHeight(value){
   if(!mobile.matches)return;
   const {available,min,max}=limits();
   const height=Math.max(min,Math.min(max,value));
   ratio=height/available;
   app.style.setProperty('--mobile-map-height',`${height}px`);
   handle.setAttribute('aria-valuemin',String(Math.round(min)));
   handle.setAttribute('aria-valuemax',String(Math.round(max)));
   handle.setAttribute('aria-valuenow',String(Math.round(height)));
   handle.setAttribute('aria-valuetext',`Mapa: ${Math.round(ratio*100)}% do espaço disponível`);
   map.invalidateSize({pan:false});
  }
  function resize(){
   drag=null;
   if(mobile.matches)setHeight(ratio===null?wrap.getBoundingClientRect().height:ratio*limits().available);
  }
  function finish(event){if(drag&&event.pointerId===drag.id)drag=null}
  [handle,app.querySelector('.mast')].forEach(surface=>{
   surface.addEventListener('pointerdown',event=>{
    if(!mobile.matches||event.button!==0||drag||event.target?.closest?.('a,button,input,select,textarea,summary'))return;
    event.preventDefault();
    drag={id:event.pointerId,y:event.clientY,height:wrap.getBoundingClientRect().height};
    surface.setPointerCapture(event.pointerId);
   });
   surface.addEventListener('pointermove',event=>{
    if(!drag||event.pointerId!==drag.id)return;
    event.preventDefault();
    setHeight(drag.height+event.clientY-drag.y);
   });
   ['pointerup','pointercancel','lostpointercapture'].forEach(type=>surface.addEventListener(type,finish));
  });
  handle.addEventListener('keydown',event=>{
   if(!mobile.matches)return;
   const height=ratio*limits().available;
   const values={ArrowUp:height-32,ArrowDown:height+32,Home:limits().min,End:limits().max};
   if(!(event.key in values))return;
   event.preventDefault();setHeight(values[event.key]);
  });
  window.addEventListener('resize',resize);
  mobile.addEventListener('change',resize);
  resize();
 }};
})(window);
