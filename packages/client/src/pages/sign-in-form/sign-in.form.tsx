import { Field, MainLayout, Form, EntityHeader } from '../../components'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { signInTransport } from '../../api/sign-in.transport'
import { AxiosError } from 'axios'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { fieldRequired, validationPatterns } from '../../utils/constants'
import { useAuth } from '../../hooks/use-auth'

export type TSignInFormValue = {
  login: string
  password: string
}

const defaultFormValue: TSignInFormValue = {
  login: '',
  password: '',
}

export function SignInForm(): JSX.Element {
  const { isAuth } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick: SubmitHandler<TSignInFormValue> = data => {
    signInTransport
      .signIn(data)
      .then(() => navigate('/game'))
      .catch((error: AxiosError) => {
        throw new Error(error.toString())
      })
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <MainLayout>
      <Form>
        <EntityHeader title="Authorization" />
        <Controller
          control={control}
          rules={{
            required: fieldRequired,
            pattern: {
              value: validationPatterns.login.regexp,
              message: validationPatterns.login.message,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Field
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              inputName="login"
              placeholder="Login"
              inputType="text"
              error={errors?.login?.message}
            />
          )}
          name="login"
        />
        <Controller
          control={control}
          rules={{
            required: fieldRequired,
            pattern: {
              value: validationPatterns.password.regexp,
              message: validationPatterns.password.message,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Field
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              inputName="password"
              placeholder="Password"
              inputType="password"
              error={errors?.password?.message}
            />
          )}
          name="password"
        />
        <FooterButton
          buttonType="submit"
          onClick={handleSubmit(handleClick)}
          title="Sign In"
          color={ButtonColors.BLUE}
        />
      </Form>
    </MainLayout>
  )
}
