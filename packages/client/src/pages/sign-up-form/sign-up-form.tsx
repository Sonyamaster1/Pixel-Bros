import { Field } from '../../components/field'
import { EntityHeader } from '../../components/header'
import { ButtonColors, FooterButton } from '../../components/submit-button'
import { Form } from '../../components/form'

export function SignUpForm() {
  const handleClick = () => console.log('Жмякнули кнопочку')
  const handleSubmit = () => console.log('handleSubmit')

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <EntityHeader title="Registration" />
        <Field placeholder="First name" inputType="text" />
        <Field placeholder="Second Name" inputType="text" />
        <Field placeholder="Login" inputType="text" />
        <Field placeholder="email" inputType="text" />
        <Field placeholder="Phone" inputType="phone" />
        <Field placeholder="Password" inputType="password" />
        <FooterButton
          buttonType="submit"
          onClick={handleClick}
          title="Sign Up"
          color={ButtonColors.GREEN}
        />
      </Form>
    </div>
  )
}
