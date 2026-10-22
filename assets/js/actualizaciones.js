/* =======================================================
   Almitest · actualizaciones (actualizaciones.html?opo=<slug>)
   -------------------------------------------------------
   Muestra cuándo se comprobó la normativa contra el BOE y el
   registro de preguntas cambiadas (data/actualizaciones.js):
   cambios de ley, correcciones y avisos.
   ======================================================= */
(function(){
  'use strict';

  const { esc, fmt, fechaCorta } = window.UI;
  const slug = new URLSearchParams(location.search).get('opo') || 'aux-admin-zaragoza';
  const meta = window.getOposicion(slug);
  const main = document.getElementById('act');
  const entradas = ((window.ACTUALIZACIONES||{})[slug]) || [];
  const norm = window.NORMATIVA;

  const TIPOS = {
    ley: {txt:'Cambio de ley', cls:'teal'},
    correccion: {txt:'Corrección', cls:'rose'},
    aviso: {txt:'Aviso', cls:'amber'}
  };
  let filtro = 'todo';

  document.getElementById('btn-back').addEventListener('click', ()=>{
    location.href = 'test.html?opo=' + encodeURIComponent(slug);
  });
  document.getElementById('act-sub').textContent = meta ? meta.title + ' · ' + meta.org : '';

  function totalPreguntas(lista){
    const s = new Set();
    lista.forEach(e=>(e.preguntas||[]).forEach(p=>s.add(p.q)));
    return s.size;
  }

  function preguntaHTML(e, p){
    const ops = (p.options||[]).map(o=>{
      let cls = '', tag = '';
      if(e.tipo === 'aviso'){
        if(o === p.antes){ cls = 'oficial'; tag = 'Respuesta del examen'; }
      } else {
        if(o === p.ahora){ cls = 'ahora'; tag = 'Ahora'; }
        else if(o === p.antes){ cls = 'antes'; tag = 'Antes'; }
      }
      return `<li class="${cls}"><span>${esc(o)}</span>${tag ? `<em>${tag}</em>` : ''}</li>`;
    }).join('');
    const ley = e.tipo === 'aviso' && p.ahora
      ? `<p class="act-ley"><b>Lo que dice la ley:</b> ${esc(p.ahora)}</p>` : '';
    return `
      <div class="act-q">
        <p class="act-enun"><span class="pill">Tema ${p.tema}</span> ${esc(p.q)}</p>
        <ul class="act-ops">${ops}</ul>
        ${ley}
      </div>`;
  }

  function pintar(){
    const lista = entradas.filter(e=>filtro === 'todo' || e.tipo === filtro);
    const n = totalPreguntas(entradas);

    let html = '';
    if(norm){
      html += `
        <div class="act-norm">
          <p class="k">Normativa comprobada</p>
          <p class="t">${fechaCorta(norm.comprobado)}</p>
          <p class="d">Revisamos cada mes las ${norm.normas.length} normas del temario contra el texto consolidado del BOE, artículo por artículo. Las bases exigen la normativa vigente el día del examen.</p>
          <details>
            <summary>Ver normas y fecha de su última modificación</summary>
            <ul>${norm.normas.slice().sort((a,b)=>b.ultima.localeCompare(a.ultima)).map(x=>`<li><span>${esc(x.nombre)}</span><b>${fechaCorta(x.ultima)}</b></li>`).join('')}</ul>
            ${norm.sinConsolidado && norm.sinConsolidado.length ? `<p class="d">Sin texto consolidado en el BOE (se comprueban a mano): ${norm.sinConsolidado.map(esc).join(' · ')}.</p>` : ''}
          </details>
        </div>`;
    }

    if(n){
      html += `<a class="mode-btn" href="test.html?opo=${encodeURIComponent(slug)}&modo=cambios">Practicar las preguntas cambiadas <span class="sub">${fmt(n)}</span></a>`;
    }

    html += `
      <div class="seg" role="tablist">
        <button data-f="todo" role="tab">Todo</button>
        <button data-f="ley" role="tab">Leyes</button>
        <button data-f="correccion" role="tab">Correcciones</button>
        <button data-f="aviso" role="tab">Avisos</button>
      </div>`;

    if(!lista.length){
      html += `<div class="empty-list">${filtro === 'ley'
        ? 'Todavía no ha cambiado ninguna norma desde que se hizo el banco de preguntas. Cuando cambie alguna, aquí verás qué preguntas se han actualizado.'
        : 'No hay nada en este apartado.'}</div>`;
    }

    lista.forEach((e, i)=>{
      const t = TIPOS[e.tipo] || {txt:e.tipo, cls:''};
      const np = (e.preguntas||[]).length;
      html += `
        <article class="act-entry">
          <div class="act-head">
            <span class="act-tipo ${t.cls}">${t.txt}</span>
            <span class="act-fecha">${fechaCorta(e.fecha)}</span>
          </div>
          <h3>${esc(e.titulo)}</h3>
          <p class="act-txt">${esc(e.texto)}</p>
          ${np ? `<details ${i === 0 && np <= 3 ? 'open' : ''}><summary>${np} pregunta${np===1?'':'s'}</summary>${e.preguntas.map(p=>preguntaHTML(e, p)).join('')}</details>` : ''}
        </article>`;
    });

    main.innerHTML = html;
    main.querySelectorAll('.seg button').forEach(b=>{
      const on = b.dataset.f === filtro;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on);
      b.addEventListener('click', ()=>{ filtro = b.dataset.f; pintar(); });
    });
  }

  pintar();
})();
