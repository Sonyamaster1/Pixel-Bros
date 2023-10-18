import { FC } from 'react'

import { Background } from './background'

import styles from './index.module.scss'

export const HomePage: FC = () => {
  return (
    <main className={styles.homePage}>
      <Background />
      <div className={styles.content}>
        <span className={styles.description}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века.
        </span>
      </div>
    </main>
  )
}
