/* =======================================================
   Almitest · piezas de interfaz compartidas (hub y test)
   ======================================================= */
(function(){
  'use strict';

  function esc(s){
    return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }

  /* 5745 -> "5.745". toLocaleString('es-ES') no agrupa los números de
     cuatro cifras, y en la app se ven mejor agrupados. */
  function fmt(n){
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  /* 2026-10-22 -> "22-oct-2026" */
  function fechaCorta(iso){
    const [a,m,d] = String(iso).split('-');
    return `${parseInt(d,10)}-${['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][parseInt(m,10)-1]}-${a}`;
  }

  /* Anillo de porcentaje. pct null = sin datos (solo el aro). */
  function ring(pct, opts){
    const o = Object.assign({cls:'ring', label:null}, opts||{});
    const r = 16, c = 2*Math.PI*r;
    const warn = pct !== null && pct < 50 ? ' warn' : '';
    const arc = pct === null ? '' :
      `<circle class="fill" cx="20" cy="20" r="${r}" fill="none" stroke-width="4" stroke-linecap="round"
        stroke-dasharray="${(c*pct/100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 20 20)"/>`;
    const txt = pct === null ? '' : `<text x="20" y="23.5" text-anchor="middle" font-size="10">${pct}</text>`;
    const aria = pct === null ? 'aria-hidden="true"' : `role="img" aria-label="${pct} % de aciertos"`;
    return `<svg class="${o.cls}${warn}" viewBox="0 0 40 40" ${aria}>
      <circle class="track" cx="20" cy="20" r="${r}" fill="none" stroke-width="4"/>${arc}${txt}</svg>`;
  }

  const ICONS = {
    back: '<path d="M15 18l-6-6 6-6"/>',
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    fails: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
    stats: '<path d="M5 20V11M12 20V5M19 20v-7"/>',
    doc: '<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    print: '<path d="M7 9V3h10v6"/><path d="M7 18H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M7 14h10v7H7z"/>'
  };
  function icon(name){
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||''}</svg>`;
  }

  window.UI = { esc, fmt, ring, icon, fechaCorta };
})();
