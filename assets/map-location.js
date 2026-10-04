/* Posição somente no dispositivo: sem envio ou armazenamento de coordenadas. */
(function (window) {
  'use strict';
  window.MapLocation = { attach(map) {
    const L = window.L, geo = window.navigator.geolocation;
    let watch = null, active = false, generation = 0, point = null, dot = null, accuracy = null;
    let locate, status;
    function stop(message = 'Localização desativada.', notify = false) {
      active = false;
      generation++;
      if (watch !== null) geo.clearWatch(watch);
      watch = null;
      dot?.remove(); accuracy?.remove();
      dot = accuracy = point = null;
      locate.setAttribute('aria-pressed', 'false');
      locate.setAttribute('aria-label', 'Minha localização');
      locate.title = 'Minha localização';
      status.textContent = message;
      status.hidden = !message;
      if (notify) window.alert(message);
    }
    function center() { map.setView(point, Math.max(map.getZoom(), 15)); }
    const control = L.control({ position: 'bottomleft' });
    control.onAdd = function () {
      const box = L.DomUtil.create('div', 'map-location');
      locate = window.document.createElement('button');
      locate.type = 'button';
      locate.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>';
      locate.title = 'Minha localização';
      locate.setAttribute('aria-label', 'Minha localização');
      locate.setAttribute('aria-pressed', 'false');
      status = window.document.createElement('div');
      status.className = 'map-location-status visually-hidden';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      status.hidden = true;
      box.append(locate, status);
      L.DomEvent.disableClickPropagation(box);
      L.DomEvent.disableScrollPropagation(box);
      locate.addEventListener('click', () => {
        if (active) { stop(); return; }
        status.hidden = false;
        if (!geo) { stop('Este navegador não oferece localização.', true); return; }
        active = true;
        const token = ++generation;
        status.textContent = 'Buscando sua localização…';
        locate.setAttribute('aria-pressed', 'true');
        locate.setAttribute('aria-label', 'Desativar localização');
        locate.title = 'Desativar localização';
        watch = geo.watchPosition(position => {
          if (!active || token !== generation) return;
          const { latitude, longitude, accuracy: radius } = position.coords;
          if (![latitude, longitude, radius].every(Number.isFinite) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180 || radius < 0) {
            stop('Não foi possível obter uma posição válida. Tente novamente.', true); return;
          }
          const first = !point;
          point = [latitude, longitude];
          if (!dot) {
            accuracy = L.circle(point, { radius, color: '#2475de', weight: 1, fillOpacity: 0.10, interactive: false }).addTo(map);
            dot = L.circleMarker(point, { radius: 8, color: '#fff', weight: 3, fillColor: '#2475de', fillOpacity: 1, className: 'current-location-dot' }).addTo(map).bindTooltip('Você está aqui');
          } else {
            dot.setLatLng(point);
            accuracy.setLatLng(point).setRadius(radius);
          }
          status.textContent = `Você está aqui · precisão aproximada: ${Math.round(radius)} m`;
          if (first) center();
        }, error => {
          if (!active || token !== generation) return;
          stop(error.code === 1 ? 'Permita a localização nas configurações do navegador e tente novamente.' : error.code === 3 ? 'O GPS demorou a responder. Tente novamente.' : 'Localização indisponível. Ative o GPS e tente novamente.', true);
        }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
      });

      return box;
    };
    control.addTo(map);
    window.addEventListener('pagehide', () => stop(''));
  } };
})(window);
