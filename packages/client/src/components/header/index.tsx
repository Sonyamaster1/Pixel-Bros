import styles from './header.module.scss'
type TEntityHeaderProps = {
  title: string
}

export function EntityHeader({ title }: TEntityHeaderProps): JSX.Element {
  return <h1 className={styles.header}>{title}</h1>
}
