import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthRoute from './private-router'
import { SignUpForm } from '../pages/sign-up-form/sign-up-form'
import { RootLayout } from '../layouts'
import { HomePage } from '../pages/home'
import { SignInForm } from '../pages/sign-in-form/sign-in.form'
import { Profile } from '../pages/profile'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
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
        element: <HomePage />,
      },
      {
        path: 'play',
        element: <div>Экран начала игры</div>,
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
