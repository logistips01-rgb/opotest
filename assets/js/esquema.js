/* =======================================================
   Almitest · esquemas de estudio (esquema.html)
   -------------------------------------------------------
   esquema.html?opo=<slug>             índice de esquemas
   esquema.html?opo=<slug>&tema=N      un esquema
   esquema.html?opo=<slug>&tema=todos  todos seguidos, para imprimir
   Los datos están en data/esquemas/<slug>/tNN.js (formato en
   data/esquemas/FORMATO.md) y se cargan con <script>, como los
   bancos de preguntas, para que funcione también en file://.
   ======================================================= */
(function(){
  'use strict';

  const { esc, icon } = window.UI;
  const params = new URLSearchParams(location.search);
  const slug = params.get('opo');
  const temaParam = params.get('tema');
  const meta = slug ? window.getOposicion(slug) : null;
  const main = document.getElementById('esq');

  const esquemas = {};
  window.registerEsquema = function(s, tema, datos){
    if(s === slug) esquemas[tema] = datos;
  };

  function fichero(tema){
    return `data/esquemas/${slug}/t${String(tema).padStart(2,'0')}.js`;
  }
  function cargar(tema){
    if(esquemas[tema]) return Promise.resolve(esquemas[tema]);
    return new Promise((resolve, reject)=>{
      const el = document.createElement('script');
      el.src = fichero(tema);
      el.onload = ()=> esquemas[tema] ? resolve(esquemas[tema]) : reject(new Error('El esquema del tema ' + tema + ' no se registró.'));
      el.onerror = ()=> reject(new Error('No se pudo cargar el esquema del tema ' + tema + '.'));
      document.head.appendChild(el);
    });
  }

  /* ---------- texto con marcas ----------
     El contenido es nuestro y solo admite <b>, <i> y <br>
     (tools/validar-esquemas.js lo comprueba), así que se inserta tal cual,
     cambiando únicamente {{examen:AAAA}} por su marca. */
  function marcas(s){
    return String(s).replace(/\{\{examen:(\d{4})\}\}/g, (_, y)=>` <span class="es-exam">Examen ${y}</span>`);
  }
  function texto(x){
    if(typeof x === 'string') return marcas(x);
    let h = marcas(x.t);
    if(x.examen) h += ` <span class="es-exam">Examen ${esc(x.examen)}</span>`;
    if(x.a) h += ` <span class="es-art">${esc(x.a)}</span>`;
    return h;
  }
  function listaHTML(items, cls){
    return `<ul class="es-list${cls?' '+cls:''}">${items.map(x=>`<li>${texto(x)}</li>`).join('')}</ul>`;
  }

  function bloque(b){
    switch(b.tipo){
      case 'lista':
        return `<div class="es-box${b.tinte?' tint':''}">${listaHTML(b.items)}</div>`;
      case 'tabla':
        return `<div class="es-table"><table>
          <thead><tr>${b.cab.map(c=>`<th>${marcas(c)}</th>`).join('')}</tr></thead>
          <tbody>${b.filas.map(f=>`<tr>${f.map(c=>`<td>${marcas(c)}</td>`).join('')}</tr>`).join('')}</tbody>
        </table></div>`;
      case 'columnas':
        return `<div class="es-two">${b.cols.map(c=>`
          <div class="es-col">
            <h4>${marcas(c.titulo)}</h4>
            ${c.items ? listaHTML(c.items) : ''}
            ${(c.reglas||[]).map(r=>`<div class="es-rule">${texto(r)}</div>`).join('')}
          </div>`).join('')}</div>`;
      case 'ejemplo':
        return `<div class="es-ej"><span class="k">Ejemplo</span>${marcas(b.t)}</div>`;
      default:
        return '';
    }
  }

  function esquemaHTML(tema, e){
    return `
    <article class="es-doc" id="tema-${tema}">
      <div class="es-hero">
        <p class="es-eyebrow">${esc(meta.title)} · Tema ${tema}</p>
        <h2 class="es-title">${esc(e.titulo)}</h2>
        <p class="es-epi">Epígrafe oficial: «${esc(e.epigrafe)}»</p>
        <div class="es-tags">${e.etiquetas.map(t=>`<span>${marcas(t)}</span>`).join('')}</div>
      </div>

      <section class="es-sec">
        <h3>Lo esencial</h3>
        <div class="es-box">${listaHTML(e.esencial)}</div>
      </section>

      <section class="es-sec">
        <h3>Mapa del tema</h3>
        <div class="es-map">${e.mapa.map(m=>`
          <div class="es-cap">
            <h4>${esc(m.titulo)}${m.rango?` <small>${esc(m.rango)}</small>`:''}</h4>
            <div class="es-arts">${m.items.map(([n, nombre])=>`<span><b>${esc(n)}</b>${esc(nombre)}</span>`).join('')}</div>
          </div>`).join('')}
        </div>
      </section>

      <section class="es-sec">
        <h3>Cifras que caen</h3>
        <div class="es-nums">${e.cifras.map(c=>`
          <div class="es-num"><span class="v">${esc(c.v)}</span><span class="d">${marcas(c.d)}</span><span class="a">${esc(c.a)}</span></div>`).join('')}
        </div>
      </section>

      ${e.secciones.map(s=>`
      <section class="es-sec">
        <h3>${esc(s.titulo)}${s.a?` <span class="es-h-art">${esc(s.a)}</span>`:''}</h3>
        ${s.bloques.map(bloque).join('')}
      </section>`).join('')}

      <section class="es-sec">
        <h3>Trampas típicas</h3>
        <div class="es-traps">${e.trampas.map(t=>`
          <div class="es-trap"><span class="no">No</span><span class="x">${marcas(t.x)}</span><span class="ok">${marcas(t.ok)} <span class="es-art">${esc(t.a)}</span></span></div>`).join('')}
        </div>
      </section>

      <footer class="es-foot">
        <p><b>Fuentes:</b> ${e.fuentes.map(marcas).join(' · ')}</p>
        ${e.examenes && e.examenes.length ? `<p><b>En exámenes oficiales:</b> ${e.examenes.map(marcas).join(' · ')}</p>` : ''}
      </footer>
    </article>`;
  }

  function botonImprimir(){
    return `<button class="es-print" id="btn-print">${icon('print')}<span>Imprimir</span></button>`;
  }

  /* ---------- vistas ---------- */
  async function vistaTema(tema){
    const lista = meta.esquemas || [];
    if(!lista.includes(tema)){
      main.innerHTML = `<div class="loading">El tema ${tema} todavía no tiene esquema.</div>`;
      return;
    }
    const e = await cargar(tema);
    document.title = `Esquema tema ${tema} · Almitest`;
    document.getElementById('esq-sub').textContent = `Tema ${tema} · ${e.titulo}`;
    const i = lista.indexOf(tema);
    const prev = lista[i-1], next = lista[i+1];
    main.innerHTML = `
      <div class="es-actions">
        <a class="es-practicar" href="test.html?opo=${encodeURIComponent(slug)}&tema=${tema}">Practicar este tema</a>
        ${botonImprimir()}
      </div>
      ${esquemaHTML(tema, e)}
      <nav class="es-nav">
        ${prev ? `<a href="esquema.html?opo=${encodeURIComponent(slug)}&tema=${prev}">${icon('back')}<span>Tema ${prev}</span></a>` : '<span></span>'}
        <a href="esquema.html?opo=${encodeURIComponent(slug)}">Todos los esquemas</a>
        ${next ? `<a class="sig" href="esquema.html?opo=${encodeURIComponent(slug)}&tema=${next}"><span>Tema ${next}</span>${icon('back')}</a>` : '<span></span>'}
      </nav>`;
    document.getElementById('btn-print').addEventListener('click', ()=>window.print());
  }

  async function vistaTodos(){
    const lista = meta.esquemas || [];
    document.title = `Esquemas · ${meta.title} · Almitest`;
    document.getElementById('esq-sub').textContent = `${lista.length} esquemas`;
    main.innerHTML = '<div class="loading">Preparando los esquemas…</div>';
    const docs = await Promise.all(lista.map(t=>cargar(t).then(e=>esquemaHTML(t, e))));
    main.innerHTML = `
      <div class="es-actions">
        <a class="es-practicar secondary" href="esquema.html?opo=${encodeURIComponent(slug)}">Volver al índice</a>
        ${botonImprimir()}
      </div>
      <div class="es-todos">${docs.join('')}</div>`;
    document.getElementById('btn-print').addEventListener('click', ()=>window.print());
    if(params.get('imprimir') === '1') setTimeout(()=>window.print(), 400);
  }

  async function vistaIndice(){
    const lista = meta.esquemas || [];
    document.title = `Esquemas · ${meta.title} · Almitest`;
    document.getElementById('esq-sub').textContent = `${lista.length} esquema${lista.length===1?'':'s'} de estudio`;
    const datos = await Promise.all(lista.map(t=>cargar(t).then(e=>({t, e})).catch(()=>null)));
    main.innerHTML = `
      <p class="es-intro">Resúmenes de estudio rápido sacados del texto oficial de cada norma. Se pueden leer aquí o imprimir en A4.</p>
      <a class="mode-btn" href="esquema.html?opo=${encodeURIComponent(slug)}&tema=todos&imprimir=1">Imprimir todos <span class="sub">${lista.length} temas</span></a>
      <div class="tema-list">${datos.filter(Boolean).map(({t, e})=>`
        <a class="tema-item" href="esquema.html?opo=${encodeURIComponent(slug)}&tema=${t}">
          <span class="n">${t}</span>
          <span><span class="tt">${esc(e.titulo)}</span><span class="mm">${esc(e.etiquetas.join(' · '))}</span></span>
          <span class="tema-go">${icon('doc')}</span>
        </a>`).join('')}
      </div>`;
  }

  document.getElementById('btn-back').addEventListener('click', ()=>{
    if(temaParam && temaParam !== 'todos' && document.referrer.includes('esquema.html')) history.back();
    else location.href = slug ? 'test.html?opo=' + encodeURIComponent(slug) : 'index.html';
  });

  (async function init(){
    if(!meta){
      main.innerHTML = '<div class="loading">No se ha indicado una oposición válida.</div>';
      return;
    }
    document.getElementById('esq-title').textContent = 'Esquemas · ' + meta.title;
    try{
      if(temaParam === 'todos') await vistaTodos();
      else if(temaParam) await vistaTema(parseInt(temaParam));
      else await vistaIndice();
    }catch(e){
      main.innerHTML = `<div class="loading">${esc(e.message)}</div>`;
    }
  })();
})();
