import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

// HOC, который рендерит обёрнутый компонент только при авторизации пользователя
export function checkAuthRenderHOC<P = any>(
  WrappedComponent: React.ComponentType
): React.ComponentType<P> {
  function WithAuthorizationComponent() {
    const user = useSelector((state: RootState) => state.user)

    return user.isAuth ? <WrappedComponent /> : <Navigate to="/login" replace />
  }

  return WithAuthorizationComponent
}
