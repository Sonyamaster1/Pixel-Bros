import { precacheAndRoute } from 'workbox-precaching'

precacheAndRoute(self.__WB_MANIFEST)

const CACHE_URLS = [
  '/assets/index.d9cab35b.css',
  '/assets/index.db3540e3.js',
  '/index.html?__WB_REVISION__=11ccdce3bd9058a128686c1165c243aa',
  '/manifest.webmanifest?__WB_REVISION__=a682f65f0792ba3d4d2be38f6fde036e',
  '/registerSW.js?__WB_REVISION__=1872c500de691dce40960bb85481de07',
]

const cacheKey = 'cache-v1'

function initCache() {
  return caches.open(cacheKey)
    .then(
      (cache) => {
        return cache.addAll(CACHE_URLS)
      },
      (error) => {
        console.log(error)
      }
    )
}

function cleanCache () {
  return caches.keys()
    .then((keyList) => {
      return Promise.all((keyList.map((key) => {
        if (key !== cacheKey) {
          return caches.delete(key)
        }
      })))
    })
}

function tryNetwork(request, timeout) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout)

    fetch(request)
      .then((response) => {
        clearTimeout(timeoutId);
        const responseClone = response.clone();
        caches.open(cacheKey).then((cache) => cache.put(request, responseClone))

        resolve(response);
      }, reject)
  })
}

function getFromCache(request) {
  return caches.open(cacheKey)
    .then((cache) => {
      return cache.match(request).then((result) => result || Promise.reject('no-match'))
    })
}

self.addEventListener('install', event => {
  event.waitUntil(initCache())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(cleanCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(tryNetwork(event.request, 2000).catch(() => getFromCache(event.request)))
})
