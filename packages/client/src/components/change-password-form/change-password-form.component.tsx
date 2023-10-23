import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import { ButtonColors, FooterButton } from '../button/button.component'
import { Form } from '../form/form.component'
import { ChangeEvent, useCallback, useState } from 'react'
import { SingleCell } from '../cell-empty/cellEmpty.component'
import { profileTransport } from '../../api/profile/profile.api'
import { useNavigate } from 'react-router-dom'

export type TChangePasswordFormValue = {
  oldPassword: string
  newPassword: string
  repeatPassword: string
}

export type TPasswordValue = {
  oldPassword: string
  newPassword: string
}

const defaultFormValue: TChangePasswordFormValue = {
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
}

export function ChangePasswordForm(): JSX.Element {
  const [formValue, setFormValue] =
    useState<TChangePasswordFormValue>(defaultFormValue)

  const navigate = useNavigate()

  const handleClick = useCallback(
    () => profileTransport.handleChangePassword(formValue),
    [formValue]
  )
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
      <EntityHeader title="Change Password" />
      <SingleCell height={48} />
      <Field
        value={formValue['oldPassword']}
        onChange={handleOnChangeField}
        inputName="oldPassword"
        placeholder="OLd password"
        inputType="password"
      />
      <Field
        value={formValue['newPassword']}
        onChange={handleOnChangeField}
        inputName="newPassword"
        placeholder="New password"
        inputType="password"
      />
      <Field
        value={formValue['repeatPassword']}
        onChange={handleOnChangeField}
        inputName="repeatPassword"
        placeholder="Repeat password"
        inputType="password"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }}>
        <FooterButton
          buttonType="button"
          onClick={handleClick}
          title="Change"
          color={ButtonColors.GREEN}
        />
        <FooterButton
          buttonType="button"
          onClick={() => navigate('/leaderboard')}
          title="Go to Leader"
          color={ButtonColors.GREEN}
        />
      </div>
    </Form>
  )
}
