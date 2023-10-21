import { Field } from '../form-field/form-field.component'
import { EntityHeader } from '../entity-header/entity-header.component'
import { ButtonColors, FooterButton } from '../button/button.component'
import { Form } from '../form/form.component'
import { ChangeEvent, useCallback, useState } from 'react'
import { SingleCell } from '../cell-empty/cellEmpty.component'

export type TChangePasswordFormValue = {
  login: string
  password: string
}

const defaultFormValue: TChangePasswordFormValue = {
  login: '',
  password: '',
}

export function ChangePasswordForm() {
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
      <EntityHeader title="Change Password" />
      <SingleCell height={48} />
      <Field
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="oldPassword"
        placeholder="OLd password"
        inputType="password"
      />
      <Field
        value={formValue['login']}
        onChange={handleOnChangeField}
        inputName="newPassword"
        placeholder="New password"
        inputType="password"
      />
      <Field
        value={formValue['login']}
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
          buttonType="submit"
          onClick={handleClick}
          title="Change"
          color={ButtonColors.GREEN}
        />
        <FooterButton
          buttonType="submit"
          onClick={handleClick}
          title="Go to Leader"
          color={ButtonColors.GREEN}
        />
      </div>
    </Form>
  )
}
