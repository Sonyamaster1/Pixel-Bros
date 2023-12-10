import styles from './spinner.module.scss'

type TSpinnerProps = {
  isLoading: boolean
}

export function Spinner({ isLoading }: TSpinnerProps): JSX.Element {
  if (!isLoading) {
    return <></>
  }

  return <div className={styles.loader}></div>
}
