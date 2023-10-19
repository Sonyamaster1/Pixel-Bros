import { FC } from 'react'

import IconBird from '../../assets/images/yellowbird.svg'

import styles from './index.module.scss'

export const PlayPage: FC = () => {
  return (
    <main className={styles.playPage}>
      <h2 className={styles.title}>Get Ready!</h2>
      <img src={IconBird} className={styles.icon} alt="Иконка птицы" />
      <p className={styles.description}>Press “space” for start</p>
    </main>
  )
}
