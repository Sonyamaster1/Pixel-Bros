import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/pure-button/button.component'
import { useNavigate } from 'react-router-dom'
import LeaderboardCell from './LeaderboardCell'
import { EntityHeader, MainLayout } from '../../components'
import { LeaderboardItem } from './type'
import { checkAuthRenderHOC } from '../../utils/authorization-hoc'
import { leaderboardTransport } from '../../api/leaderboard'

const Leaderboard = () => {
  const navigate = useNavigate()
  const goBackHandler = () => navigate(-1)

  const [items, setItems] = useState<LeaderboardItem[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    leaderboardTransport
      .getLeaderboard()
      .then(data => setItems(data))
      .catch(() => setError('Ошибка получения таблицы лидеров!'))
  }, [])

  return (
    <MainLayout>
      <div className={styles.content}>
        <EntityHeader title="Leaderboard" />
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.content__items}>
          {items &&
            items.map(item => (
              <LeaderboardCell
                key={`${item.data.username}-${item.data.score}`}
                item={item}
              />
            ))}
        </div>
        <FooterButton
          className={styles.go_back_btn}
          buttonType="button"
          onClick={goBackHandler}
          title="Go Back"
          color={ButtonColors.NEUTRAL}
        />
      </div>
    </MainLayout>
  )
}

export const WithAuthorizationLeaderboard = checkAuthRenderHOC(Leaderboard)
