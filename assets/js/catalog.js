/* =======================================================
   OpoTest · catálogo de oposiciones
   -------------------------------------------------------
   Para añadir una oposición nueva:
     1. Crea data/<slug>.js copiando el formato de cualquier
        banco existente (termina llamando a registerOposicion).
     2. Añade aquí una entrada con su slug, título y sus archivos.
   El primer archivo de `files` es el banco base y es obligatorio;
   los siguientes son ampliaciones (addQuestions) y pueden faltar.
   No hay que tocar nada más: el hub y el motor de test la
   recogen automáticamente.
   ======================================================= */
(function(){
  'use strict';

  window.OPOSICIONES = [
    {
      slug:'aux-admin-zaragoza',
      title:'Auxiliar Administrativo',
      org:'Ayuntamiento de Zaragoza',
      emoji:'📘',
      color:'#c8102e',
      // el primero es el banco base; tools/fusionar.js añade aquí
      // los archivos de ampliación cuando los crea
      files:['data/aux-admin-zaragoza.js', 'data/aux-admin-zaragoza.ampliacion.js'],
      // nº aproximado de preguntas; se corrige solo al abrir la oposición
      preguntas:5885
    },
    {
      slug:'policia-local-zaragoza',
      title:'Policía Local',
      org:'Ayuntamiento de Zaragoza',
      emoji:'👮',
      color:'#1d3557',
      // el primero es el banco base; tools/fusionar.js añade aquí
      // los archivos de ampliación cuando los crea
      files:['data/policia-local-zaragoza.js'],
      preguntas:4428
    },
    {
      slug:'policia-nacional',
      title:'Policía Nacional · Escala Básica',
      org:'Ministerio del Interior',
      emoji:'🚔',
      color:'#0b4f9e',
      // el primero es el banco base; tools/fusionar.js añade aquí
      // los archivos de ampliación cuando los crea
      files:['data/policia-nacional.js'],
      preguntas:68
    },
    {
      slug:'aux-admin-dga',
      title:'Auxiliar Administrativo',
      org:'Gobierno de Aragón (DGA)',
      emoji:'🗂️',
      color:'#2a9d8f',
      // el primero es el banco base; tools/fusionar.js añade aquí
      // los archivos de ampliación cuando los crea
      files:['data/aux-admin-dga.js'],
      preguntas:58
    }
  ];

  window.getOposicion = function(slug){
    return window.OPOSICIONES.find(o=>o.slug===slug) || null;
  };

  /* ---------- carga perezosa de bancos de preguntas ----------
     Se inyecta el <script> del banco en lugar de usar fetch(),
     para que la app también funcione abierta como archivo local
     (file://), donde fetch de JSON está bloqueado por CORS. */
  const cache = {};

  /* Cada oposición tiene un archivo base que llama a registerOposicion()
     y, opcionalmente, archivos de ampliación que llaman a addQuestions().
     Se cargan en el orden declarado en `files`. */
  window.registerOposicion = function(payload){
    cache[payload.slug] = {
      temas: payload.temas || [],
      questions: payload.questions || {}
    };
  };

  /* Añade preguntas a un tema ya existente, ignorando las repetidas.
     Es la vía por la que entran los lotes generados y revisados. */
  window.addQuestions = function(slug, tema, preguntas){
    const data = cache[slug];
    if(!data){
      console.error('addQuestions: la oposición ' + slug + ' no está cargada todavía.');
      return;
    }
    if(!data.temas.some(t=>t.id===tema)){
      console.warn('addQuestions: el tema ' + tema + ' no figura en el temario de ' + slug + '.');
    }
    const lista = data.questions[tema] = data.questions[tema] || [];
    const vistas = new Set(lista.map(q=>normalizar(q.q)));
    preguntas.forEach(q=>{
      const clave = normalizar(q.q);
      if(vistas.has(clave)) return;
      vistas.add(clave);
      lista.push(q);
    });
  };

  function normalizar(texto){
    return String(texto).toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
      .replace(/[^a-z0-9 ]/g,' ')
      .replace(/\s+/g,' ').trim();
  }
  window.normalizarEnunciado = normalizar;

  function cargarScript(src){
    return new Promise((resolve, reject)=>{
      const el = document.createElement('script');
      el.src = src;
      el.onload = ()=>resolve();
      el.onerror = ()=>reject(new Error('No se pudo cargar ' + src));
      document.head.appendChild(el);
    });
  }

  const enCurso = {};

  window.loadOposicionData = function(slug){
    if(cache[slug]) return Promise.resolve(cache[slug]);
    if(enCurso[slug]) return enCurso[slug];

    const meta = window.getOposicion(slug);
    if(!meta) return Promise.reject(new Error('Oposición desconocida: ' + slug));

    const files = meta.files || [meta.file];
    enCurso[slug] = (async ()=>{
      for(const f of files){
        try{
          await cargarScript(f);
        }catch(e){
          // Un archivo de ampliación que falta no debe tumbar la oposición:
          // solo el archivo base es imprescindible.
          if(f === files[0]) throw e;
          console.warn(e.message + ' (se continúa sin esa ampliación)');
        }
      }
      if(!cache[slug]) throw new Error(files[0] + ' no registró ninguna oposición.');
      return cache[slug];
    })();

    enCurso[slug].catch(()=>{ delete enCurso[slug]; });
    return enCurso[slug];
  };

  window.countQuestions = function(questions){
    return Object.keys(questions).reduce((acc,k)=>acc + (questions[k]||[]).length, 0);
  };
})();
