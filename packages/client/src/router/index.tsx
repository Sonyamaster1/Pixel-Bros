import {
  SignUpForm,
  HomePage,
  SignInForm,
  WithAuthorizationProfile,
  WithAuthorizationForumPage,
  WithAuthorizationForumTopicPage,
  WithAuthorizationForumCreatePage,
  WithAuthorizationLeaderboard,
} from '../pages'
import { RootLayout } from '../layouts'
import { WithAuthorizationPlayPage } from '../pages/play'

export const router = [
  {
    element: <RootLayout />,
    children: [
      // {
      //   path: '/',
      //   element: <Navigate to="game" replace />,
      // },
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
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'play',
        element: <WithAuthorizationPlayPage />,
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
        element: <WithAuthorizationLeaderboard />,
      },
    ],
  },
]
