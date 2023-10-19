import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './menuItem.module.scss'

interface Props {
  label: string
  href: string
  className?: string
}

export const MenuItem: FC<Props> = ({ label, href, className = '' }) => {
  return (
    <li className={`${styles.menuItem} ${className}`}>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.linkActive}` : styles.link
        }>
        {label}
      </NavLink>
    </li>
  )
}
