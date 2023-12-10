import {
  Field,
  Form,
  SingleCell,
  MainLayout,
  EntityHeader,
} from '../../components'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/pure-button/button.component'
import { Controller, useForm } from 'react-hook-form'
import { fieldRequired, validationPatterns } from '../../utils/constants'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'

export type TSignUpFormValue = {
  first_name: string
  second_name: string
  login: string
  email: string
  phone: string
  password: string
}

export const defaultFormValue: TSignUpFormValue = {
  first_name: '',
  second_name: '',
  login: '',
  email: '',
  phone: '',
  password: '',
}

export function SignUpForm(): JSX.Element {
  const { isAuth } = useAuth()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })
  const onSubmit = (data: TSignUpFormValue) => {
    console.log('onSubmit', data)
  }

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <MainLayout>
      <Form>
        <EntityHeader title="Registration" />
        <SingleCell height={38} />
        <Controller
          control={control}
          rules={{
            required: fieldRequired,
            pattern: {
              value: validationPatterns.first_name.regexp,
              message: validationPatterns.first_name.message,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Field
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              inputName="first_name"
              placeholder="First name"
              inputType="text"
              error={errors?.first_name?.message}
            />
          )}
          name="first_name"
        />
        <Controller
          control={control}
          rules={{
            required: fieldRequired,
            pattern: {
              value: validationPatterns.second_name.regexp,
              message: validationPatterns.second_name.message,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Field
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              inputName="second_name"
              placeholder="Second name"
              inputType="text"
              error={errors?.second_name?.message}
            />
          )}
          name="second_name"
        />
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
              value: validationPatterns.email.regexp,
              message: validationPatterns.email.message,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Field
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              inputName="email"
              placeholder="Email"
              inputType="text"
              error={errors?.email?.message}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: fieldRequired,
            pattern: {
              value: validationPatterns.phone.regexp,
              message: validationPatterns.phone.message,
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Field
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              inputName="phone"
              placeholder="Phone"
              inputType="text"
              error={errors?.phone?.message}
            />
          )}
          name="phone"
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
          onClick={handleSubmit(onSubmit)}
          title="Sign Up"
          color={ButtonColors.SUCCESS}
        />
      </Form>
    </MainLayout>
  )
}
