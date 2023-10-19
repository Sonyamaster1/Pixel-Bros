import { Field } from '../../components/form-field/form-field.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { Form } from '../../components/form/form.component'
import { ChangeEvent, useCallback, useState } from 'react'

const handleSubmit = () => console.log('handleSubmit')

type TFormValueType = {
  login: string
  password: string
}

const defaultFormValue: TFormValueType = {
  login: '',
  password: '',
}

export function SignInForm() {
  const [formValue, setFormValue] = useState<TFormValueType>(defaultFormValue)

  const handleClick = useCallback(() => console.log(formValue), [formValue])
  const handleOnChangeField = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValue(prevFormValue => ({
        ...prevFormValue,
        [event.target.name]: event.target.value,
      }))
      console.log(formValue, 'formValue')
    },
    [formValue]
  )

  return (
    <Form onSubmit={handleSubmit}>
      <EntityHeader title="Authorization" />
      <Field
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="login"
        placeholder="Login"
        inputType="text"
      />
      <Field
        value={formValue['password']}
        onChange={handleOnChangeField}
        inputName="password"
        placeholder="Password"
        inputType="password"
      />
      <FooterButton
        buttonType="button"
        onClick={handleClick}
        title="Sign In"
        color={ButtonColors.BLUE}
      />
    </Form>
  )
}
