# 5. sw.js (Service Worker)

Crea un archivo llamado `sw.js` en GitHub y pega esto:

```javascript
const CACHE_NAME = 'topoar-v3';
const ASSETS = ['./', './index.html', './styles.css', './script.js', './manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
```
