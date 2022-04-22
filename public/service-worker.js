const CACHE_NAME = 'BudgetTracker-v1';


const FILES_TO_CACHE = [
    '/',
    './index.html',
    './manifest.json',
    './js/idb.js',
    './js/index.js',
    './css/styles.css',
    './icons/icon-72x72.png',
    './icons/icon-96x96.png',
    './icons/icon-128x128.png',
    './icons/icon-144x144.png',
    './icons/icon-152x152.png',
    './icons/icon-192x192.png',
    './icons/icon-384x384.png',
    './icons/icon-512x512.png'
  ];



    // Install the service worker
self.addEventListener('install', function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log('Files pre-cached successfully!');
        return cache.addAll(FILES_TO_CACHE);
      })
    );
  
    self.skipWaiting();
  });


    // Activate the service worker and remove old data from the cache
  self.addEventListener("activate", function (evt) {
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log("Removing old cache data", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});


// fetch

self.addEventListener('fetch', function (evt) {
    console.log('fetch request : ' + evt.request.url)
    evt.respondWith(
      caches.match(evt.request).then(function (request) {
        if (request) { // if cache is available, respond with cache
          console.log('responding with cache : ' + evt.request.url)
          return request
        } else {       // if there are no cache, try fetching request
          console.log('file is not cached, fetching : ' + evt.request.url)
          return fetch(evt.request)
        }
      })
    )
  })




