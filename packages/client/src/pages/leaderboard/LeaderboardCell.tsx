import { FC } from 'react'
import styles from './leaderboard-card.module.scss'
import { LeaderboardItem } from './type'

type LeaderboardCellProps = {
  item: LeaderboardItem
}

const LeaderboardCell: FC<LeaderboardCellProps> = ({ item }) => {
  const { score, username } = item.data

  return (
    <div className={styles.card}>
      <p className={styles.card__name}>{username}</p>
      <p className={styles.card__result}>{score}</p>
    </div>
  )
}

export default LeaderboardCell
