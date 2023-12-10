import { ChangeEvent, useCallback, useState } from 'react'
import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import {
  ButtonColors,
  FooterButton,
} from '../button/pure-button/button.component'
import { Form } from '../form/form.component'
import { SingleCell } from '../cell-empty/cellEmpty.component'
import { Avatar } from '../avatar'
import { profileTransport } from '../../api/profile/profile.api'
import { Controller, useForm } from 'react-hook-form'
import { fieldRequired, validationPatterns } from '../../utils/constants'
import { useAuth } from '../../hooks/use-auth'
import { User } from '../../store/slices/type'

export type TProfileValue = {
  first_name: string
  second_name: string
  login: string
  email: string
  phone: string
  password: string
  avatar: string
}

const defaultFormValue: TProfileValue = {
  avatar: '',
  first_name: '',
  second_name: '',
  login: '',
  email: '',
  phone: '',
  password: '',
}

export function ProfileForm() {
  const [formValue, setFormValue] = useState<TProfileValue>(defaultFormValue)
  const { user } = useAuth()

  const handleClick = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputFile: HTMLInputElement | null = document.getElementById(
        'avatar'
      ) as HTMLInputElement
      const formData: FormData = new FormData()
      const file = inputFile.files ? inputFile.files[0] : 'nofile'
      formData.append('avatar', file)
      profileTransport.handleChangeAvatar(formData).then(() => {
        setFormValue(prevFormValue => ({
          ...prevFormValue,
          [event.target.name]: event.target.value,
        }))
      })
    },
    [formValue]
  )
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: user,
    mode: 'onBlur',
  })

  const onSubmit = (data: User) => {
    console.log('handleSubmit data', data)
  }

  return (
    <>
      {formValue && (
        <Form>
          <EntityHeader title="Profile" />
          <SingleCell height={25} />
          <Avatar
            handleOnChangeField={handleClick}
            src={formValue['avatar'] ? formValue['avatar'] : 'Аватара нет'}
          />
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
                value={value || ''}
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
                value={value || ''}
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
                value={value || ''}
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
                value={value || ''}
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
                value={value || ''}
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
          <FooterButton
            buttonType="submit"
            onClick={handleSubmit(onSubmit)}
            title="Save"
            color={ButtonColors.GREEN}
          />
        </Form>
      )}
    </>
  )
}
