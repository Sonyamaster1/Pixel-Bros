import { Field } from './sign-up-form.field'
import { EntityHeader } from './entity-header.component'
import { ButtonColors, FooterButton } from './button.component'
import { Form } from './form.component'

const handleClick = () => console.log('Жмякнули кнопочку')
const handleSubmit = () => console.log('handleSubmit')

export function SignUpForm() {
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
