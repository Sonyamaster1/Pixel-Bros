import { Field } from './sign-up-form.field'
import { EntityHeader } from './entity-header.component'
import { ButtonColors, FooterButton } from './button.component'
import { Form } from './form.component'
import { SingleCell } from '../../components/cellEmpty.component'

export function SignUpForm() {
  const handleClick = () => console.log('Жмякнули кнопочку')
  const handleSubmit = () => console.log('handleSubmit')

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
