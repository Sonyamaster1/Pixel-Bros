import { Field } from '../sign-up-form/sign-up-form.field'
import { EntityHeader } from '../sign-up-form/entity-header.component'
import { ButtonColors, FooterButton } from '../sign-up-form/button.component'
import { Form } from '../sign-up-form/form.component'

const handleClick = () => console.log('Жмякнули кнопочку')
const handleSubmit = () => console.log('handleSubmit')

export function SignInForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <EntityHeader title="Authorization" />
      <Field placeholder="Login" inputType="text" />
      <Field placeholder="Password" inputType="password" />
      <FooterButton
        buttonType="submit"
        onClick={handleClick}
        title="Sign In"
        color={ButtonColors.BLUE}
      />
    </Form>
  )
}
