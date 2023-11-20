import { FC } from 'react'

import styles from './menuItem.module.scss'

interface Props {
  onClick: () => void
}

export const LogoutButton: FC<Props> = ({ onClick }) => {
  return (
    <li className={`${styles.menuItem}`}>
      <div onClick={onClick} className={styles.link}>
        Logout
      </div>
    </li>
  )
}
