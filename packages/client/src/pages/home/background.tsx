import { FC } from 'react'

import IconPipe from '../../assets/images/pipe.svg'
import IconPipeSm from '../../assets/images/pipe-sm.svg'
import IconPipeLg from '../../assets/images/pipe-lg.svg'
import IconPipeXl from '../../assets/images/pipe-xl.svg'
import IconPipeReverse from '../../assets/images/pipe-reverse.svg'
import IconPipeReverseSm from '../../assets/images/pipe-reverse-sm.svg'
import IconBird from '../../assets/images/yellowbird.svg'

import styles from './background.module.scss'

export const Background: FC = () => {
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
        <img src={IconBird} className={styles.bird} alt="bird" />
        <img src={IconBird} className={styles.bird} alt="bird" />
        <img src={IconBird} className={styles.bird} alt="bird" />
      </div>
    </div>
  )
}