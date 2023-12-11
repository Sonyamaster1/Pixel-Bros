import styles from './spinner.module.scss'

type TSpinnerProps = {
  isLoading: boolean
}

export function Spinner({ isLoading }: TSpinnerProps): JSX.Element {
  return (
    <div
      className={`${styles.loader} ${
        !isLoading ? styles.loader__invisible : ''
      }`}></div>
  )
}
