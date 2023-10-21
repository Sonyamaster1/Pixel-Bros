import { Field } from '../../components/form-field/form-field.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { Form } from '../../components/form/form.component'
import { SingleCell } from '../../components/cell-empty/cellEmpty.component'
import { MainLayout } from '../../components/main-layout/main-layout.component'
import { ChangeEvent, useCallback, useState } from 'react'

export type TSignUpFormValue = {
  firstName: string
  secondName: string
  login: string
  email: string
  phone: string
  password: string
}

const defaultFormValue: TSignUpFormValue = {
  firstName: '',
  secondName: '',
  login: '',
  email: '',
  phone: '',
  password: '',
}

const handleClick = () => console.log('Жмякнули кнопочку')
const handleSubmit = () => console.log('handleSubmit')

export function SignUpForm(): JSX.Element {
  const [formValue, setFormValue] = useState<TSignUpFormValue>(defaultFormValue)

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
    <MainLayout>
      <Form onSubmit={handleSubmit}>
        <EntityHeader title="Registration" />
        <SingleCell height={38} />
        <Field
          value={formValue['firstName']}
          onChange={handleOnChangeField}
          inputName="firstName"
          placeholder="First name"
          inputType="text"
        />
        <Field
          value={formValue['secondName']}
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
          onClick={handleClick}
          title="Sign Up"
          color={ButtonColors.GREEN}
        />
      </Form>
    </MainLayout>
  )
}
