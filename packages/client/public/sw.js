const CACHE_URLS = self.__WB_MANIFEST.map(({url}) => url)

const cacheKey = 'cache-v1'

function initCache() {
  console.log('SW urls: ', CACHE_URLS)
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
