import { FC, useState } from 'react'
import { StartGame } from './startGame'
import { EndGame } from './endGame'
import GameEngaine from '../../components/game_engaine'
import styles from './index.module.scss'
import { checkAuthRenderHOC } from '../../utils/authorization-hoc'

export const PlayPage: FC = () => {
  const [score, setScore] = useState(0)
  const [show, setShow] = useState<'start' | 'end' | 'game'>('start')

  const handleStart = () => setShow('game')
  const handleGameOver = (value: number) => {
    setScore(value)
    setShow('end')
  }

  return (
    <main className={styles.playPage}>
      {show === 'start' ? (
        <StartGame handleStart={handleStart} />
      ) : show === 'game' ? (
        <GameEngaine handleGameOver={handleGameOver} />
      ) : (
        <EndGame score={score} handleRepeat={handleStart} />
      )}
    </main>
  )
}

export const WithAuthorizationPlayPage = checkAuthRenderHOC(PlayPage)
