/* =======================================================
   Almitest · capa de persistencia
   -------------------------------------------------------
   Toda la app guarda y lee el progreso SOLO a través de
   window.OpoStore. Si algún día se quiere sincronizar entre
   dispositivos (Firebase, Supabase, un backend propio...),
   basta con reimplementar los cuatro métodos de `adapter`
   y el resto de la aplicación no cambia.

   Claves usadas:
     opotest:v1:<slug>   -> estado de una oposición
     opotest:v1:counts   -> nº de preguntas cacheado por slug
   ======================================================= */
(function(){
  'use strict';

  const PREFIX = 'opotest:v1:';
  const LEGACY_KEY = 'trivial-oposicion-state'; // versión monolítica anterior

  /* ---------- adaptador de almacenamiento ---------- */
  // 1) window.storage (entorno de artifact de Claude, asíncrono)
  // 2) localStorage (navegador normal, GitHub Pages, móvil, file://)
  const hasHostStorage = typeof window.storage === 'object'
    && window.storage
    && typeof window.storage.get === 'function';

  const adapter = hasHostStorage ? {
    name:'host',
    async get(key){
      const r = await window.storage.get(key);
      return r && r.value ? r.value : null;
    },
    async set(key, value){ await window.storage.set(key, value); },
    async remove(key){
      if(typeof window.storage.delete === 'function') await window.storage.delete(key);
      else await window.storage.set(key, '');
    }
  } : {
    name:'local',
    async get(key){ try{ return localStorage.getItem(key); }catch(e){ return null; } },
    async set(key, value){ try{ localStorage.setItem(key, value); }catch(e){ console.error('No se pudo guardar', e); } },
    async remove(key){ try{ localStorage.removeItem(key); }catch(e){} }
  };

  function emptyState(){
    return {
      progress: {},    // {temaId: {seen, correct}}
      failHistory: [], // [{tema, q}]
      streak: 0,       // aciertos seguidos ahora mismo
      bestStreak: 0,   // récord de aciertos seguidos
      updatedAt: null
    };
  }

  function normalize(raw){
    const s = emptyState();
    if(!raw || typeof raw !== 'object') return s;
    if(raw.progress && typeof raw.progress === 'object') s.progress = raw.progress;
    if(Array.isArray(raw.failHistory)) s.failHistory = raw.failHistory;
    // La racha se guarda para que no se pierda al cerrar la app: llegar a
    // 100 seguidas es imposible dentro de un solo test de 20-50 preguntas.
    if(Number.isFinite(raw.streak) && raw.streak >= 0) s.streak = raw.streak;
    if(Number.isFinite(raw.bestStreak) && raw.bestStreak >= 0) s.bestStreak = raw.bestStreak;
    if(s.bestStreak < s.streak) s.bestStreak = s.streak;
    s.updatedAt = raw.updatedAt || null;
    return s;
  }

  async function readJSON(key){
    const raw = await adapter.get(key);
    if(!raw) return null;
    try{ return JSON.parse(raw); }catch(e){ return null; }
  }

  const OpoStore = {
    backend: adapter.name,

    /* Estado de una oposición concreta. */
    async load(slug){
      const own = await readJSON(PREFIX + slug);
      if(own) return normalize(own);
      // Migración desde la versión de un solo archivo: aquel progreso
      // era el de Auxiliar Administrativo de Zaragoza.
      if(slug === 'aux-admin-zaragoza'){
        const legacy = await readJSON(LEGACY_KEY);
        if(legacy){
          const migrated = normalize(legacy);
          await this.save(slug, migrated);
          return migrated;
        }
      }
      return emptyState();
    },

    async save(slug, state){
      state.updatedAt = new Date().toISOString();
      await adapter.set(PREFIX + slug, JSON.stringify(state));
    },

    async reset(slug){
      await adapter.remove(PREFIX + slug);
    },

    /* Estados de varias oposiciones a la vez (para el hub). */
    async loadMany(slugs){
      const out = {};
      for(const slug of slugs) out[slug] = await this.load(slug);
      return out;
    },

    /* Nº de preguntas por oposición: el hub lo muestra sin cargar
       los bancos completos, y test.html lo refresca al abrir uno. */
    async getCounts(){
      return (await readJSON(PREFIX + 'counts')) || {};
    },
    async setCount(slug, total){
      const counts = await this.getCounts();
      if(counts[slug] === total) return;
      counts[slug] = total;
      await adapter.set(PREFIX + 'counts', JSON.stringify(counts));
    },

    /* Copia de seguridad manual: sirve de "sincronización" entre
       dispositivos mientras no haya cuentas de usuario. */
    async exportAll(slugs){
      const data = { app:'opotest', version:1, exportedAt:new Date().toISOString(), oposiciones:{} };
      for(const slug of slugs){
        const s = await this.load(slug);
        if(Object.keys(s.progress).length || s.failHistory.length || s.bestStreak) data.oposiciones[slug] = s;
      }
      return JSON.stringify(data, null, 2);
    },

    async importAll(json){
      let data;
      try{ data = JSON.parse(json); }
      catch(e){ throw new Error('El archivo no es un JSON válido.'); }
      if(!data || data.app !== 'opotest' || !data.oposiciones){
        throw new Error('El archivo no es una copia de Almitest.');
      }
      let n = 0;
      for(const slug of Object.keys(data.oposiciones)){
        await this.save(slug, normalize(data.oposiciones[slug]));
        n++;
      }
      return n;
    }
  };

  window.OpoStore = OpoStore;
})();
