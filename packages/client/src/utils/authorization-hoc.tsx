import { signInTransport } from '../api/sign-in.transport'
import React from 'react'
import { Navigate } from 'react-router-dom'

// В будушем подключить к стору и проверять авторизацию через запрос о наличии инфы о юзере
async function getAuthorizedStatus() {
  return await signInTransport.getUserData()
}

const userResponse = await getAuthorizedStatus()

// HOC, который рендерит обёрнутый компонент только при авторизации пользователя
export function checkAuthRenderHOC<P = any>(
  WrappedComponent: React.ComponentType
): React.ComponentType<P> {
  class WithAuthorizationComponent extends React.Component<P> {
    private isAuthorized = false

    constructor(props: P) {
      super(props)
    }

    componentWillMount() {
      this.isAuthorized = !!userResponse
    }

    render() {
      return this.isAuthorized ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Navigate to="/login" replace />
      )
    }
  }

  return WithAuthorizationComponent
}
