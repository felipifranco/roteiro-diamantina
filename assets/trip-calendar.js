// Calendar dates are local date-only values, independent of the selected visits.
(function(root){
 const addDays=(day,count)=>{const date=new Date(`${day}T12:00:00Z`);date.setUTCDate(date.getUTCDate()+count);return date.toISOString().slice(0,10)};
 const calendarDays=(start,end)=>{const days=[];for(let day=start;day<=end;day=addDays(day,1))days.push(day);return days};
 const stayOnDay=(stays,day)=>stays.find(stay=>stay.checkIn<=day&&day<stay.checkOut);
 const nightCount=stay=>Math.round((new Date(`${stay.checkOut}T12:00:00Z`)-new Date(`${stay.checkIn}T12:00:00Z`))/86400000);
 function changeNight(stays,day,stopId,rangeEnd){
  const checkOut=addDays(day,1);
  if(checkOut>rangeEnd)throw new Error('A saída deve estar dentro do período de planejamento.');
  const remaining=stays.flatMap(stay=>{
   if(stay.checkOut<=day||stay.checkIn>=checkOut)return [stay];
   const parts=[];
   if(stay.checkIn<day)parts.push({...stay,checkOut:day});
   if(stay.checkOut>checkOut)parts.push({...stay,checkIn:checkOut});
   return parts;
  });
  if(stopId)remaining.push({stopId,checkIn:day,checkOut});
  const merged=[];
  remaining.sort((a,b)=>a.checkIn.localeCompare(b.checkIn)).forEach(stay=>{
   const previous=merged.at(-1);
   if(previous&&previous.stopId===stay.stopId&&previous.checkOut===stay.checkIn)previous.checkOut=stay.checkOut;
   else merged.push({...stay});
  });
  return merged;
 }
 const estimateReturn=(end,driveHours,maxDrivingHoursPerDay)=>driveHours===null?null:addDays(end,Math.max(1,Math.ceil(driveHours/maxDrivingHoursPerDay)));
 function plannedEnd(visits,stays,baseline){
  return [...visits.map(visit=>visit.date),...stays.map(stay=>addDays(stay.checkOut,-1))].filter(Boolean).reduce((last,date)=>date>last?date:last,baseline);
 }
 function suggestDate(visits,stays,schedule,policy){
  const anchor=policy.anchor==='destination'?schedule.destinationDate:schedule.startDate;
  const next=addDays(plannedEnd(visits,stays,anchor),policy.offsetDays);
  return next<schedule.startDate?schedule.startDate:next>schedule.endDate?schedule.endDate:next;
 }
 const hasDestinationConflict=(stays,date,destinationId)=>stays.some(stay=>stay.stopId!==destinationId&&stay.checkIn<date&&stay.checkOut>date);
 const isFixedStop=(stop,schedule,policy)=>stop.id===schedule.originId||(stop.id===schedule.destinationId&&policy.fixedDate);
 const isRequiredStop=(stop,schedule,policy)=>stop.id===schedule.originId||(stop.id===schedule.destinationId&&policy.required)||stop.required===true;
 function orderGroups(groups,destination,date,policy,includeDestination){
  return [...groups.filter(s=>s.id!==destination.id),...(includeDestination?[destination]:[])].sort((a,b)=>date(a).localeCompare(date(b))||(a===destination?(policy.sameDayOrder==='before'?-1:1):b===destination?(policy.sameDayOrder==='before'?1:-1):0));
 }
 function planRoute(groups,origin,destination,date,tours,routed,policy,includeDestination){
  const cities=orderGroups(groups,destination,date,policy,includeDestination),labels=new Map([[origin.id,'M']]);
  const points=city=>[city,...tours(city)].filter(s=>routed.has(s.id));
  cities.forEach((city,i)=>{if(routed.has(city.id))labels.set(city.id,String(i+1));tours(city).filter(t=>t.kind==='atracao'&&routed.has(t.id)).forEach((t,j)=>labels.set(t.id,`${i+1}${String.fromCharCode(97+j)}`))});
  const routePoints=[origin,...cities.flatMap(points),origin],order=routePoints.slice(1,-1).filter(s=>s.id!==destination.id),destinationIndex=routePoints.indexOf(destination);
  const before=groups.filter(s=>date(s)<date(destination)),after=groups.filter(s=>date(s)>date(destination));
  return {order,labels,before,after,beforePoints:before.flatMap(points),sameDay:cities.filter(s=>date(s)===date(destination)).flatMap(points).filter(s=>s!==destination),afterPoints:after.flatMap(points),routePoints,returnStart:destinationIndex<0?0:destinationIndex};
 }
 const orderVisits=(stops,date,manual)=>[...stops].sort((a,b)=>date(a).localeCompare(date(b))||manual.indexOf(a.id)-manual.indexOf(b.id));
 function moveBefore(manual,from,to){const i=manual.indexOf(from);if(i>=0)manual.splice(i,1);const j=manual.indexOf(to);manual.splice(j<0?manual.length:j,0,from)}
 function reorderVisit(order,id,step,dates,manual){
  const index=order.findIndex(s=>s.id===id),targetIndex=index+step;
  if(index<0||targetIndex<0||targetIndex>=order.length)return;
  const current=order[index],adjacent=order[targetIndex],currentDate=dates.get(current.id),nextDate=dates.get(adjacent.id);
  if(currentDate===nextDate){const a=manual.indexOf(current.id),b=manual.indexOf(adjacent.id);[manual[a],manual[b]]=[manual[b],manual[a]]}
  else{dates.set(current.id,nextDate);dates.set(adjacent.id,currentDate)}
 }
 const api={addDays,calendarDays,stayOnDay,nightCount,changeNight,estimateReturn,plannedEnd,suggestDate,hasDestinationConflict,isFixedStop,isRequiredStop,orderGroups,planRoute,orderVisits,moveBefore,reorderVisit};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 else root.TripCalendar=api;
})(typeof window!=='undefined'?window:globalThis);
