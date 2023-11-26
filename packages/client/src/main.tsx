import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import { Provider } from 'react-redux'
import createStore from './store'
import { registerServiceWorker } from './service-worker/register-sw'
import { BrowserRouter } from 'react-router-dom'

const data = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(data)

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

registerServiceWorker()
