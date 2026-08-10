/* =======================================================
   OpoTest · catálogo de oposiciones
   -------------------------------------------------------
   Para añadir una oposición nueva:
     1. Crea data/<slug>.js copiando el formato de cualquier
        banco existente (termina llamando a registerOposicion).
     2. Añade aquí una entrada con su slug, título y archivo.
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
      file:'data/aux-admin-zaragoza.js',
      // nº aproximado de preguntas; se corrige solo al abrir la oposición
      preguntas:2582
    },
    {
      slug:'policia-local-zaragoza',
      title:'Policía Local',
      org:'Ayuntamiento de Zaragoza',
      emoji:'👮',
      color:'#1d3557',
      file:'data/policia-local-zaragoza.js',
      preguntas:64
    },
    {
      slug:'policia-nacional',
      title:'Policía Nacional · Escala Básica',
      org:'Ministerio del Interior',
      emoji:'🚔',
      color:'#0b4f9e',
      file:'data/policia-nacional.js',
      preguntas:68
    },
    {
      slug:'aux-admin-dga',
      title:'Auxiliar Administrativo',
      org:'Gobierno de Aragón (DGA)',
      emoji:'🗂️',
      color:'#2a9d8f',
      file:'data/aux-admin-dga.js',
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
  const pending = {};

  window.registerOposicion = function(payload){
    cache[payload.slug] = {
      temas: payload.temas || [],
      questions: payload.questions || {}
    };
    if(pending[payload.slug]){
      pending[payload.slug].forEach(fn=>fn(cache[payload.slug]));
      delete pending[payload.slug];
    }
  };

  window.loadOposicionData = function(slug){
    if(cache[slug]) return Promise.resolve(cache[slug]);
    const meta = window.getOposicion(slug);
    if(!meta) return Promise.reject(new Error('Oposición desconocida: ' + slug));

    return new Promise((resolve, reject)=>{
      pending[slug] = pending[slug] || [];
      pending[slug].push(resolve);

      if(pending[slug].length > 1) return; // ya se está cargando

      const el = document.createElement('script');
      el.src = meta.file;
      el.onerror = ()=>{
        delete pending[slug];
        reject(new Error('No se pudo cargar ' + meta.file));
      };
      el.onload = ()=>{
        if(!cache[slug]){
          delete pending[slug];
          reject(new Error(meta.file + ' no registró ninguna oposición.'));
        }
      };
      document.head.appendChild(el);
    });
  };

  window.countQuestions = function(questions){
    return Object.keys(questions).reduce((acc,k)=>acc + (questions[k]||[]).length, 0);
  };
})();
