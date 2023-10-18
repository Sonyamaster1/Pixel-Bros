import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthRoute from './private-router'
import { SignUpForm } from '../pages/sign-up-form/sign-up-form'
import { RootLayout } from '../layouts'
import { HomePage } from '../pages/home'

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
            <div>Тут будет авторизация</div>
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
        element: <div>Профиль</div>,
      },
      {
        path: 'game',
        element: <HomePage />,
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
