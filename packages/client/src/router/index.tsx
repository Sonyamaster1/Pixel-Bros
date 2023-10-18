import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthRoute from './private-router'
import { SignUpForm } from '../pages/sign-up-form/sign-up-form'
import { SignInForm } from '../pages/sign-in-form/sign-in.form'
import { Profile } from '../pages/profile'

export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <Navigate to="game" replace />,
      },
      {
        path: 'login',
        element: (
          <AuthRoute>
            <SignInForm />
          </AuthRoute>
        ),
      },
      {
        path: 'registry',
        element: (
          <AuthRoute>
            <SignUpForm />
          </AuthRoute>
        ),
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'game',
        element: <div>Игра,главный экран</div>,
      },
      {
        path: 'forum',
        element: <div>Форум</div>,
      },
      {
        path: 'leaderboard',
        element: <div>Лидерборд</div>,
      },
    ],
  },
])
