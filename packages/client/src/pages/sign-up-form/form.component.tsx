import './styles/form.style.pcss'

type TFormProps = {
  onSubmit: () => void
  children: React.ReactNode
}

export function Form({ onSubmit, children }: TFormProps): JSX.Element {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  )
}
