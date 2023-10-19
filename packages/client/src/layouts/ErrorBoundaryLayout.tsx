import ErrorBoundary from '../utils/ErrorBoundary'
import React from 'react'
import { Outlet } from 'react-router-dom'

const ErrorBoundaryLayout = () => (
  <ErrorBoundary fallback={<h1>Oops, something went wrong...</h1>}>
    <Outlet />
  </ErrorBoundary>
)

export default ErrorBoundaryLayout
