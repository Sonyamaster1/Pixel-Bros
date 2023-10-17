import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthRoute from './private-router'

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
            <div>Тут будет авторизация</div>
          </AuthRoute>
        ),
      },
      {
        path: 'registry',
        element: (
          <AuthRoute>
            <div>Тут будет регистрация</div>
          </AuthRoute>
        ),
      },
      {
        path: 'profile',
        element: <div>Профиль</div>,
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
