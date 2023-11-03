import { FC } from 'react'
import styles from './leaderboard-card.module.scss'
import { LeaderboardItem } from './type'

type LeaderboardCellProps = {
  item: LeaderboardItem
}

const LeaderboardCell: FC<LeaderboardCellProps> = ({ item }) => (
  <div key={item.id} className={styles.card}>
    <p className={styles.card__name}>{item.name}</p>
    <p className={styles.card__result}>{item.result}</p>
  </div>
)

export default LeaderboardCell
