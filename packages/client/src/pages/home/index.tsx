import { FC, useState } from 'react'

import { Background } from './background'

import styles from './index.module.scss'
import { jokesTransport } from '../../api/jokes.transport'

export const HomePage: FC = () => {
  const [joke, setJoke] = useState<string>('')

  return (
    <main className={styles.homePage}>
      <Background />
      <div className={styles.content}>
        <span className={styles.description}>
          <button
            className={styles.jokeButton}
            onClick={() => {
              jokesTransport.getRandomJoke().then((res: any) => {
                setJoke(res.value)
              })
            }}>
            Получить заряд на день
          </button>
          {joke}
        </span>
      </div>
    </main>
  )
}
