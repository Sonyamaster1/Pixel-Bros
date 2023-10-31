const cacheKey = 'cache-v1'

function initCache() {
  return caches.open(cacheKey)
    .then(
      (cache) => {
        console.log(cache, 'cache');
        return cache.addAll(['/', '/index.html', '/src/App.tsx', '/src/main.tsx', '/src/pages/home/index.tsx'])
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
        console.log(keyList[0], 'caches');
        if (key !== cacheKey) {
          return caches.delete(key)
        }
      })))
    })
}

function tryNetwork(request, timeout) {
  console.log(request, 'test request');
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout)

    fetch(request)
      .then((response) => {
        clearTimeout(timeoutId);
        const responseClone = response.clone();
        console.log(responseClone, 'responseClone');
        caches.open(cacheKey).then((cache) => cache.put(request, responseClone))

        resolve(response);
      }, reject)
  })
}

function getFromCache(request) {
  console.log(request, 'network is off so getting from cache...');
  return caches.open(cacheKey)
    .then((cache) => {
      return cache.match(request).then((result) => result || Promise.reject('no-match'))
    })
}

self.addEventListener('install', event => {
  console.log('install')
  event.waitUntil(initCache())
})

self.addEventListener('activate', (event) => {
  console.log('activate')
  event.waitUntil(cleanCache())
})

self.addEventListener('fetch', (event) => {
  console.log('fetch')
  event.respondWith(tryNetwork(event.request, 2000).catch(() => getFromCache(event.request)))
})
