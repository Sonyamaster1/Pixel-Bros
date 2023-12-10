import { FC } from 'react'

import {
  IconBird,
  IconPipe,
  IconPipeLg,
  IconPipeReverse,
  IconPipeReverseSm,
  IconPipeSm,
  IconPipeXl,
} from '../../assets/images'

import styles from './background.module.scss'
import { useTheme } from '../../hooks/use-theme'

export const Background: FC = () => {
  const animation = useTheme()

  return (
    <div className={styles.background}>
      <img src={IconPipeLg} className={styles.pipe} alt="pipe-lg" />
      <img src={IconPipe} className={styles.pipe} alt="pipe" />
      <img src={IconPipeXl} className={styles.pipe} alt="pipe-xl" />
      <img src={IconPipeSm} className={styles.pipe} alt="pipe-sm" />
      <img
        src={IconPipeReverseSm}
        className={styles.pipeReverse}
        alt="pipe-reverse-sm"
      />
      <img
        src={IconPipeReverse}
        className={styles.pipeReverse}
        alt="pipe-reverse"
      />
      <div className={styles.birds}>
        <img
          src={IconBird}
          style={animation.FIRST_BIRD}
          className={styles.bird}
          alt="bird"
        />
        <img
          src={IconBird}
          style={animation.SECOND_BIRD}
          className={styles.bird}
          alt="bird"
        />
        <img
          src={IconBird}
          style={animation.THIRD_BIRD}
          className={styles.bird}
          alt="bird"
        />
      </div>
    </div>
  )
}
