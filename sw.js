const CACHE_NAME = 'SGI__V0.1';
const urlsToCache = [
    '/',
    '/sass/main.min.css'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(c => {
            return c.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then( response => {
            if (response) {
                return response;
            } else {            
            return fetch(e.request);
            }
        })
    );
});