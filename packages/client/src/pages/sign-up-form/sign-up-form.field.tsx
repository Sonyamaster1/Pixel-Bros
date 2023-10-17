import { ChangeEvent, useState } from 'react'
import './styles/field.style.pcss'

type TFieldProps = {
  placeholder: string
  inputType: string
}

export function Field({ placeholder, inputType }: TFieldProps): JSX.Element {
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
        id="inputField"
        value={inputValue}
        onChange={handleOnChange}
      />
      <p>Вы ввели: {inputValue}</p>
    </div>
  )
}
