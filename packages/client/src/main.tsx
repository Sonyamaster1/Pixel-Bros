import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './store'
import { registerServiceWorker } from './service-worker/register-sw'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

registerServiceWorker()
