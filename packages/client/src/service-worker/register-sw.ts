export function registerServiceWorker(): Promise<ServiceWorkerRegistration> | void {
  const { serviceWorker } = navigator

  window.addEventListener('load', () => {
    // Регистрируем sw после загрузки статики
    const currentRegistration = serviceWorker.register('/service.worker.js')
    currentRegistration
      .then((swRegistration: ServiceWorkerRegistration | void) => {
        if (swRegistration) {
          console.log(
            'ServiceWorker registration successful with  scope: ',
            swRegistration.scope
          )
        }
      })
      .catch((error: string) =>
        console.log('ServiceWorker registration failed: ', error)
      )
  })
}
