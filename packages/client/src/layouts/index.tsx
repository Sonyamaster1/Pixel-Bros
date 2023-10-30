import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import ErrorBoundaryLayout from './ErrorBoundaryLayout'

export const RootLayout: FC = () => {
  return (
    <ErrorBoundaryLayout>
      <Header />
      <Outlet />
    </ErrorBoundaryLayout>
  )
}
