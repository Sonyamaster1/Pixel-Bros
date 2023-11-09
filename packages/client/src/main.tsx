import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { registerServiceWorker } from './service-worker/register-sw'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

registerServiceWorker()
