import { Field } from '../../components/form-field/form-field.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import {
  ButtonColors,
  FooterButton,
} from '../../components/button/button.component'
import { Form } from '../../components/form/form.component'
import { SingleCell } from '../../components/cell-empty/cellEmpty.component'

const handleClick = () => console.log('Жмякнули кнопочку')
const handleSubmit = () => console.log('handleSubmit')

export function SignUpForm() {
  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <EntityHeader title="Registration" />
        <SingleCell height={38} />
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
