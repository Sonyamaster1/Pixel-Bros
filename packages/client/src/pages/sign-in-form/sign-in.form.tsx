import {
  Field,
  MainLayout,
  Form,
  EntityHeader,
  SingleCell,
} from '../../components'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/pure-button/button.component'
import { signInTransport } from '../../api/sign-in.transport'
import { AxiosError } from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { fieldRequired, validationPatterns } from '../../utils/constants'
import { useAuth } from '../../hooks/use-auth'
import { YandexOAuthButton } from '../../components/button/yandex-oath-button/yandex-oauth-button.component'
import { yandexOAuthTransport } from '../../api/yandex-OAuth.transport'

export type TSignInFormValue = {
  login: string
  password: string
}

export type TOAuthId = {
  service_id: string
}

const defaultFormValue: TSignInFormValue = {
  login: '',
  password: '',
}

const RedirectOAuthURI = import.meta.env.VITE_REDIRECT_OAUTH_URI
const OAuthURL = import.meta.env.VITE_OAUTH_URL

const handleYandexAuthClick = () =>
  yandexOAuthTransport
    .getServiceId()
    .then(
      (id: TOAuthId) =>
        (window.location.href = `${OAuthURL}&client_id=${id.service_id}&redirect_uri=${RedirectOAuthURI}`)
    )
    .catch((error: AxiosError) => {
      throw new Error(error.toString())
    })

export function SignInForm(): JSX.Element {
  const navigate = useNavigate()
  const { isAuth } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })

  const handleClick: SubmitHandler<TSignInFormValue> = data => {
    signInTransport
      .signIn(data)
      .then(() => navigate('/'))
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
        <SingleCell height={20} />
      </Form>
      <YandexOAuthButton onClick={handleYandexAuthClick} />
    </MainLayout>
  )
}
