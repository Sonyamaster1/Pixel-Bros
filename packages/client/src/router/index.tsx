import { createBrowserRouter, Navigate } from 'react-router-dom'
import {
  SignUpForm,
  HomePage,
  SignInForm,
  WithAuthorizationProfile,
  PlayPage,
  WithAuthorizationForumPage,
  WithAuthorizationForumTopicPage,
  WithAuthorizationForumCreatePage,
} from '../pages'
import { RootLayout } from '../layouts'

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
        element: <WithAuthorizationProfile />,
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
        element: <WithAuthorizationForumCreatePage />,
      },
      {
        path: 'forum/:id',
        element: <WithAuthorizationForumTopicPage />,
      },
      {
        path: 'forum',
        element: <WithAuthorizationForumPage />,
      },
      {
        path: 'leaderboard',
        element: <div>Лидерборд</div>,
      },
    ],
  },
])
