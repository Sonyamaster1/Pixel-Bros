import { Form } from 'react-router-dom'
import {
  FooterButton,
  ButtonColors,
} from '../../components/button/button.component'
import { EntityHeader } from '../../components/entity-header/entity-header.component'
import { Field } from '../../components/form-field/form-field.component'
import { SingleCell } from '../../components/cell-empty/cellEmpty.component'
import { Avatar } from '../../components/avatar'
import { profileTransport } from '../../api/profile/profile.api'

export interface IChangeAvatar {
  avatar: string
  formData: FormData
}
export function Profile() {
  const onSubmit = () => console.log('handleSubmit')
  const handleClick = () => console.log('click')

  const changeAvatar = (e: Event) => {
    e.preventDefault()
    const inputFile: HTMLInputElement | null = document.getElementById(
      'avatar'
    ) as HTMLInputElement
    const formData: FormData = new FormData()
    const file = inputFile.files ? inputFile.files[0] : 'nofile'
    formData.append('avatar', file)
    profileTransport.getAvatar(formData)
    console.log('test')
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Form style={{ paddingBottom: 55 }} onSubmit={onSubmit}>
        <EntityHeader title="Profile" />
        <SingleCell height={25} />
        <Avatar src={''} onClick={(e: Event) => changeAvatar(e)} />
        <Field
          placeholder="First Name"
          inputType="text"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
        <Field
          placeholder="Second Name"
          inputType="text"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
        <Field
          placeholder="Login"
          inputType="text"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
        <Field
          placeholder="Phone"
          inputType="phone"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
        <Field
          placeholder="Password"
          inputType="password"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
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
        <Field
          placeholder="OLd password"
          inputType="password"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
        <Field
          placeholder="New password"
          inputType="password"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
        <Field
          placeholder="Repeat password"
          inputType="password"
          inputName={''}
          value={''}
          onChange={() => console.log('avatar')}
        />
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
