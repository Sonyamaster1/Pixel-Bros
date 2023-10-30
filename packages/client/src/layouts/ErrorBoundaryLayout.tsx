import React, { FC, ReactNode } from 'react'
import ErrorBoundary from '../utils/ErrorBoundary'

interface Props {
  children: ReactNode | ReactNode[]
}

const ErrorBoundaryLayout: FC<Props> = ({ children }) => (
  <ErrorBoundary fallback={<h1>Oops, something went wrong...</h1>}>
    {children}
  </ErrorBoundary>
)

export default ErrorBoundaryLayout
