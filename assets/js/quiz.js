/* =======================================================
   Almitest · motor de test
   Recibe la oposición por querystring: test.html?opo=<slug>
   ======================================================= */
(function(){
  'use strict';

  const MIX_SIZE = 20; // preguntas del examen mezclado

  let meta = null;      // entrada del catálogo
  let TEMAS = [];       // temario de la oposición activa
  let QUESTIONS = {};   // banco de preguntas de la oposición activa
  let state = { progress:{}, failHistory:[] };
  let quizState = null;

  const screens = {
    home: document.getElementById('screen-home'),
    quiz: document.getElementById('screen-quiz'),
    result: document.getElementById('screen-result')
  };

  /* ---------------- utilidades ---------------- */
  const { esc, fmt, ring, icon } = window.UI;
  function shuffle(arr){
    const a=[...arr];
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }
  function getTemaStats(id){
    return state.progress[id] || {seen:0, correct:0};
  }

  /* Identifica un fallo guardado. Hay bancos con dos preguntas de igual
     enunciado y distractores distintos, así que el enunciado por sí solo no
     basta: se incluye la solución para no confundirlas. Las entradas
     antiguas, guardadas sin `sol`, siguen encajando por enunciado. */
  function mismoFallo(f, tema, enunciado, solucion){
    if(f.tema !== tema || f.q !== enunciado) return false;
    return !f.sol || !solucion || f.sol === solucion;
  }
  function temaTitle(id){
    const t = TEMAS.find(t=>t.id===id);
    return t ? t.title : 'Tema ' + id;
  }
  function saveState(){
    window.OpoStore.save(meta.slug, state);
  }
  function showScreen(name){
    Object.values(screens).forEach(s=>s.classList.add('hidden'));
    screens.home.classList.remove('dos-col');   // solo la portada usa dos columnas
    screens[name].classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    window.scrollTo(0,0);
  }

  /* ---------------- HOME de la oposición ---------------- */
  let filtro = 'todos';

  /* Nivel de un tema en tres puntos. Hace falta volumen además de
     porcentaje: acertar 3 de 3 no es dominar un tema de 250 preguntas. */
  function nivelTema(id){
    const s = getTemaStats(id);
    if(!s.seen) return {puntos:0, pct:null, s};
    const pct = Math.round((s.correct/s.seen)*100);
    let puntos = 1;
    if(pct >= 60 && s.seen >= 10) puntos = 2;
    if(pct >= 85 && s.seen >= 30) puntos = 3;
    return {puntos, pct, s};
  }
  function tieneFallos(id){
    return state.failHistory.some(f=>f.tema===id);
  }

  function renderHome(){
    showScreen('home');
    screens.home.classList.add('dos-col');
    document.querySelector('[data-nav="home"]').classList.add('active');

    let totalSeen=0, totalCorrect=0;
    TEMAS.forEach(t=>{ const s=getTemaStats(t.id); totalSeen+=s.seen; totalCorrect+=s.correct; });
    const pct = totalSeen ? Math.round((totalCorrect/totalSeen)*100) : null;
    const totalQ = window.countQuestions(QUESTIONS);

    // col-a / col-b: en ordenador, resumen a la izquierda y temas a la
    // derecha (ver base.css); en el móvil se apilan.
    screens.home.innerHTML = `
      <div class="col-a">
      <div class="chips three">
        <div class="chip"><b>${fmt(totalSeen)}</b><small>Respondidas</small></div>
        <div class="chip"><b>${pct===null?'—':pct+' %'}</b><small>Aciertos</small></div>
        <div class="chip rose"><b>${fmt(state.failHistory.length)}</b><small>Fallos guardados</small></div>
      </div>
      <button class="mode-btn" id="btn-mix">Examen mezclado <span class="sub">${Math.min(MIX_SIZE,totalQ)} preguntas</span></button>
      <button class="mode-btn secondary" id="btn-repaso-fallos">Repasar mis fallos</button>
      ${(meta.esquemas||[]).length ? `<a class="mode-btn secondary esq-link" href="esquema.html?opo=${encodeURIComponent(meta.slug)}">${icon('doc')}Esquemas de estudio <span class="sub">${meta.esquemas.length} tema${meta.esquemas.length===1?"":"s"} · ver o imprimir</span></a>` : ''}
      </div>
      <div class="col-b">
      <h2 class="section-title">Temas</h2>
      <div class="seg" role="tablist">
        <button data-f="todos" role="tab">Todos</button>
        <button data-f="repasar" role="tab">Por repasar</button>
        <button data-f="dominados" role="tab">Dominados</button>
      </div>
      <div class="tema-list" id="tema-list"></div>
      </div>
    `;

    document.getElementById('btn-mix').addEventListener('click', ()=>startQuiz('mix'));
    document.getElementById('btn-repaso-fallos').addEventListener('click', ()=>startQuiz('fails'));
    screens.home.querySelectorAll('.seg button').forEach(b=>{
      b.addEventListener('click', ()=>{ filtro = b.dataset.f; pintarTemas(); });
    });
    pintarTemas();
  }

  function pintarTemas(){
    screens.home.querySelectorAll('.seg button').forEach(b=>{
      const on = b.dataset.f === filtro;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on);
    });

    const lista = TEMAS.filter(t=>{
      const n = nivelTema(t.id);
      if(filtro === 'repasar') return n.s.seen > 0 && (n.pct < 70 || tieneFallos(t.id));
      if(filtro === 'dominados') return n.puntos === 3;
      return true;
    });

    let html = '';
    lista.forEach(t=>{
      const n = nivelTema(t.id);
      const total = QUESTIONS[t.id] ? QUESTIONS[t.id].length : 0;
      let detalle = total===0 ? 'Sin preguntas todavía' : fmt(total)+' preguntas';
      if(total && n.pct !== null) detalle += ' · ' + n.pct + ' % de aciertos';
      else if(total) detalle += ' · sin empezar';
      const dots = [0,1,2].map(i=>`<i class="${i<n.puntos?'f':''}"></i>`).join('');
      const conEsquema = (meta.esquemas||[]).includes(t.id);
      html += `
        <div class="tema-row${conEsquema?' con-esquema':''}">
          <button class="tema-item" data-tema="${t.id}" ${total===0?'disabled':''}>
            <span class="n">${t.id}</span>
            <span><span class="tt">${esc(t.title)}</span><span class="mm">${detalle}</span></span>
            <span class="dots${n.pct!==null && n.pct<50 ? ' warn':''}" aria-label="Nivel ${n.puntos} de 3">${dots}</span>
          </button>
          ${conEsquema ? `<a class="tema-esq" href="esquema.html?opo=${encodeURIComponent(meta.slug)}&tema=${t.id}" title="Esquema del tema ${t.id}">${icon('doc')}<span>Esquema</span></a>` : ''}
        </div>
      `;
    });
    if(!lista.length){
      html = `<div class="empty-list">${filtro==='dominados'
        ? 'Todavía no hay temas dominados. Un tema cuenta como dominado con al menos 30 preguntas respondidas y un 85 % de aciertos.'
        : 'No hay temas pendientes de repaso. Los temas con fallos guardados o por debajo del 70 % aparecerán aquí.'}</div>`;
    }
    const cont = document.getElementById('tema-list');
    cont.innerHTML = html;
    cont.querySelectorAll('.tema-item[data-tema]').forEach(el=>{
      if(el.disabled) return;
      el.addEventListener('click', ()=>startQuiz('tema', parseInt(el.dataset.tema)));
    });
  }

  /* ---------------- QUIZ ---------------- */
  function startQuiz(mode, temaId){
    let pool = [];
    if(mode==='tema'){
      pool = (QUESTIONS[temaId]||[]).map(q=>({...q, tema:temaId}));
    } else if(mode==='mix'){
      TEMAS.forEach(t=>{
        (QUESTIONS[t.id]||[]).forEach(q=> pool.push({...q, tema:t.id}));
      });
      pool = shuffle(pool).slice(0, MIX_SIZE);
    } else if(mode==='fails'){
      pool = state.failHistory.map(f=>{
        const candidatas = (QUESTIONS[f.tema]||[]).filter(q=>q.q===f.q);
        const original = candidatas.find(q=>!f.sol || q.options[q.correct]===f.sol) || candidatas[0];
        return original ? {...original, tema:f.tema} : null;
      }).filter(Boolean);
      if(pool.length===0){
        alert('Aún no tienes fallos guardados en esta oposición. ¡Sigue practicando!');
        return;
      }
    }
    if(pool.length===0){
      alert('Todavía no hay preguntas en este bloque.');
      return;
    }

    if(mode==='tema'){
      state.last = {tema:temaId, title:temaTitle(temaId), at:new Date().toISOString()};
      saveState();
    }

    quizState = {
      mode, temaId,
      questions: shuffle(pool),
      index:0,
      correctCount:0,
      answered:false,
      sessionFails:[]
    };
    showScreen('quiz');
    renderQuestion();
  }

  function renderQuestion(){
    const qs = quizState.questions;
    const i = quizState.index;
    const q = qs[i];
    quizState.answered = false;

    const pct = Math.round((i/qs.length)*100);
    // Hasta 30 preguntas se ve un segmento por pregunta; con más (un tema
    // entero), una barra continua.
    const barra = qs.length <= 30
      ? `<div class="progress-bar">${qs.map((_,k)=>`<i class="${k<i?'d':k===i?'c':''}"></i>`).join('')}</div>`
      : `<div class="progress-bar cont"><div class="fill" style="width:${pct}%"></div></div>`;

    const optOrder = shuffle(q.options.map((opt,idx)=>({opt,idx})));
    let optHtml = '';
    optOrder.forEach((o,k)=>{
      optHtml += `<button class="option" data-idx="${o.idx}"><span class="letra">${'ABCD'[k]}</span><span>${esc(o.opt)}</span></button>`;
    });

    screens.quiz.innerHTML = `
      ${barra}
      <div class="quiz-top">
        <span>${i+1} de ${qs.length} · ${quizState.correctCount} acierto${quizState.correctCount===1?'':'s'}</span>
        ${rachaHtml()}
      </div>
      <div class="kbd-hint">Teclas A, B, C, D para responder · Intro para seguir</div>
      <div class="question-box">
        <div class="question-tema">Tema ${q.tema} · ${esc(temaTitle(q.tema))}</div>
        <div class="question-text">${esc(q.q)}</div>
      </div>
      <div class="options">${optHtml}</div>
      <div id="explain-box"></div>
    `;

    screens.quiz.querySelectorAll('.option').forEach(btn=>{
      btn.addEventListener('click', ()=>selectOption(btn, q));
    });
  }

  function selectOption(btn, q){
    if(quizState.answered) return;
    quizState.answered = true;
    const chosenIdx = parseInt(btn.dataset.idx);
    const isCorrect = chosenIdx === q.correct;

    screens.quiz.querySelectorAll('.option').forEach(o=>{
      o.classList.add('disabled');
      const idx = parseInt(o.dataset.idx);
      if(idx === q.correct){ o.classList.add('correct'); o.insertAdjacentHTML('beforeend','<em>Correcta</em>'); }
      else if(idx === chosenIdx){ o.classList.add('wrong'); o.insertAdjacentHTML('beforeend','<em>Tu respuesta</em>'); }
    });

    if(isCorrect) quizState.correctCount++;
    else quizState.sessionFails.push({tema:q.tema, q:q.q, chosen:q.options[chosenIdx], correct:q.options[q.correct]});

    /* racha de aciertos seguidos (persistente, ver storage.js) */
    let hito = null;
    if(isCorrect){
      state.streak = (state.streak || 0) + 1;
      if(state.streak > (state.bestStreak || 0)) state.bestStreak = state.streak;
      hito = hitoDeRacha(state.streak);
    } else {
      state.streak = 0;
    }

    // progreso persistente
    const s = state.progress[q.tema] || {seen:0, correct:0};
    s.seen++; if(isCorrect) s.correct++;
    state.progress[q.tema] = s;

    const hoy = window.OpoStore.hoy();
    if(!state.today || state.today.date !== hoy) state.today = {date:hoy, n:0};
    state.today.n++;

    // histórico de fallos (una entrada por pregunta)
    const solucion = q.options[q.correct];
    if(!isCorrect){
      if(!state.failHistory.some(f=>mismoFallo(f, q.tema, q.q, solucion))){
        state.failHistory.push({tema:q.tema, q:q.q, sol:solucion});
      }
    } else {
      state.failHistory = state.failHistory.filter(f=>!mismoFallo(f, q.tema, q.q, solucion));
    }
    saveState();

    /* La cita de la fuente va FUERA del texto recortable: si hay que cortar
       la explicación para que quepa, el artículo citado no debe perderse. */
    document.getElementById('explain-box').innerHTML = `
      <div class="explain">
        <div class="verdict ${isCorrect?'ok':'ko'}">${isCorrect ? 'Correcto' : 'Incorrecto'}</div>
        ${q.fuente ? `<div class="fuente">${esc(q.fuente)}</div>` : ''}
        <div class="explain-text">${esc(q.exp||'')}</div>
      </div>
      <button class="next-btn" id="btn-next">${quizState.index+1 < quizState.questions.length ? 'Siguiente' : 'Ver resultados'}</button>
    `;
    document.getElementById('btn-next').addEventListener('click', nextQuestion);

    ajustarExplicacion();
    if(hito) celebrarRacha(hito);
  }

  /* Recorta la explicación lo justo para que "Siguiente" quede siempre
     visible sin desplazar la pantalla. Se mide el desbordamiento real del
     documento en vez de suponer una altura fija, porque depende del móvil,
     de lo largo del enunciado y de las opciones. Con el banco actual salta
     muy pocas veces: la explicación mediana son ~170 caracteres. */
  const MIN_EXPLICACION = 38; // px: no recortar por debajo de ~2 líneas

  function ajustarExplicacion(){
    const texto = screens.quiz.querySelector('.explain-text');
    if(!texto) return;

    texto.style.maxHeight = '';
    texto.classList.remove('recortada');

    const sobra = document.documentElement.scrollHeight - window.innerHeight;
    if(sobra <= 0) return;                       // ya cabe todo: nada que hacer

    const alto = texto.getBoundingClientRect().height;
    const objetivo = alto - sobra;
    // Solo se recorta si con eso se elimina de verdad el desplazamiento. Si el
    // desbordamiento lo causan el enunciado y las opciones (preguntas largas en
    // pantallas pequeñas), recortar la explicación no evitaría el scroll: sería
    // perder texto de estudio a cambio de nada, así que se deja íntegra.
    if(objetivo < MIN_EXPLICACION) return;

    texto.style.maxHeight = objetivo + 'px';
    texto.classList.add('recortada');
  }

  // Si cambia el tamaño o se gira el móvil, se recalcula el recorte.
  let reajuste;
  window.addEventListener('resize', ()=>{
    clearTimeout(reajuste);
    reajuste = setTimeout(()=>{ if(quizState && quizState.answered) ajustarExplicacion(); }, 120);
  });

  /* ---------- rachas de aciertos ----------
     Los hitos se celebran una vez por racha. Pasados los 100 se vuelve a
     celebrar cada 100, para que una racha muy larga siga teniendo premio. */
  function hitoDeRacha(n){
    const HITOS = {
      10:  {titulo:'10 seguidas',  frase:'Estás entrando en racha. Sigue así.',        fiesta:false},
      25:  {titulo:'25 seguidas',  frase:'Esto ya no es suerte: te lo sabes.',          fiesta:false},
      50:  {titulo:'50 seguidas',  frase:'Media centena sin fallar. Vas muy en serio.', fiesta:false}
    };
    if(HITOS[n]) return Object.assign({n}, HITOS[n]);
    if(n >= 100 && n % 100 === 0){
      return {
        n,
        titulo:`${n} seguidas`,
        frase: n === 100
          ? 'Cien aciertos sin un solo fallo. Esto hay que celebrarlo.'
          : `${n} aciertos seguidos. Esto ya es de otro nivel.`,
        fiesta:true
      };
    }
    return null;
  }

  function rachaHtml(){
    const n = state.streak || 0;
    if(n < 3) return '';                       // por debajo de 3 no es una racha
    return `<span class="racha" title="Aciertos seguidos">${n} seguidas</span>`;
  }

  function celebrarRacha(hito){
    // Vibración: solo el hito grande, y solo si el dispositivo lo soporta
    // (Android/Chrome; en iOS la API no existe y se ignora sin romper nada).
    if(hito.fiesta && navigator.vibrate){
      try{ navigator.vibrate([0,120,70,120,70,260]); }catch(e){}
    }

    const overlay = document.createElement('div');
    overlay.className = 'racha-overlay' + (hito.fiesta ? ' fiesta' : '');
    overlay.innerHTML = `
      ${hito.fiesta ? '<div class="confeti" aria-hidden="true"></div>' : ''}
      <div class="racha-card" role="alert">
        <div class="racha-num">${hito.n}</div>
        <div class="racha-titulo">${esc(hito.titulo)}</div>
        <div class="racha-frase">${esc(hito.frase)}</div>
        ${state.bestStreak > hito.n ? `<div class="racha-record">Tu récord: ${state.bestStreak}</div>` : '<div class="racha-record">Nuevo récord</div>'}
        <button class="racha-btn" type="button">${hito.fiesta ? 'Seguir con la racha' : 'Seguir'}</button>
      </div>
    `;
    document.body.appendChild(overlay);

    if(hito.fiesta) lanzarConfeti(overlay.querySelector('.confeti'));

    let cerrado = false;
    function cerrar(){
      if(cerrado) return;
      cerrado = true;
      clearTimeout(auto);
      overlay.classList.add('salir');
      setTimeout(()=>overlay.remove(), 260);
    }
    overlay.querySelector('.racha-btn').addEventListener('click', cerrar);
    overlay.addEventListener('click', e=>{ if(e.target === overlay) cerrar(); });
    // Los hitos pequeños se quitan solos para no cortar el ritmo del test;
    // la fiesta de los 100 espera a que se cierre a mano.
    const auto = hito.fiesta ? null : setTimeout(cerrar, 2600);
  }

  function lanzarConfeti(contenedor){
    if(!contenedor) return;
    const COLORES = ['#0f766e','#2bb3a6','#b45309','#f0a14a','#15803d','#d6eeea'];
    let html = '';
    for(let i=0;i<110;i++){
      const izq = Math.random()*100;
      const dur = 2.4 + Math.random()*2.2;
      const retraso = Math.random()*0.9;
      const giro = Math.random()*720 - 360;
      const color = COLORES[i % COLORES.length];
      const ancho = 6 + Math.random()*6;
      const alto = 9 + Math.random()*10;
      const redondo = Math.random() < 0.25 ? '50%' : '2px';
      html += `<i style="left:${izq}%;background:${color};width:${ancho}px;height:${alto}px;border-radius:${redondo};`
           +  `animation-duration:${dur}s;animation-delay:${retraso}s;--giro:${giro}deg"></i>`;
    }
    contenedor.innerHTML = html;
  }

  function nextQuestion(){
    quizState.index++;
    if(quizState.index >= quizState.questions.length) renderResult();
    else renderQuestion();
  }

  function renderResult(){
    showScreen('result');
    const total = quizState.questions.length;
    const correct = quizState.correctCount;
    const pct = Math.round((correct/total)*100);

    let failHtml = '';
    if(quizState.sessionFails.length){
      failHtml = `<h2 class="section-title">Preguntas a repasar</h2><div class="fail-list">`;
      quizState.sessionFails.forEach(f=>{
        failHtml += `<div class="fitem"><span><b>Tema ${f.tema}.</b> ${esc(f.q)}</span><span class="tu">Tu respuesta: ${esc(f.chosen)}</span><span class="ok">Correcta: ${esc(f.correct)}</span></div>`;
      });
      failHtml += `</div>`;
    }

    screens.result.innerHTML = `
      ${ring(pct, {cls:'ring result-ring'}).replace(/<text[^>]*>\d+<\/text>/,
        `<text class="pct" x="20" y="21" text-anchor="middle" font-size="9">${pct} %</text><text class="lbl" x="20" y="27.5" text-anchor="middle" font-size="3.6">${correct} de ${total}</text>`)}
      <div class="result-summary">${pct>=80?'Excelente dominio del tema':pct>=60?'Vas bien, sigue repasando':'Toca repasar más este bloque'}</div>
      <div class="racha-resumen">
        <span>Racha actual <b>${state.streak||0}</b></span>
        <span>Tu récord <b>${state.bestStreak||0}</b></span>
      </div>
      ${failHtml}
      <button class="mode-btn" id="btn-again">Repetir</button>
      <button class="mode-btn secondary" id="btn-home">Volver a los temas</button>
    `;
    document.getElementById('btn-again').addEventListener('click', ()=>{
      if(quizState.mode==='tema') startQuiz('tema', quizState.temaId);
      else startQuiz(quizState.mode);
    });
    document.getElementById('btn-home').addEventListener('click', renderHome);
  }

  /* ---------------- FALLOS Y PROGRESO ---------------- */
  function renderRepaso(){
    showScreen('home');
    document.querySelector('[data-nav="repaso"]').classList.add('active');
    let html = `<h2 class="section-title">Tus fallos guardados (${state.failHistory.length})</h2>`;
    if(state.failHistory.length===0){
      html += `<div class="empty-list">Aún no tienes fallos guardados. Las preguntas que falles se guardan aquí para repasarlas.</div>`;
    } else {
      html += `<button class="mode-btn" id="btn-start-fails">Repasar ${state.failHistory.length} fallos</button>`;
      html += `<div class="tema-list">`;
      state.failHistory.forEach(f=>{
        html += `<div class="tema-item plain"><span><span class="mm">Tema ${f.tema}</span><span class="tt">${esc(f.q)}</span></span></div>`;
      });
      html += `</div>`;
    }
    screens.home.innerHTML = html;
    const b = document.getElementById('btn-start-fails');
    if(b) b.addEventListener('click', ()=>startQuiz('fails'));
  }

  function renderStats(){
    showScreen('home');
    document.querySelector('[data-nav="stats"]').classList.add('active');
    let html = `<h2 class="section-title">Progreso por tema</h2><div class="tema-list">`;
    TEMAS.forEach(t=>{
      const n = nivelTema(t.id);
      const dots = [0,1,2].map(i=>`<i class="${i<n.puntos?'f':''}"></i>`).join('');
      html += `
        <div class="tema-item" style="cursor:default;">
          <span class="n">${t.id}</span>
          <span><span class="tt">${esc(t.title)}</span><span class="mm">${n.pct===null?'Sin datos':n.pct+' % · '+n.s.correct+' de '+n.s.seen}</span></span>
          <span class="dots${n.pct!==null && n.pct<50 ? ' warn':''}">${dots}</span>
        </div>
      `;
    });
    html += `</div>
      <button class="mode-btn danger" id="btn-reset">Borrar mi progreso en esta oposición</button>`;
    screens.home.innerHTML = html;

    document.getElementById('btn-reset').addEventListener('click', async ()=>{
      if(!confirm('Se borrará tu progreso y tus fallos guardados de esta oposición. ¿Seguro?')) return;
      await window.OpoStore.reset(meta.slug);
      state = { progress:{}, failHistory:[] };
      renderHome();
    });
  }

  /* ---------------- TECLADO (ordenador) ----------------
     A-D o 1-4 eligen opción en el orden en que se ven; Intro o la flecha
     derecha pasan a la siguiente. No actúa con la celebración de racha
     abierta ni fuera de la pantalla de pregunta. */
  document.addEventListener('keydown', ev=>{
    if(ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if(screens.quiz.classList.contains('hidden') || document.querySelector('.racha-overlay')) return;
    const k = ev.key.toLowerCase();
    const pos = 'abcd'.indexOf(k) >= 0 ? 'abcd'.indexOf(k) : '1234'.indexOf(k);
    if(pos >= 0 && k.length === 1){
      const opts = screens.quiz.querySelectorAll('.option');
      if(opts[pos] && !quizState.answered){ ev.preventDefault(); opts[pos].click(); }
      return;
    }
    if(k === 'enter' || k === 'arrowright'){
      const next = document.getElementById('btn-next');
      if(next){ ev.preventDefault(); next.click(); }
    }
  });

  /* ---------------- NAVEGACIÓN ---------------- */
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(!meta) return;
      const nav = btn.dataset.nav;
      if(nav==='home') renderHome();
      if(nav==='repaso') renderRepaso();
      if(nav==='stats') renderStats();
    });
  });
  document.getElementById('btn-back').addEventListener('click', ()=>{ location.href = 'index.html'; });

  /* ---------------- ARRANQUE ---------------- */
  (async function init(){
    const slug = new URLSearchParams(location.search).get('opo');
    meta = slug ? window.getOposicion(slug) : null;

    if(!meta){
      document.getElementById('opo-title').textContent = 'Oposición no encontrada';
      screens.home.innerHTML = `<div class="loading">No se ha indicado una oposición válida.<br><br>
        <button class="mode-btn" onclick="location.href='index.html'">Ir a mis oposiciones</button></div>`;
      return;
    }

    document.title = 'Almitest · ' + meta.title;
    document.getElementById('opo-title').textContent = meta.title;
    document.getElementById('opo-sub').textContent = meta.org;

    try{
      const data = await window.loadOposicionData(meta.slug);
      TEMAS = data.temas;
      QUESTIONS = data.questions;
    }catch(e){
      screens.home.innerHTML = `<div class="loading">No se pudieron cargar las preguntas.<br>${esc(e.message)}</div>`;
      return;
    }

    state = await window.OpoStore.load(meta.slug);
    window.OpoStore.setCount(meta.slug, window.countQuestions(QUESTIONS));
    document.getElementById('opo-sub').textContent = meta.org + ' · ' + fmt(window.countQuestions(QUESTIONS)) + ' preguntas';
    renderHome();

    // test.html?opo=...&tema=N viene de "Seguir donde lo dejaste" en el inicio.
    const temaPedido = parseInt(new URLSearchParams(location.search).get('tema'));
    if(temaPedido && (QUESTIONS[temaPedido]||[]).length) startQuiz('tema', temaPedido);
  })();
})();
