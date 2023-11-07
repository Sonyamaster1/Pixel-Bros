import { createBrowserRouter, Navigate } from 'react-router-dom'
import AuthRoute from './private-router'
import { SignUpForm } from '../pages/sign-up-form/sign-up-form'
import { RootLayout } from '../layouts'
import { HomePage } from '../pages/home'
import { SignInForm } from '../pages/sign-in-form/sign-in.form'
import { Profile } from '../pages/profile'
import { PlayPage } from '../pages/play'
import Leaderboard from '../pages/leaderboard'
import { ForumPage } from '../pages/forum'
import { ForumTopicPage } from '../pages/forum/topic'
import { ForumCreatePage } from '../pages/forum/create'

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
        element: <SignInForm />,
      },
      {
        path: 'registry',
        element: <SignUpForm />,
      },
      {
        path: 'profile',
        element: (
          <AuthRoute>
            <Profile />
          </AuthRoute>
        ),
      },
      {
        path: 'game',
        element: <HomePage />,
      },
      {
        path: 'play',
        element: <PlayPage />,
      },
      {
        path: 'forum/create',
        element: (
          <AuthRoute>
            <ForumCreatePage />
          </AuthRoute>
        ),
      },
      {
        path: 'forum/:id',
        element: (
          <AuthRoute>
            <ForumTopicPage />
          </AuthRoute>
        ),
      },
      {
        path: 'forum',
        element: (
          <AuthRoute>
            <ForumPage />
          </AuthRoute>
        ),
      },
      {
        path: 'leaderboard',
        element: (
          <AuthRoute>
            <Leaderboard />
          </AuthRoute>
        ),
      },
    ],
  },
])
