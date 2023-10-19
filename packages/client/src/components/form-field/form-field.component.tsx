import { ChangeEventHandler } from 'react'
import './field.style.pcss'
import { SingleCell } from '../cell-empty/cellEmpty.component'

type TFieldProps = {
  placeholder: string
  inputType: string
  id?: string
  inputName: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export function Field({
  placeholder,
  inputType,
  id = placeholder,
  inputName,
  onChange,
  value,
}: TFieldProps): JSX.Element {
  return (
    <div>
      <input
        name={inputName}
        className="field"
        placeholder={placeholder}
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
      />
      <SingleCell height={20} />
    </div>
  )
}
