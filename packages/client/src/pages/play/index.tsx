import { FC, useState } from 'react'
import { StartGame } from './startGame'
import { EndGame } from './endGame'
import GameEngaine from '../../components/game_engaine'
import styles from './index.module.scss'

export const PlayPage: FC = () => {
  const [show, setShow] = useState<'start' | 'end' | 'game'>('start')

  const handleStart = () => setShow('game')
  const handleGameOver = () => setShow('end')

  return (
    <main className={styles.playPage}>
      {show === 'start' ? (
        <StartGame handleStart={handleStart} />
      ) : show === 'game' ? (
        <GameEngaine handleGameOver={handleGameOver} />
      ) : (
        <EndGame handleRepeat={handleStart} />
      )}
    </main>
  )
}
