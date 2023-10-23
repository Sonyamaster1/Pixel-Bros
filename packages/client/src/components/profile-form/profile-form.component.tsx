import { useEffect } from 'react'
import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import { ButtonColors, FooterButton } from '../button/button.component'
import { Form } from '../form/form.component'
import { SingleCell } from '../cell-empty/cellEmpty.component'
import { Avatar } from '../avatar'
import { profileTransport } from '../../api/profile/profile.api'
import { signInTransport } from '../../api/sign-in.transport'

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
import styles from '../../pages/profile/profile.module.scss'
import { signInTransport } from '../../api/sign-in.transport'
import { Controller, useForm } from 'react-hook-form'
import {
  TSignUpFormValue,
} from '../../pages/sign-up-form/sign-up-form'
import { fieldRequired, validationPatterns } from '../../utils/constants'

export function ProfileForm() {
  const [formValue, setFormValue] = useState<TProfileValue>(defaultFormValue)
  const handleClickTest = () => console.log('click')
  const onSubmit = () => console.log('handleSubmit')

  const handleOnChangeField = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormValue(prevFormValue => ({
        ...prevFormValue,
        [event.target.name]: event.target.value,
      }))
    },

    [formValue]
  )

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
        signInTransport
          .getUserData()
          .then((res: unknown) => setFormValue(res as TProfileValue))
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

  useEffect(() => {
    signInTransport
      .getUserData()
      .then(res => setFormValue(res as TProfileValue))
  }, [])

  return (
    <Form>
      <EntityHeader title="Profile" />
      <SingleCell height={25} />
      <Avatar handleOnChangeField={handleClick} src={formValue['avatar']} />
      <Field
        value={formValue['first_name']}
        onChange={handleOnChangeField}
        inputName="firstName"
        placeholder="First Name"
        inputType="text"
      />
      <Field
        value={formValue['second_name']}
        onChange={handleOnChangeField}
        inputName="secondName"
        placeholder="Second Name"
        inputType="text"
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
        title="Save"
        color={ButtonColors.GREEN}
      />
    </Form>
  )
}
