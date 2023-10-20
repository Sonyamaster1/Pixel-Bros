import './main-layout.style.pcss'

type TMainLayoutProps = {
  children?: JSX.Element | JSX.Element[]
}

export function MainLayout({ children }: TMainLayoutProps): JSX.Element {
  return <div className="main-layout">{children}</div>
}
