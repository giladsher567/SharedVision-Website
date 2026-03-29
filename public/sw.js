const CACHE = 'sharedvision-bg-v1';
const BG_VIDEO = '/space_bg_loop.mp4';

// On install: try to cache the video, but don't block SW install if it fails
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.add(BG_VIDEO))
      .catch(() => {}) // never block install on network failure
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// Serve video from cache — instant on every page change
self.addEventListener('fetch', e => {
  if (e.request.url.includes('space_bg_loop.mp4')) {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request))
    );
  }
});
