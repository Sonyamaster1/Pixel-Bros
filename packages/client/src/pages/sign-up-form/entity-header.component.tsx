import './styles/entity-header.style.pcss'

type TEntityHeaderProps = {
  title: string
}

export function EntityHeader({ title }: TEntityHeaderProps): JSX.Element {
  return <h1>{title}</h1>
}
