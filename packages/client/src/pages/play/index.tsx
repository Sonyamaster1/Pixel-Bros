import { FC, useEffect, useState } from 'react'

import { StartGame } from './startGame'
import { EndGame } from './endGame'

import styles from './index.module.scss'

enum KeyCodes {
  Space = 'Space',
}

export const PlayPage: FC = () => {
  const [isBeginGame, setIsBeginGame] = useState(true)

  function handleStartGame(event: KeyboardEvent) {
    if (isBeginGame && event.code === KeyCodes.Space) {
      setIsBeginGame(false)
    }
  }

  function handleRepeatGame() {
    setIsBeginGame(true)
  }

  useEffect(() => {
    document.addEventListener('keyup', handleStartGame)

    return () => {
      document.removeEventListener('keyup', handleStartGame)
    }
  }, [])

  return (
    <main className={styles.playPage}>
      {isBeginGame ? (
        <StartGame />
      ) : (
        <EndGame handleRepeatGame={handleRepeatGame} />
      )}
    </main>
  )
}
