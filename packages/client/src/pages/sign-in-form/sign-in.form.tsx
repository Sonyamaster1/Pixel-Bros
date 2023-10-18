import { Field } from '../../components/form-field/form-field.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { Form } from '../../components/form/form.component'

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
