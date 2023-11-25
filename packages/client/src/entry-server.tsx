import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import './styles/index.scss'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { store } from './store'

export function render(url: string): string {
  return renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  )
}
