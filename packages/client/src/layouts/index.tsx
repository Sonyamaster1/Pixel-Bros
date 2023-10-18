import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export const RootLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
