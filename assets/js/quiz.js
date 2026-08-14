/* =======================================================
   OpoTest · motor de test
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
  function esc(s){
    return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  }
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
    screens[name].classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
    window.scrollTo(0,0);
  }

  /* ---------------- HOME de la oposición ---------------- */
  function renderHome(){
    showScreen('home');
    document.querySelector('[data-nav="home"]').classList.add('active');

    let totalSeen=0, totalCorrect=0;
    TEMAS.forEach(t=>{ const s=getTemaStats(t.id); totalSeen+=s.seen; totalCorrect+=s.correct; });
    const pct = totalSeen ? Math.round((totalCorrect/totalSeen)*100) : 0;
    const totalQ = window.countQuestions(QUESTIONS);

    let html = `
      <div class="stats-row">
        <div class="stat-card"><div class="num">${totalSeen}</div><div class="lbl">Preguntas hechas</div></div>
        <div class="stat-card"><div class="num">${pct}%</div><div class="lbl">Aciertos</div></div>
        <div class="stat-card"><div class="num">${state.failHistory.length}</div><div class="lbl">Fallos guardados</div></div>
      </div>
      <button class="mode-btn" id="btn-mix">🎲 Examen mezclado (${Math.min(MIX_SIZE,totalQ)} preguntas)</button>
      <button class="mode-btn secondary" id="btn-repaso-fallos">🔁 Repasar solo mis fallos</button>
      <h2 class="section-title">Elige un tema</h2>
      <div class="tema-list">
    `;

    TEMAS.forEach(t=>{
      const s = getTemaStats(t.id);
      const pctT = s.seen ? Math.round((s.correct/s.seen)*100) : null;
      const total = QUESTIONS[t.id] ? QUESTIONS[t.id].length : 0;
      html += `
        <button class="tema-item" data-tema="${t.id}" ${total===0?'disabled':''}>
          <span class="t-title">Tema ${t.id}. ${esc(t.title)}</span>
          <span class="t-right">
            <span class="t-count">${total===0?'sin preguntas':total+' preg.'}</span>
            ${pctT!==null ? `<span class="t-progress ${pctT>=70?'ok-color':'warn-color'}">${pctT}%</span>` : ''}
          </span>
        </button>
      `;
    });
    html += `</div>`;
    screens.home.innerHTML = html;

    document.getElementById('btn-mix').addEventListener('click', ()=>startQuiz('mix'));
    document.getElementById('btn-repaso-fallos').addEventListener('click', ()=>startQuiz('fails'));
    screens.home.querySelectorAll('.tema-item[data-tema]').forEach(el=>{
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

    const optOrder = shuffle(q.options.map((opt,idx)=>({opt,idx})));
    let optHtml = '';
    optOrder.forEach(o=>{
      optHtml += `<button class="option" data-idx="${o.idx}">${esc(o.opt)}</button>`;
    });

    screens.quiz.innerHTML = `
      <div class="quiz-top">
        <span>Pregunta ${i+1} de ${qs.length}</span>
        <span>${rachaHtml()}✅ ${quizState.correctCount}</span>
      </div>
      <div class="progress-bar"><div class="fill" style="width:${pct}%"></div></div>
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
      if(idx === q.correct) o.classList.add('correct');
      else if(idx === chosenIdx) o.classList.add('wrong');
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

    document.getElementById('explain-box').innerHTML = `
      <div class="explain">${isCorrect ? '✅ ¡Correcto! ' : '❌ Incorrecto. '}${esc(q.exp||'')}${
        q.fuente ? `<div class="fuente">📖 ${esc(q.fuente)}</div>` : ''
      }</div>
      <button class="next-btn" id="btn-next">${quizState.index+1 < quizState.questions.length ? 'Siguiente →' : 'Ver resultados'}</button>
    `;
    document.getElementById('btn-next').addEventListener('click', nextQuestion);

    if(hito) celebrarRacha(hito);
  }

  /* ---------- rachas de aciertos ----------
     Los hitos se celebran una vez por racha. Pasados los 100 se vuelve a
     celebrar cada 100, para que una racha muy larga siga teniendo premio. */
  function hitoDeRacha(n){
    const HITOS = {
      10:  {emoji:'🔥', titulo:'¡10 seguidas!',  frase:'Estás entrando en racha. Sigue así.',        fiesta:false},
      25:  {emoji:'⚡', titulo:'¡25 seguidas!',  frase:'Esto ya no es suerte: te lo sabes.',          fiesta:false},
      50:  {emoji:'🏆', titulo:'¡50 seguidas!',  frase:'Media centena sin fallar. Vas muy en serio.', fiesta:false}
    };
    if(HITOS[n]) return Object.assign({n}, HITOS[n]);
    if(n >= 100 && n % 100 === 0){
      return {
        n,
        emoji:'🎉',
        titulo:`¡${n} SEGUIDAS!`,
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
    return `<span class="racha" title="Aciertos seguidos">🔥 ${n}</span> `;
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
        <div class="racha-emoji">${hito.emoji}</div>
        <div class="racha-num">${hito.n}</div>
        <div class="racha-titulo">${esc(hito.titulo)}</div>
        <div class="racha-frase">${esc(hito.frase)}</div>
        ${state.bestStreak > hito.n ? `<div class="racha-record">Tu récord: ${state.bestStreak}</div>` : '<div class="racha-record">¡Nuevo récord!</div>'}
        <button class="racha-btn" type="button">${hito.fiesta ? '¡Vamos! 🚀' : 'Seguir'}</button>
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
    const COLORES = ['#c8102e','#ffd200','#2a9d8f','#1d3557','#ff7b00','#7b5cff'];
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
        failHtml += `<div class="fitem"><b>T${f.tema}:</b> ${esc(f.q)}<br><span style="color:#a3182b;">Tu respuesta: ${esc(f.chosen)}</span><br><span style="color:#1a6b5c;">Correcta: ${esc(f.correct)}</span></div>`;
      });
      failHtml += `</div>`;
    }

    screens.result.innerHTML = `
      <div class="result-circle" style="border-color:${pct>=70?'#2a9d8f':pct>=50?'#ffb703':'#c8102e'}">
        <div class="pct">${pct}%</div>
        <div class="lbl">${correct}/${total} correctas</div>
      </div>
      <div class="result-summary">${pct>=80?'¡Excelente dominio del tema! 🎉':pct>=60?'Vas bien, sigue repasando 💪':'Toca repasar más este bloque 📖'}</div>
      <div class="racha-resumen">
        <span>🔥 Racha actual: <b>${state.streak||0}</b></span>
        <span>🏅 Tu récord: <b>${state.bestStreak||0}</b></span>
      </div>
      ${failHtml}
      <button class="mode-btn" id="btn-again">🔁 Repetir</button>
      <button class="mode-btn secondary" id="btn-home">🏠 Volver al inicio</button>
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
      html += `<div class="loading">Aún no tienes fallos guardados.<br>¡Empieza a practicar!</div>`;
    } else {
      html += `<button class="mode-btn" id="btn-start-fails">🔁 Repasar ${state.failHistory.length} fallos</button>`;
      html += `<div class="tema-list">`;
      state.failHistory.forEach(f=>{
        html += `<div class="tema-item" style="cursor:default;"><span class="t-title">T${f.tema}: ${esc(f.q)}</span></div>`;
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
      const s = getTemaStats(t.id);
      const pct = s.seen ? Math.round((s.correct/s.seen)*100) : null;
      html += `
        <div class="tema-item" style="cursor:default;">
          <span class="t-title">Tema ${t.id}. ${esc(t.title)}</span>
          <span class="t-progress ${pct===null?'':(pct>=70?'ok-color':'warn-color')}">${pct===null?'Sin datos':pct+'% ('+s.correct+'/'+s.seen+')'}</span>
        </div>
      `;
    });
    html += `</div>
      <button class="mode-btn secondary" id="btn-reset" style="margin-top:16px;">🗑️ Borrar mi progreso en esta oposición</button>`;
    screens.home.innerHTML = html;

    document.getElementById('btn-reset').addEventListener('click', async ()=>{
      if(!confirm('Se borrará tu progreso y tus fallos guardados de esta oposición. ¿Seguro?')) return;
      await window.OpoStore.reset(meta.slug);
      state = { progress:{}, failHistory:[] };
      renderHome();
    });
  }

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
        <button class="mode-btn" onclick="location.href='index.html'">🏠 Ir a mis oposiciones</button></div>`;
      return;
    }

    document.title = 'OpoTest · ' + meta.title;
    document.getElementById('opo-title').textContent = meta.emoji + ' ' + meta.title;
    document.getElementById('opo-sub').textContent = meta.org;
    document.documentElement.style.setProperty('--acento', meta.color);

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
    renderHome();
  })();
})();
