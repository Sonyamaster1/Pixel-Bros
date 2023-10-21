import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import { ButtonColors, FooterButton } from '../button/button.component'
import { Form } from '../form/form.component'
import { SingleCell } from '../cell-empty/cellEmpty.component'
import styles from '../../pages/profile/profile.module.scss'
import { signInTransport } from '../../api/sign-in.transport'
import { Controller, useForm } from 'react-hook-form'
import {
  defaultFormValue,
  TSignUpFormValue,
} from '../../pages/sign-up-form/sign-up-form'
import { validationPatterns } from '../../utils/constants'
import { useEffect } from 'react'

export function ProfileForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultFormValue,
    mode: 'onBlur',
  })

  useEffect(() => {
    signInTransport.getUserData().then(res => {
      reset(res as TSignUpFormValue)
    })
  }, [])

  const onSubmit = (data: TSignUpFormValue) => {
    console.log('handleSubmit data', data)
  }

  return (
    <Form>
      <EntityHeader title="Profile" />
      <SingleCell height={25} />
      <div className={styles.avatar}>
        <img
          className={styles.avatarImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73sw1BREUsk6b_nJVZ5T_aj28Z33uo2OPQDLtIio&s"
          alt="avatar"
        />
      </div>
      <Controller
        control={control}
        rules={{
          required: { value: true, message: 'Required field' },
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
          required: { value: true, message: 'Required field' },
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
          required: { value: true, message: 'Required field' },
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
          required: { value: true, message: 'Required field' },
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
          required: { value: true, message: 'Required field' },
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
          required: { value: true, message: 'Required field' },
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
        title="Save"
        color={ButtonColors.GREEN}
      />
    </Form>
  )
}
