const CACHE = 'english-learner-v1';
const SHELL = ['./index.html', './manifest.json', './icon.svg', './sw.js'];

// Install: cache app shell
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

// Activate: remove old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for shell, network-only for external APIs
self.addEventListener('fetch', e => {
  const url = e.request.url;
  // External APIs go straight to network
  if (url.includes('dictionaryapi.dev') || url.includes('mymemory.translated.net') || url.includes('translate.googleapis.com') || url.includes('cognitive.microsofttranslator.com') || url.includes('tts.speech.microsoft.com')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 503 })));
    return;
  }
  // App shell: cache first, fallback to network
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
