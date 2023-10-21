import { Navigate } from 'react-router-dom'

export default function AuthRoute({ children }: any): JSX.Element {
  // бек не отдает токен - это просто тестовая реализация - работает не так, как должна и это нормально
  const token = localStorage.getItem('token')
  return !token ? <Navigate to="/game" replace /> : children
}
