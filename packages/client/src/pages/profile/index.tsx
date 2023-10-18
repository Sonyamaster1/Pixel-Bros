import { Form } from 'react-router-dom'
import {
  FooterButton,
  ButtonColors,
} from '../../components/button/button.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import { Field } from '../../components/form-field/form-field.component'
import { SingleCell } from '../../components/cell-empty/cellEmpty.component'

export function Profile() {
  const onSubmit = () => console.log('handleSubmit')
  const handleClick = () => console.log('click')

  return (
    <div style={{ textAlign: 'center' }}>
      <Form onSubmit={onSubmit}>
        <EntityHeader title="Profile" />
        <SingleCell height={38} />
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
