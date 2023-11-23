import { FC, useState } from 'react'

import { Background } from './background'

import styles from './index.module.scss'
import { IJoke, jokesTransport } from '../../api/jokes.transport'

export const HomePage: FC = () => {
  const [joke, setJoke] = useState<string>('')

  const getJoke = async () => {
    try {
      jokesTransport.getRandomJoke().then((res: IJoke) => {
        setJoke(res.value)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.homePage}>
      <Background />
      <div className={styles.content}>
        <span className={styles.description}>
          <button className={styles.jokeButton} onClick={getJoke}>
            Получить заряд на день
          </button>
          {joke}
        </span>
      </div>
    </main>
  )
}
