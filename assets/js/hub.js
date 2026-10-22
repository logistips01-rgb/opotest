/* =======================================================
   Almitest · pantalla de inicio (selector de oposiciones)
   ======================================================= */
(function(){
  'use strict';

  const screen = document.getElementById('screen-hub');
  const { esc, fmt, ring } = window.UI;

  function totals(state){
    let seen=0, correct=0;
    Object.values(state.progress||{}).forEach(s=>{ seen+=s.seen||0; correct+=s.correct||0; });
    return {seen, correct, fails:(state.failHistory||[]).length};
  }

  function saludo(){
    const h = new Date().getHours();
    if(h >= 6 && h < 14) return 'Buenos días';
    if(h >= 14 && h < 21) return 'Buenas tardes';
    return 'Buenas noches';
  }

  async function render(){
    const opos = window.OPOSICIONES;
    const states = await window.OpoStore.loadMany(opos.map(o=>o.slug));
    const counts = await window.OpoStore.getCounts();
    const hoy = window.OpoStore.hoy();

    let hechasHoy = 0, fallos = 0, ultimo = null;
    opos.forEach(o=>{
      const s = states[o.slug];
      if(s.today && s.today.date === hoy) hechasHoy += s.today.n;
      fallos += (s.failHistory||[]).length;
      if(s.last && (!ultimo || s.last.at > ultimo.last.at)) ultimo = {opo:o, last:s.last, state:s};
    });
    // La racha que se muestra es la de la última oposición practicada:
    // cada oposición lleva la suya y sumarlas no tendría sentido.
    const racha = ultimo ? (ultimo.state.streak || 0) : 0;

    let html = `
      <h2 class="hello">${saludo()}, Alma
        <small>${hechasHoy ? `Llevas ${fmt(hechasHoy)} pregunta${hechasHoy===1?'':'s'} hoy` : 'Hoy aún no has empezado'}</small>
      </h2>
    `;

    if(ultimo){
      const st = ultimo.state.progress[ultimo.last.tema];
      const pct = st && st.seen ? Math.round((st.correct/st.seen)*100) : null;
      html += `
        <button class="resume" id="btn-resume">
          <span class="k">Seguir donde lo dejaste</span>
          <span class="t">Tema ${ultimo.last.tema} · ${esc(ultimo.last.title||'')}</span>
          <span class="row">
            <span>${esc(ultimo.opo.title)}${pct!==null ? ` · ${pct} % de aciertos` : ''}</span>
            <span class="go">Continuar</span>
          </span>
        </button>
      `;
    }

    html += `
      <div class="chips">
        <div class="chip amber"><b>${fmt(racha)}</b><small>Aciertos seguidos</small></div>
        <div class="chip"><b>${fmt(fallos)}</b><small>Fallos por repasar</small></div>
      </div>
      <h2 class="section-title">Tus oposiciones</h2>
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
      let estado = '';
      if(total === 0) estado = '<span class="pill">Temario · preguntas pronto</span>';
      else if(total < 200) estado = '<span class="pill">En ampliación</span>';
      html += `
        <button class="opo-card" data-slug="${o.slug}">
          <span class="name">${esc(o.title)}</span>
          ${ring(pct)}
          <span class="org">${esc(o.org)}</span>
          <span class="meta">
            ${total ? `<span>${fmt(total)} preguntas</span>` : ''}
            ${t.fails ? `<span>${fmt(t.fails)} fallo${t.fails===1?'':'s'}</span>` : ''}
            ${estado}
          </span>
        </button>
      `;
    });

    html += `</div>
      <h2 class="section-title">Copia de seguridad</h2>
      <div class="note">
        El progreso se guarda en este navegador (${window.OpoStore.backend === 'host' ? 'almacenamiento de la app' : 'almacenamiento local'}).
        Si cambias de móvil u ordenador, exporta el progreso y vuelve a importarlo allí.
      </div>
      <div class="tools-row">
        <button class="mode-btn secondary" id="btn-export">Exportar</button>
        <button class="mode-btn secondary" id="btn-import">Importar</button>
      </div>
      <input type="file" id="file-import" accept="application/json,.json" class="hidden">
    `;

    screen.innerHTML = html;

    if(ultimo){
      document.getElementById('btn-resume').addEventListener('click', ()=>{
        location.href = 'test.html?opo=' + encodeURIComponent(ultimo.opo.slug) + '&tema=' + ultimo.last.tema;
      });
    }
    screen.querySelectorAll('.opo-card').forEach(card=>{
      card.addEventListener('click', ()=>{
        const o = opos.find(x=>x.slug===card.dataset.slug);
        if(o && o.infoPage){ location.href = o.infoPage; return; }
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
    a.download = 'almitest-progreso.json';
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
