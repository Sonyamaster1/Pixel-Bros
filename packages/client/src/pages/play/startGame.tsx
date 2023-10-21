import { FC } from 'react'

import { IconBird } from '../../assets/images'

import styles from './startGame.module.scss'

export const StartGame: FC = () => {
  return (
    <section className={styles.startGame}>
      <h2 className={styles.title}>Get Ready!</h2>
      <img src={IconBird} className={styles.icon} alt="Иконка птицы" />
      <p className={styles.description}>Press “space” for start</p>
    </section>
  )
}
