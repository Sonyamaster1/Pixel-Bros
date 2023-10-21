import { Field, MainLayout, Form, EntityHeader } from '../../components'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { ChangeEvent, useCallback, useState } from 'react'
import { signInTransport } from '../../api/sign-in.transport'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

const handleSubmit = () => console.log('handleSubmit')

export type TSignInFormValue = {
  login: string
  password: string
}

const defaultFormValue: TSignInFormValue = {
  login: '',
  password: '',
}

export function SignInForm(): JSX.Element {
  const [formValue, setFormValue] = useState<TSignInFormValue>(defaultFormValue)
  const navigate = useNavigate()

  const handleClick = useCallback(
    () =>
      signInTransport
        .signIn(formValue)
        .then(() => navigate('/game'))
        .catch((error: AxiosError) => {
          throw new Error(error.toString())
        }),
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
    <MainLayout>
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
    </MainLayout>
  )
}
