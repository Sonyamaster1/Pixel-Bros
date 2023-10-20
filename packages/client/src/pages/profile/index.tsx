import { ChangePasswordForm } from '../../components/change-password-form/change-password-form.component'
import { ProfileForm } from '../../components/profile-form/profile-form.component'
import { MainLayout } from '../../components/main-layout/main-layout.component'
import { SingleCell } from '../../components/cell-empty/cellEmpty.component'

export function Profile(): JSX.Element {
  return (
    <MainLayout>
      <ProfileForm />
      <SingleCell height={50} />
      <ChangePasswordForm />
    </MainLayout>
  )
}
