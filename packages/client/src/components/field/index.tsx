import { ChangeEvent, useState } from 'react'
import styles from './field.module.scss'

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
        className={styles.field}
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
