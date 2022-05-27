/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
const cacheName = 'portfolio'

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function (cache){
            cache.addAll([
                './',
                "./static/css/main.2e89d83d.chunk.css",
                "./static/js/main.d700abb7.chunk.js",
                "./static/js/main.d700abb7.chunk.js.map",
                "./static/js/runtime-main.113009dc.js",
                "./static/js/runtime-main.113009dc.js.map",
                "./static/js/2.2958ea7d.chunk.js",
                "./static/js/2.2958ea7d.chunk.js.map",
                "./static/js/3.7a2fa6e8.chunk.js",
                "./static/js/3.7a2fa6e8.chunk.js.map",
                "./index.html",
                "./static/css/main.2e89d83d.chunk.css.map",
                "./static/js/2.2958ea7d.chunk.js.LICENSE.txt",
                "./static/media/default.e550d09d.cur",
                "./static/media/pointer.d346c45f.cur",
                './_redirects',
                './manifest.json',
                './index.js',
                'asset-manifest.json',
                'favicon.svg',
                'logo256.png',
                'logo384.png',
                'logo512.png',
                'sw.js'
            ])
        })
    )
    return self.skipWaiting()
})

self.addEventListener('activate', e =>{
    self.clients.claim()
})

self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.origin === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
        const refresh = await fetch(req)
        await cache.put(req, fresh.clone())
        return refresh
    } catch(e){
        const cached = await cache.match(req);
        return cached
    }
}