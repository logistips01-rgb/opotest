/* Service worker mínimo, solo para que el navegador considere la app
   instalable. Los bancos de preguntas cambian a menudo (campaña de
   ampliación en marcha), así que la estrategia es "red primero, caché
   solo si no hay red" — nunca al revés, para no servir datos viejos. */
const CACHE = 'opotest-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(event.request, copia));
        return resp;
      })
      .catch(() => caches.match(event.request))
  );
});
