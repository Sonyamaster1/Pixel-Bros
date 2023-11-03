import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import getAllLeaderboard from './fetchers'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { useNavigate } from 'react-router-dom'
import { fakeResults } from './constants'
import LeaderboardCell from './LeaderboardCell'
import { EntityHeader } from '../../components'
import { LeaderboardItem } from './type'

const Leaderboard = () => {
  const [items, setItems] = useState<LeaderboardItem[]>(fakeResults)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    // Следует раскомментировать после добавления создания ручки и указания рабочего УРЛ в getAllLeaderboard
    // getAllLeaderboard()
    //   .then(data => setItems(data))
    //   .catch(err => setError(err.message))
  }, [])

  const goBackHandler = () => navigate(-1)

  return (
    <div className={styles.leaderboard}>
      <div className={styles.content}>
        <EntityHeader title="Leaderboard" />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.content__items}>
          {items && items.map(item => <LeaderboardCell item={item} />)}
        </div>
        <FooterButton
          className={styles.go_back_btn}
          buttonType="button"
          onClick={goBackHandler}
          title="Go Back"
          color={ButtonColors.BLUE}
        />
      </div>
    </div>
  )
}

export default Leaderboard
