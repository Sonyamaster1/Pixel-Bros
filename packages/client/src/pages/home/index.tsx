import { FC, useEffect } from 'react'

import { Background } from './background'

import styles from './index.module.scss'
import { yandexOAuthTransport } from '../../api/yandex-OAuth.transport'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { fetchUser } from '../../store/slices/userSlices'

const RedirectOAuthURI = import.meta.env.VITE_REDIRECT_OAUTH_URI

export const HomePage: FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const code = urlParams.get('code')
    if (code && !user.isAuth)
      yandexOAuthTransport
        .signIn({ code: code, redirect_uri: RedirectOAuthURI })
        .then(() => dispatch(fetchUser()))
  }, [])

  return (
    <main className={styles.homePage}>
      <Background />
      <div className={styles.content}>
        <span className={styles.description}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </span>
      </div>
    </main>
  )
}
