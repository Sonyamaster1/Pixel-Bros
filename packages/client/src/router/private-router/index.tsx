import { Navigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { useEffect } from 'react'
import { fetchUser } from '../../store/slices/userSlices'
import { useAuth } from '../../hooks/use-auth'

type TAuthRouteProps = {
  children: JSX.Element
}

export default function AuthRoute({ children }: TAuthRouteProps): JSX.Element {
  const { isAuth } = useAuth()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  if (!isAuth) {
    return <></>
  }

  return !isAuth ? <Navigate to="/login" replace /> : <>{children}</>
}
