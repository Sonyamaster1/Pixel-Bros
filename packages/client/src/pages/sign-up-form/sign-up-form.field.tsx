import { ChangeEvent, useState } from 'react'
import './styles/field.style.pcss'
import { SingleCell } from '../../components/cellEmpty.component'

type TFieldProps = {
  placeholder: string
  inputType: string
  id?: string
}

export function Field({
  placeholder,
  inputType,
  id = placeholder,
}: TFieldProps): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input
        className="field"
        placeholder={placeholder}
        type={inputType}
        id={id}
        value={inputValue}
        onChange={handleOnChange}
      />
      <SingleCell height={20} />
    </div>
  )
}
