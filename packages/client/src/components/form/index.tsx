import styles from './form.module.scss'

type TFormProps = {
  onSubmit: () => void
  children: React.ReactNode
}

export function Form({ onSubmit, children }: TFormProps): JSX.Element {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
