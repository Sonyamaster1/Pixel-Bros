import { Form } from 'react-router-dom'
import {
  FooterButton,
  ButtonColors,
} from '../../components/button/button.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import { Field } from '../../components/form-field/form-field.component'
import { SingleCell } from '../../components/cell-empty/cellEmpty.component'
import styles from './profile.module.scss'

export function Profile() {
  const onSubmit = () => console.log('handleSubmit')
  const handleClick = () => console.log('click')

  return (
    <div style={{ textAlign: 'center' }}>
      <Form style={{ paddingBottom: 55 }} onSubmit={onSubmit}>
        <EntityHeader title="Profile" />
        <SingleCell height={25} />
        <div className={styles.avatar}>
          <img
            className={styles.avatarImg}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73sw1BREUsk6b_nJVZ5T_aj28Z33uo2OPQDLtIio&s"
            alt="avatar"
          />
        </div>
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
      <Form>
        <EntityHeader title="Change Password" />
        <SingleCell height={48} />
        <Field placeholder="OLd password" inputType="password" />
        <Field placeholder="New password" inputType="password" />
        <Field placeholder="Repeat password" inputType="password" />
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
    </div>
  )
}
