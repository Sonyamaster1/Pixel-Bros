import { FC, useState } from 'react'

import { StartGame } from './startGame'
import { EndGame } from './endGame'

import styles from './index.module.scss'

export const PlayPage: FC = () => {
  const [isBeginGame, setIsBeginGame] = useState(true)

  return (
    <main className={styles.playPage}>
      {isBeginGame ? <StartGame /> : <EndGame />}
    </main>
  )
}
