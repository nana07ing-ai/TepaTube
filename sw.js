const CACHE_NAME = 'tepatube-v3';
const ASSETS = [
  './',
  './index.html',
  './styles/style.css',
  './scripts/script.js',
  './images/tepa.png',
  './manifest.json',
  './videos/banda_kochakov_1.mp4',
  './videos/banda_kochakov_2.mp4',
  './videos/banda_kochakov_3.mp4',
  './videos/banda_kochakov_4.mp4',
  './videos/banda_kochakov_5.mp4',
  './videos/banda_kochakov_6.mp4',
  './videos/banda_kochakov_7.mp4',
  './videos/banda_kochakov_8.mp4',
  './videos/banda_kochakov_9.mp4',
  './videos/banda_kochakov_10.mp4',
  './videos/banda_kochakov_11.mp4',
  './videos/banda_kochakov_12.mp4',
  './videos/banda_kochakov_13.mp4',
  './videos/tepa_chapilg.mp4',
  './videos/tepa_push.mp4'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('.mp4') || e.request.url.includes('.webm')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
  }
});
