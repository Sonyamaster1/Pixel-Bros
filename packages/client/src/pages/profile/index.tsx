import {
  ChangePasswordForm,
  ProfileForm,
  MainLayout,
  SingleCell,
} from '../../components'

export function Profile(): JSX.Element {
  return (
    <MainLayout>
      <ProfileForm />
      <SingleCell height={50} />
      <ChangePasswordForm />
    </MainLayout>
  )
}
