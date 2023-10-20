import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import { ButtonColors, FooterButton } from '../button/button.component'
import { Form } from '../form/form.component'
import { ChangeEvent, useCallback, useState } from 'react'
import { SingleCell } from '../cell-empty/cellEmpty.component'
import styles from '../../pages/profile/profile.module.scss'

export type TChangePasswordFormValue = {
  login: string
  password: string
}

const defaultFormValue: TChangePasswordFormValue = {
  login: '',
  password: '',
}

export function ProfileForm() {
  const [formValue, setFormValue] =
    useState<TChangePasswordFormValue>(defaultFormValue)
  const handleClick = () => console.log('click')
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

  return (
    <Form onSubmit={onSubmit}>
      <EntityHeader title="Profile" />
      <SingleCell height={25} />
      <div className={styles.avatar}>
        <img
          className={styles.avatarImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73sw1BREUsk6b_nJVZ5T_aj28Z33uo2OPQDLtIio&s"
          alt="avatar"
        />
      </div>
      <Field
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="firstName"
        placeholder="First Name"
        inputType="text"
      />
      <Field
        value={formValue['login']}
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
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="email"
        placeholder="email"
        inputType="text"
      />
      <Field
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="phone"
        placeholder="Phone"
        inputType="phone"
      />
      <Field
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="password"
        placeholder="Password"
        inputType="password"
      />
      <FooterButton
        buttonType="submit"
        onClick={handleClick}
        title="Save"
        color={ButtonColors.GREEN}
      />
    </Form>
  )
}
