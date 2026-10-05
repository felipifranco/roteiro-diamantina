/* Pontos de apoio independentes: não alteram seleções, datas ou traçado da viagem. */
(function (window) {
  'use strict';
  const escape = value => String(value || '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
  const icon = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M2 21h14M4 10h10M17 5l3 3v10a2 2 0 0 1-4 0v-5a2 2 0 0 0-2-2"/><path d="M18 6v4h2"/></svg>';
  window.MapFuel = { async attach(map) {
    const L = window.L, layer = L.layerGroup(), markers = {};
    let active = true, button;
    function setActive(value) {
      active = value;
      if (active) layer.addTo(map); else layer.remove();
      button.setAttribute('aria-pressed', String(active));
    }
    const control = L.control({ position: 'bottomleft' });
    control.onAdd = () => {
      const box = L.DomUtil.create('div', 'map-fuel');
      button = window.document.createElement('button');
      button.type = 'button'; button.innerHTML = icon;
      button.title = 'Mostrar ou ocultar postos nas rodovias do roteiro';
      button.setAttribute('aria-label', button.title);
      button.setAttribute('aria-pressed', 'true');
      button.disabled = true;
      button.addEventListener('click', () => setActive(!active));
      box.append(button);
      L.DomEvent.disableClickPropagation(box); L.DomEvent.disableScrollPropagation(box);
      return box;
    };
    control.addTo(map);
    try {
      const response = await window.fetch('./data/postos-combustivel.json', { cache: 'no-cache' });
      if (!response.ok) throw Error('Não foi possível carregar os postos');
      const data = await response.json();
      for (const s of data.stations) {
        if (!s.roadside || s.locationAccuracy !== 'exact' || !Number.isFinite(s.lat) || !Number.isFinite(s.lon) || Math.abs(s.lat) > 90 || Math.abs(s.lon) > 180) continue;
        const destination = encodeURIComponent(`${s.lat},${s.lon}`);
        const sources = (s.sources || []).filter(source => /^https:\/\//.test(source.url)).map(source => `<a target="_blank" rel="noopener" href="${escape(source.url)}">${escape(source.label || 'Fonte da localização')} ↗</a>`).join(' · ');
        const popup = `<h3>${escape(s.name)}</h3><div class="pop-type">Posto rodoviário · ${escape(s.municipality)}</div><p>${escape(s.road)}${s.km ? ' · km ' + escape(s.km) : ''}</p><p>${escape(s.accessNote || 'Confirme o acesso e eventuais retornos no navegador antes de entrar.')}</p>${s.verificationNote ? `<p class="pop-meta">${escape(s.verificationNote)}</p>` : ''}<p class="pop-meta">${escape(s.routeName || data.route.name)}<br>Ponto de apoio, não uma parada obrigatória.</p><div class="pop-actions"><a target="_blank" rel="noopener" href="https://waze.com/ul?ll=${destination}&amp;navigate=yes">Waze ↗</a><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&amp;destination=${destination}">Google Maps ↗</a></div><p class="pop-meta">Localização conferida: ${escape(s.verifiedAt)}. Funcionamento, preços e combustível disponível precisam de confirmação.</p><div class="pop-meta">${sources}</div>`;
        markers[s.id] = L.marker([s.lat, s.lon], { title: s.name, icon: L.divIcon({ className: 'fuel-pin', html: icon, iconSize: [32, 36], iconAnchor: [16, 35], popupAnchor: [0, -30] }) }).addTo(layer).bindPopup(popup, { maxWidth: 310, autoPan: false }).bindTooltip(s.name);
      }
      setActive(true); button.disabled = false;
      function focusHash() {
        const marker = markers[window.location.hash.slice(1)];
        if (!marker) return;
        setActive(true);
        map.setView(marker.getLatLng(), 15);
        marker.openPopup();
      }
      window.addEventListener('hashchange', focusHash);
      focusHash();
      return { layer, markers };
    } catch (error) {
      button.setAttribute('aria-pressed', 'false');
      button.title = 'Postos indisponíveis nesta carga; recarregue a página para tentar novamente';
      button.setAttribute('aria-label', button.title);
      console.error('Postos rodoviários:', error);
    }
  } };
})(window);
