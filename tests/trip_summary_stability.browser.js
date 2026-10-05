(() => {
  const summary=document.getElementById('tripSummary');
  const original=summary.innerHTML;
  if(!summary.querySelector('.trip-caption span:nth-child(2)'))throw Error('Espere o cálculo real da rota antes do teste');
  const measure=()=>({
    header:document.querySelector('.mast').getBoundingClientRect().height,
    listTop:document.querySelector('.scroll').getBoundingClientRect().top,
    map:document.querySelector('.map-wrap').getBoundingClientRect().height,
    overflow:document.documentElement.scrollWidth>innerWidth
  });
  let result;
  try{
    const ready=measure();
    summary.innerHTML='<div class="trip-facts"><span><b>Saída</b> 07/10</span><span><b>Retorno previsto</b> a estimar</span></div><p class="trip-caption"><span>Retorno ainda não estimado.</span></p>';
    const pending=measure();
    summary.innerHTML='';
    const empty=measure();
    result={width:innerWidth,ready,pending,empty};
    for(const state of [pending,empty]){
      if(Math.abs(ready.header-state.header)>.5||Math.abs(ready.listTop-state.listTop)>.5||Math.abs(ready.map-state.map)>.5||state.overflow)
        throw Error('Salto no carregamento: '+JSON.stringify(result));
    }
    if(ready.overflow)throw Error('Overflow: '+JSON.stringify(result));
  }finally{summary.innerHTML=original;}
  return result;
})()
