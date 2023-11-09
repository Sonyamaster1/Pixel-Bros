import { Navigate, useLocation } from 'react-router-dom'
import { signInTransport } from '../../api/sign-in.transport'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { useEffect } from 'react'
import { fetchUser } from '../../store/slices/userSlices'
import { useAuth } from '../../hooks/use-auth'

type TAuthRouteProps = {
  children: JSX.Element
}

// async function getAuthorizedStatus() {
//   return await signInTransport.getUserData()
// }
//
// const isAuthorized = await getAuthorizedStatus()

export default function AuthRoute({ children }: TAuthRouteProps): JSX.Element {
  const { isAuth, error, loading, user } = useAuth()

  return !isAuth ? <Navigate to="/login" replace /> : <>{children}</>
}
