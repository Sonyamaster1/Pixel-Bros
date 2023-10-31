export function registerServiceWorker(): Promise<ServiceWorkerRegistration> | void {
  const { serviceWorker } = navigator

  window.addEventListener('load', () => {
    console.log('test serviceWorker addEventListener')
    // Регистрируем sw после загрузки статики
    const currentRegistration = serviceWorker.register(
      '/src/service-worker/service.worker.js'
    )
    console.log('test')
    currentRegistration
      .then((swRegistration: ServiceWorkerRegistration | void) => {
        if (swRegistration) {
          console.log('ULALA')
        }
      })
      .catch((error: string) => console.log(error))
  })
}
console.log('file')
registerServiceWorker()
