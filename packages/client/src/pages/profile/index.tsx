import {
  ChangePasswordForm,
  ProfileForm,
  MainLayout,
  SingleCell,
} from 'client/src/components'
import { checkAuthRenderHOC } from 'client/src/utils/authorization-hoc'

export function Profile(): JSX.Element {
  return (
    <MainLayout>
      <ProfileForm />
      <SingleCell height={50} />
      <ChangePasswordForm />
    </MainLayout>
  )
}

export const WithAuthorizationProfile = checkAuthRenderHOC(Profile)
