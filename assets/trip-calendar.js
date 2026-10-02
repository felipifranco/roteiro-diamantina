// Calendar dates are local date-only values, independent of the selected visits.
(function(root){
 const addDays=(day,count)=>{const date=new Date(`${day}T12:00:00Z`);date.setUTCDate(date.getUTCDate()+count);return date.toISOString().slice(0,10)};
 const calendarDays=(start,end)=>{const days=[];for(let day=start;day<=end;day=addDays(day,1))days.push(day);return days};
 const stayOnDay=(stays,day)=>stays.find(stay=>stay.checkIn<=day&&day<stay.checkOut);
 const nightCount=stay=>Math.round((new Date(`${stay.checkOut}T12:00:00Z`)-new Date(`${stay.checkIn}T12:00:00Z`))/86400000);
 function changeNight(stays,day,stopId,rangeEnd){
  const checkOut=addDays(day,1);
  if(checkOut>rangeEnd)throw new Error('A saída deve estar dentro do período de planejamento.');
  if(stays.some(stay=>stay.fixed&&stay.checkIn<=day&&day<stay.checkOut))throw new Error('Este pernoite é fixo no roteiro.');
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
   if(previous&&previous.stopId===stay.stopId&&Boolean(previous.fixed)===Boolean(stay.fixed)&&previous.checkOut===stay.checkIn)previous.checkOut=stay.checkOut;
   else merged.push({...stay});
  });
  return merged;
 }
 const api={addDays,calendarDays,stayOnDay,nightCount,changeNight};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 else root.TripCalendar=api;
})(typeof window!=='undefined'?window:globalThis);
