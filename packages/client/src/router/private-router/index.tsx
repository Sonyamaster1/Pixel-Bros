import { Navigate } from 'react-router-dom'
import { signInTransport } from '../../api/sign-in.transport'

type TAuthRouteProps = {
  children: JSX.Element
}

async function getAuthorizedStatus() {
  return await signInTransport.getUserData()
}

const isAuthorized = getAuthorizedStatus()

export default function AuthRoute({ children }: TAuthRouteProps): JSX.Element {
  return !isAuthorized ? <Navigate to="/login" replace /> : <>{children}</>
}
