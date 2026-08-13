/* =======================================================
   OpoTest · pantalla de inicio (selector de oposiciones)
   ======================================================= */
(function(){
  'use strict';

  const screen = document.getElementById('screen-hub');

  function totals(state){
    let seen=0, correct=0;
    Object.values(state.progress||{}).forEach(s=>{ seen+=s.seen||0; correct+=s.correct||0; });
    return {seen, correct, fails:(state.failHistory||[]).length};
  }

  function esc(s){
    return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }

  async function render(){
    const opos = window.OPOSICIONES;
    const states = await window.OpoStore.loadMany(opos.map(o=>o.slug));
    const counts = await window.OpoStore.getCounts();

    let gSeen=0, gCorrect=0, gFails=0;
    opos.forEach(o=>{
      const t = totals(states[o.slug]);
      gSeen+=t.seen; gCorrect+=t.correct; gFails+=t.fails;
    });
    const gPct = gSeen ? Math.round((gCorrect/gSeen)*100) : 0;

    let html = `
      <div class="stats-row">
        <div class="stat-card"><div class="num">${gSeen}</div><div class="lbl">Preguntas hechas</div></div>
        <div class="stat-card"><div class="num">${gPct}%</div><div class="lbl">Aciertos</div></div>
        <div class="stat-card"><div class="num">${gFails}</div><div class="lbl">Fallos pendientes</div></div>
      </div>
      <h2 class="section-title">Elige tu oposición</h2>
      <div class="opo-list">
    `;

    opos.forEach(o=>{
      const t = totals(states[o.slug]);
      const pct = t.seen ? Math.round((t.correct/t.seen)*100) : null;
      // El recuento cacheado solo se actualiza al abrir esa oposición (ver
      // quiz.js), así que puede quedarse atrás mientras el banco crece con
      // la campaña de ampliación. o.preguntas (catalog.js) siempre refleja
      // el total real en el momento del commit, así que nunca debe perder
      // frente a un caché más viejo.
      const total = Math.max(counts[o.slug] || 0, o.preguntas);
      const enPreparacion = total < 200;
      html += `
        <button class="opo-card" data-slug="${o.slug}" style="--card-color:${o.color}">
          <span class="emoji">${o.emoji}</span>
          <span class="info">
            <span class="name">${esc(o.title)}</span>
            <span class="org">${esc(o.org)}</span>
            <span class="meta">
              <span class="pill">${total} preguntas</span>
              ${enPreparacion
                ? `<span class="pill wip">En ampliación</span>`
                : `<span class="pill ok">Banco completo</span>`}
              ${t.fails ? `<span class="pill">${t.fails} fallos</span>` : ``}
            </span>
          </span>
          <span class="ring ${pct===null?'empty':''}"
                style="${pct!==null?`border-color:${pct>=70?'#2a9d8f':pct>=50?'#ffb703':'#c8102e'}`:''}">
            ${pct===null?'—':pct+'%'}
          </span>
        </button>
      `;
    });

    html += `</div>
      <h2 class="section-title">Copia de seguridad</h2>
      <div class="note">
        El progreso se guarda en <b>este</b> navegador (${window.OpoStore.backend === 'host' ? 'almacenamiento de la app' : 'almacenamiento local'}).
        Si cambias de móvil u ordenador, exporta el progreso y vuelve a importarlo allí.
      </div>
      <div class="tools-row">
        <button class="mode-btn secondary" id="btn-export">⬇️ Exportar</button>
        <button class="mode-btn secondary" id="btn-import">⬆️ Importar</button>
      </div>
      <input type="file" id="file-import" accept="application/json,.json" class="hidden">
    `;

    screen.innerHTML = html;

    screen.querySelectorAll('.opo-card').forEach(card=>{
      card.addEventListener('click', ()=>{
        location.href = 'test.html?opo=' + encodeURIComponent(card.dataset.slug);
      });
    });

    document.getElementById('btn-export').addEventListener('click', exportProgress);
    document.getElementById('btn-import').addEventListener('click', ()=>{
      document.getElementById('file-import').click();
    });
    document.getElementById('file-import').addEventListener('change', importProgress);
  }

  async function exportProgress(){
    const json = await window.OpoStore.exportAll(window.OPOSICIONES.map(o=>o.slug));
    const blob = new Blob([json], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'opotest-progreso.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function importProgress(ev){
    const file = ev.target.files && ev.target.files[0];
    if(!file) return;
    ev.target.value = '';
    if(!confirm('Se sustituirá el progreso guardado en este dispositivo por el del archivo. ¿Continuar?')) return;
    try{
      const n = await window.OpoStore.importAll(await file.text());
      alert(`Progreso importado (${n} oposicion${n===1?'':'es'}).`);
      render();
    }catch(e){
      alert('No se pudo importar: ' + e.message);
    }
  }

  render();
})();
