import { FC } from 'react'
import { Link } from 'react-router-dom'

import IconAvatar from '../../assets/images/stub-avatar-header.svg'

import styles from './authenticationButton.module.scss'

interface Props {
  isAuth?: boolean
  avatar?: string
}

export const AuthenticationButton: FC<Props> = ({ isAuth = false, avatar }) => {
  if (isAuth) {
    const avatarSrc = avatar ? avatar : IconAvatar

    return (
      <Link to="/profile" className={styles.authenticationButton}>
        <img src={avatarSrc} className={styles.avatar} alt={avatarSrc} />
      </Link>
    )
  }

  return (
    <Link to="/login" className={styles.authenticationButton}>
      signin
    </Link>
  )
}
