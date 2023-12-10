import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import './styles/index.scss'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import createStore, { initialStore } from './store'

export function render(url: string, state = initialStore): string {
  const store = createStore(state)
  return renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  )
}
