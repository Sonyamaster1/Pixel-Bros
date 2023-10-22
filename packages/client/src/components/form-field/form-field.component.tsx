import { ChangeEventHandler, FocusEventHandler } from 'react'
import './field.style.pcss'
import { SingleCell } from '../cell-empty/cellEmpty.component'

type TFieldProps = {
  placeholder: string
  inputType: string
  id?: string
  inputName: string
  value: string
  error?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined
}

export function Field({
  placeholder,
  inputType,
  id = placeholder,
  inputName,
  onChange,
  value,
  onBlur,
  error = '',
}: TFieldProps): JSX.Element {
  return (
    <div>
      <input
        name={inputName}
        className="field"
        placeholder={placeholder}
        type={inputType}
        onBlur={e => {
          if (onBlur) {
            onBlur(e)
          }
        }}
        id={id}
        value={value}
        onChange={onChange}
      />
      {error && <p className="field__error">{error}</p>}
      <SingleCell height={20} />
    </div>
  )
}
