import styles from './submit-button.module.scss'

type TFooterButtonProps = {
  title: string
  color: ButtonColors
  onClick: () => void
  buttonType: 'button' | 'submit' | 'reset' | undefined
}

export enum ButtonColors {
  GREEN = '#00C54F',
  BLUE = '#0066C5',
}

export function FooterButton({
  title,
  color,
  onClick,
  buttonType,
}: TFooterButtonProps): JSX.Element {
  const dynamicStyles = {
    backgroundColor: color,
  }

  return (
    <button
      type={buttonType}
      onClick={onClick}
      style={dynamicStyles}
      className={styles.footerButton}>
      {' '}
      {title}
    </button>
  )
}
