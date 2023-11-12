import React, { useEffect, useState } from 'react'
import { fetchUser } from '../store/slices/userSlices'
import { useAuth } from '../hooks/use-auth'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'
import { Navigate } from 'react-router-dom'
import { ErrorPage } from '../pages/error'
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
