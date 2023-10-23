import { useEffect } from 'react'
import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import { ButtonColors, FooterButton } from '../button/button.component'
import { Form } from '../form/form.component'
import { ChangeEvent, useCallback, useState } from 'react'
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

export interface IChangeAvatar {
  avatar: FormData
}
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

  useEffect(() => {
    signInTransport
      .getUserData()
      .then(res => setFormValue(res as TProfileValue))
  }, [])

  return (
    <Form onSubmit={onSubmit}>
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
      />
      <Field
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="login"
        placeholder="Login"
        inputType="text"
      />
      <Field
        value={formValue['email']}
        onChange={handleOnChangeField}
        inputName="email"
        placeholder="email"
        inputType="text"
      />
      <Field
        value={formValue['phone']}
        onChange={handleOnChangeField}
        inputName="phone"
        placeholder="Phone"
        inputType="phone"
      />
      <Field
        value={formValue['password']}
        onChange={handleOnChangeField}
        inputName="password"
        placeholder="Password"
        inputType="password"
      />
      <FooterButton
        buttonType="submit"
        onClick={handleClickTest}
        title="Save"
        color={ButtonColors.GREEN}
      />
    </Form>
  )
}
