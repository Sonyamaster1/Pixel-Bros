import { FC, useEffect } from 'react'
import { IconBird } from '../../assets/images'
import styles from './startGame.module.scss'

type Props = {
  handleStart(): void
}

enum KeyCodes {
  Space = 'Space',
}

export const StartGame: FC<Props> = ({ handleStart }) => {
  function handleKeyupSpace(event: KeyboardEvent) {
    if (event.code !== KeyCodes.Space) return
    handleStart()
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyupSpace)

    return () => {
      document.removeEventListener('keyup', handleKeyupSpace)
    }
  }, [])

  return (
    <section className={styles.startGame}>
      <h2 className={styles.title}>Get Ready!</h2>
      <img src={IconBird} className={styles.icon} alt="Иконка птицы" />
      <p className={styles.description}>Press “space” for start</p>
    </section>
  )
}
