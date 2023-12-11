import './footer-button.style.pcss'
import { useTheme } from '../../../hooks/use-theme'

type TFooterButtonProps = {
  title: string
  color: ButtonColors
  onClick: () => void
  buttonType: 'button' | 'submit' | 'reset' | undefined
  className?: string
}

export enum ButtonColors {
  SUCCESS = 'SUCCESS',
  NEUTRAL = 'NEUTRAL',
  ALERT = 'ALERT',
}

export function FooterButton({
  title,
  color,
  onClick,
  buttonType,
  className = '',
}: TFooterButtonProps): JSX.Element {
  const theme = useTheme(color)

  return (
    <button
      type={buttonType}
      onClick={onClick}
      style={theme.BUTTON}
      className={`footer-button ${className}`}>
      {' '}
      {title}
    </button>
  )
}
