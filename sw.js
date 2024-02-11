var cacheName = 'lang';
var filesList = [ '/lang/', '/lang/index.html', '/lang/css/style.css', '/lang/js/main.js' ];

// install the app by caching all files
self.addEventListener('install', 
    function(eventInstance)
    {
    eventInstance.waitUntil(
    caches.open(cacheName).then(
        function(cacheInstance)
        {
        return cacheInstance.addAll(filesList);
        }
        )
    );
    self.skipWaiting();
    }
);

// if cannot fetch files, use locals
self.addEventListener('fetch',
    function(eventInstance)
    {
    eventInstance.respondWith(
        caches.match(eventInstance.request).then(
        function(response) {
        return response || fetch(eventInstance.request);
        }
        )
    );
    }
);

