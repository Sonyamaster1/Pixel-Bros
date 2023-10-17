import { FC } from 'react'
import { Link } from 'react-router-dom'

import IconLogo from '../../assets/images/logo.png'

import { MenuItem } from './menuItem'
import { AuthenticationButton } from './authenticationButton'

import styles from './index.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img src={IconLogo} alt="Логотип" />
      </Link>
      <nav>
        <ul className={styles.list}>
          <MenuItem label="forum" href="/forum" />
          <MenuItem label="leaderboard" href="/leaderboard" />
          <MenuItem label="play" href="/game" />
        </ul>
      </nav>
      <AuthenticationButton />
    </header>
  )
}
