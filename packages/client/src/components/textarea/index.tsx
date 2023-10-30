import {
  ChangeEventHandler,
  FocusEventHandler,
  TextareaHTMLAttributes,
} from 'react'
import './textarea.style.pcss'
import { SingleCell } from '../cell-empty/cellEmpty.component'

type TFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string
  error?: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
}

export function Textarea({
  value,
  error = '',
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onBlur = () => {},
  ...attrs
}: TFieldProps): JSX.Element {
  return (
    <div>
      <textarea
        {...attrs}
        value={value}
        onChange={onChange}
        onBlur={onBlur}></textarea>
      {error && <p className="field__error">{error}</p>}
      <SingleCell height={20} />
    </div>
  )
}
