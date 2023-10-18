import { EntityHeader } from '../../components/header'
import { Field } from '../../components/field'
import { Form } from '../../components/form'
import { ButtonColors, FooterButton } from '../../components/submit-button'

export function Profile() {
  const onSubmit = () => console.log('handleSubmit')
  const handleClick = () => console.log('click')

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <EntityHeader title="Profile" />
        <Field placeholder="First Name" inputType="text" />
        <Field placeholder="Second Name" inputType="text" />
        <Field placeholder="Login" inputType="text" />
        <Field placeholder="email" inputType="text" />
        <Field placeholder="Phone" inputType="phone" />
        <Field placeholder="Password" inputType="password" />
        <FooterButton
          buttonType="submit"
          onClick={handleClick}
          title="Save"
          color={ButtonColors.GREEN}
        />
      </Form>
    </div>
  )
}
