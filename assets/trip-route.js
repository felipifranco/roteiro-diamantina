// Route selection rules are independent of cards and map markers.
(function(root){
 function attractionStops(stops){return stops.flatMap(city=>(city.attractions||[]).map((a,i)=>({...a,id:`${city.id}-poi-${i+1}`,name:a.name,parent:city.name,parentId:city.id,kind:'atracao',routeable:a.locationAccuracy!=='city-center'&&!a.sameSiteAs,type:a.type||city.type,days:a.days||'Duração a confirmar',sights:[],url:city.url})))}
 function effectiveRouteStops(allStops,selectedIds,schedule){
  const active=allStops.filter(s=>selectedIds.has(s.id)&&(s.kind!=='atracao'||selectedIds.has(s.parentId)));
  const parentsWithTours=new Set(active.filter(s=>s.kind==='atracao'&&s.parentId).map(s=>s.parentId));
  return active.filter(s=>s.kind==='atracao'||s.id===schedule.originId||s.id===schedule.destinationId||!parentsWithTours.has(s.id));
 }
 function setAttractionActive(stop,active,selected,isRequired){
  if(isRequired(stop)&&!active)return false;
  if(active&&(!stop.routeable||!selected.has(stop.parentId)))return false;
  if(active)selected.add(stop.id);else selected.delete(stop.id);
  return true;
 }
 function setGroupActive(group,active,tours,selected,dates,manual,isRequired){
  if(group.kind==='alerta'||(!active&&(isRequired(group)||tours.some(isRequired))))return false;
  if(active)selected.add(group.id);
  else{selected.delete(group.id);dates.delete(group.id);const i=manual.indexOf(group.id);if(i>=0)manual.splice(i,1);tours.forEach(tour=>selected.delete(tour.id))}
  return true;
 }
 const normalizeName=value=>value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
 const sameName=(a,b)=>{const x=normalizeName(a),y=normalizeName(b);return !!x&&!!y&&(x===y||(x.length>4&&y.length>4&&(x.includes(y)||y.includes(x))))};
 function toursFor(city,attractionStops){
  const mapped=attractionStops.filter(tour=>tour.parentId===city.id),placed=new Set(),list=[];
  (city.sights||[]).forEach((name,i)=>{const tour=mapped.find(t=>!placed.has(t.id)&&sameName(t.name,name));if(tour){placed.add(tour.id);list.push(tour)}else list.push({id:`${city.id}-sight-${i+1}`,name,parent:city.name,parentId:city.id,kind:'atracao',routeable:false,type:city.type})});
  mapped.filter(t=>!placed.has(t.id)).forEach(t=>list.push(t));
  return list
 }
 const cityOf=s=>s.kind==='atracao'?s.parentId:s.id;
 function legsByCity(points,legs,originId){
  const arrival=new Map(),intra=new Map();
  legs.forEach((leg,i)=>{const from=points[i],to=points[i+1];if(!from||!to)return;const item={from,to,duration:leg.duration,distance:leg.distance};if(i===legs.length-1&&to.id===originId)arrival.set('return',item);else if(cityOf(from)===cityOf(to)){const sum=intra.get(cityOf(to))||{duration:0,distance:0};intra.set(cityOf(to),{duration:sum.duration+leg.duration,distance:sum.distance+leg.distance})}else arrival.set(cityOf(to),item)});
  return {arrival,intra}
 }
 function routeLegLinks(points,originId){const arrival=new Map();points.slice(1).forEach((to,i)=>{const from=points[i];if(!from||!to)return;if(to.id===originId)arrival.set('return',{from,to});else if(cityOf(from)!==cityOf(to))arrival.set(cityOf(to),{from,to})});return {arrival,intra:new Map()}}
 function createRouter(config,fetchRoute=globalThis.fetch){
  let sequence=0,controller=null;
  async function calculate(plan){
   const request=++sequence;
   if(controller)controller.abort();
   const current=new AbortController();controller=current;
   const timeout=setTimeout(()=>current.abort(),config.timeoutMs);
   try{
    const coords=plan.routePoints.map(s=>`${s.lon},${s.lat}`).join(';');
    const response=await fetchRoute(`${config.endpoint}/${config.profile}/${coords}?overview=full&geometries=geojson&steps=false`,{signal:current.signal});
    if(!response.ok)throw new Error(`OSRM HTTP ${response.status}`);
    const result=await response.json();
    if(request!==sequence)return null;
    if(!result.routes?.length)throw new Error('sem rota');
    const route=result.routes[0],returnDriveHours=(route.legs||[]).slice(plan.returnStart).reduce((n,leg)=>n+leg.duration,0)/3600;
    return {route,returnDriveHours};
   }catch(error){return request===sequence?{error}:null}
   finally{clearTimeout(timeout);if(controller===current)controller=null}
  }
  return {calculate};
 }
 const api={attractionStops,effectiveRouteStops,setAttractionActive,setGroupActive,toursFor,legsByCity,routeLegLinks,createRouter};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 else root.TripRoute=api;
})(typeof window!=='undefined'?window:globalThis);
