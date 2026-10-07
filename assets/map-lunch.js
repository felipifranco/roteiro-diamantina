/* Opções de refeição independentes: não alteram paradas ou datas da viagem. */
(function (window) {
  'use strict';
  const escape = value => String(value || '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
  window.MapLunch = { async attach(map) {
    const L = window.L, layer = L.layerGroup(), markers = {};
    try {
      const response = await window.fetch('./data/locais-almoco.json', { cache: 'no-cache' });
      if (!response.ok) throw Error('Não foi possível carregar as opções de almoço');
      const data = await response.json();
      for (const s of data.places) {
        if (s.locationAccuracy !== 'exact' || !Number.isFinite(s.lat) || !Number.isFinite(s.lon) || Math.abs(s.lat) > 90 || Math.abs(s.lon) > 180) continue;
        const destination = encodeURIComponent(`${s.lat},${s.lon}`);
        const sources = (s.sources || []).filter(source => /^https:\/\//.test(source.url)).map(source => `<a target="_blank" rel="noopener" href="${escape(source.url)}">${escape(source.label)} ↗</a>`).join(' · ');
        const popup = `<h3>${escape(s.name)}</h3><div class="pop-type">Opção de almoço · ${escape(s.municipality)}</div><p>${escape(s.address)}</p><p>${escape(s.food)}</p><p><b>Horário publicado:</b> ${escape(s.hours)}</p><p><a href="tel:${escape(s.phone.replace(/[^+0-9]/g, ''))}">${escape(s.phone)}</a></p><div class="pop-actions"><a target="_blank" rel="noopener" href="https://waze.com/ul?ll=${destination}&amp;navigate=yes">Waze ↗</a><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&amp;destination=${destination}">Google Maps ↗</a></div><p class="pop-meta">Conferido em ${escape(s.verifiedAt)}. ${escape(s.availabilityNote)}<br>Opção de apoio, não parada obrigatória ou reserva.</p><div class="pop-meta">${sources}</div>`;
        markers[s.id] = L.marker([s.lat, s.lon], { title: s.name, icon: L.divIcon({ className: 'lunch-pin', html: '🍽️', iconSize: [34, 36], iconAnchor: [17, 35], popupAnchor: [0, -30] }) }).addTo(layer).bindPopup(popup, { maxWidth: 310, autoPan: false }).bindTooltip(s.name);
      }
      layer.addTo(map);
      function focusHash() {
        const marker = markers[window.location.hash.slice(1)];
        if (!marker) return;
        map.setView(marker.getLatLng(), 16);
        marker.openPopup();
      }
      window.addEventListener('hashchange', focusHash);
      focusHash();
      return { layer, markers };
    } catch (error) { console.error('Opções de almoço:', error); }
  } };
})(window);
