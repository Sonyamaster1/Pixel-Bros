import { FC } from 'react'

import { IconBird, IconGameOver } from '../../assets/images'

import { FooterButton } from '../../components'
import { ButtonColors } from '../../components/button/button.component'

import styles from './endGame.module.scss'

interface Props {
  handleRepeatGame(): void
}

export const EndGame: FC<Props> = ({ handleRepeatGame }) => {
  function goToHome() {
    // @TODO вызывать route.push после удаления пакетов с типами для роутера
  }

  return (
    <section className={styles.endGame}>
      <img
        src={IconGameOver}
        width={366}
        height={80}
        className={styles.iconGameOver}
        alt="game over"
      />
      <span className={styles.score}>100</span>
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
          onClick={handleRepeatGame}
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
