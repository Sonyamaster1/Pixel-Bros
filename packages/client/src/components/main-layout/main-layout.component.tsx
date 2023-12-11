import './main-layout.style.pcss'
import { useTheme } from '../../hooks/use-theme'

type TMainLayoutProps = {
  children?: JSX.Element | JSX.Element[]
}

export function MainLayout({ children }: TMainLayoutProps): JSX.Element {
  const theme = useTheme()

  return (
    <div style={theme.MAIN_LAYOUT} className="main-layout">
      {children}
    </div>
  )
}
