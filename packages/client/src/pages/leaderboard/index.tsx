import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import getAllLeaderboard from './fetchers'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { useNavigate } from 'react-router-dom'

const fakeResults = [
  {
    id: 1,
    name: 'Fake name 1',
    result: 3000,
  },
  {
    id: 2,
    name: 'Fake name 2',
    result: 2900,
  },
  {
    id: 3,
    name: 'Fake name 3',
    result: 2800,
  },
  {
    id: 4,
    name: 'Fake name 4',
    result: 2700,
  },
  {
    id: 5,
    name: 'Fake name 5',
    result: 2600,
  },
  {
    id: 6,
    name: 'Fake name 6',
    result: 2500,
  },
  {
    id: 7,
    name: 'Fake name 7',
    result: 2400,
  },
  {
    id: 8,
    name: 'Fake name 8',
    result: 2300,
  },
  {
    id: 9,
    name: 'Fake name 9',
    result: 2200,
  },
  {
    id: 10,
    name: 'Fake name 10',
    result: 2100,
  },
]

const Leaderboard = () => {
  const [items, setItems] = useState(fakeResults)
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
        <h1 className={styles.content__title}>Leaderboard</h1>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.content__items}>
          {items.length > 0 &&
            items.map(item => (
              <div key={item.id} className={styles.card}>
                <p className={styles.card__name}>{item.name}</p>
                <p className={styles.card__result}>{item.result}</p>
              </div>
            ))}
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
