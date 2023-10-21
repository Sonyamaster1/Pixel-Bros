import { Field } from '../../components/form-field/form-field.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { Form } from '../../components/form/form.component'
import { ChangeEvent, useCallback, useState } from 'react'
import { signInTransport } from '../../api/sign-in.transport'

const handleSubmit = () => console.log('handleSubmit')

export type TSignInFormValue = {
  login: string
  password: string
}

const defaultFormValue: TSignInFormValue = {
  login: '',
  password: '',
}

export function SignInForm() {
  const [formValue, setFormValue] = useState<TSignInFormValue>(defaultFormValue)

  const handleClick = useCallback(
    () => signInTransport.signIn(formValue),
    [formValue]
  )
  const handleOnChangeField = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValue(prevFormValue => ({
        ...prevFormValue,
        [event.target.name]: event.target.value,
      }))
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
