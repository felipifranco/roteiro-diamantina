/* Posição somente no dispositivo: sem envio ou armazenamento de coordenadas. */
(function (window) {
  'use strict';
  window.MapLocation = { attach(map) {
    const L = window.L, geo = window.navigator.geolocation;
    let watch = null, active = false, generation = 0, point = null, dot = null, accuracy = null;
    let locate, stopButton, status;
    function stop(message = 'Localização desativada.') {
      active = false;
      generation++;
      if (watch !== null) geo.clearWatch(watch);
      watch = null;
      dot?.remove(); accuracy?.remove();
      dot = accuracy = point = null;
      stopButton.hidden = true;
      locate.setAttribute('aria-pressed', 'false');
      status.textContent = message;
      status.hidden = !message;
    }
    function center() { map.setView(point, Math.max(map.getZoom(), 15)); }
    const control = L.control({ position: 'topright' });
    control.onAdd = function () {
      const box = L.DomUtil.create('div', 'map-location');
      locate = window.document.createElement('button');
      locate.type = 'button';
      locate.textContent = 'Minha localização';
      locate.setAttribute('aria-label', 'Minha localização');
      locate.setAttribute('aria-pressed', 'false');
      stopButton = window.document.createElement('button');
      stopButton.type = 'button';
      stopButton.textContent = '×';
      stopButton.className = 'map-location-stop';
      stopButton.title = 'Desativar localização';
      stopButton.setAttribute('aria-label', 'Desativar localização');
      stopButton.hidden = true;
      status = window.document.createElement('div');
      status.className = 'map-location-status';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      status.hidden = true;
      box.append(locate, stopButton, status);
      L.DomEvent.disableClickPropagation(box);
      L.DomEvent.disableScrollPropagation(box);
      locate.addEventListener('click', () => {
        if (active) { if (point) center(); return; }
        status.hidden = false;
        if (!geo) { status.textContent = 'Este navegador não oferece localização.'; return; }
        active = true;
        const token = ++generation;
        status.textContent = 'Buscando sua localização…';
        stopButton.hidden = false;
        locate.setAttribute('aria-pressed', 'true');
        watch = geo.watchPosition(position => {
          if (!active || token !== generation) return;
          const { latitude, longitude, accuracy: radius } = position.coords;
          if (![latitude, longitude, radius].every(Number.isFinite) || Math.abs(latitude) > 90 || Math.abs(longitude) > 180 || radius < 0) {
            stop('Não foi possível obter uma posição válida. Tente novamente.'); return;
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
          stop(error.code === 1 ? 'Permita a localização nas configurações do navegador e tente novamente.' : error.code === 3 ? 'O GPS demorou a responder. Tente novamente.' : 'Localização indisponível. Ative o GPS e tente novamente.');
        }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
      });
      stopButton.addEventListener('click', () => stop());
      return box;
    };
    control.addTo(map);
    window.addEventListener('pagehide', () => stop(''));
  } };
})(window);
