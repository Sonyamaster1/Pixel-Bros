import { FC } from 'react'
import { useNavigate } from 'react-router'
import { FooterButton } from '../../components'
import { ButtonColors } from '../../components/button/button.component'
import { IconBird, IconGameOver } from '../../assets/images'
import styles from './endGame.module.scss'

type Props = {
  score: number
  handleRepeat(): void
}

export const EndGame: FC<Props> = ({ score, handleRepeat }) => {
  const navigate = useNavigate()
  const goToHome = () => navigate('/')

  return (
    <section className={styles.endGame}>
      <img
        src={IconGameOver}
        width={366}
        height={80}
        className={styles.iconGameOver}
        alt="game over"
      />
      <span className={styles.score}>{score}</span>
      <img
        src={IconBird}
        width={148}
        height={106}
        className={styles.iconBird}
        alt="icon bird"
      />
      <div className={styles.buttonsWrapper}>
        <FooterButton
          title="Repeat"
          color={ButtonColors.GREEN}
          onClick={handleRepeat}
          buttonType="button"
        />
        <FooterButton
          title="Go home"
          color={ButtonColors.GREEN}
          onClick={goToHome}
          buttonType="button"
        />
      </div>
    </section>
  )
}
