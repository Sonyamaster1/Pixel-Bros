import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import './styles/index.scss'

export function render() {
  return renderToString(<App />)
}
