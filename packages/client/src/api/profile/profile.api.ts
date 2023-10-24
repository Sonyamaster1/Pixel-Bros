import { TPasswordValue } from '../../components/change-password-form/change-password-form.component'
import { BaseTransport } from '../base.transport'
import { AxiosError } from 'axios'

const authURL = 'https://ya-praktikum.tech/api/v2/user/'

class ProfileTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }
  async handleChangeAvatar(data: FormData) {
    return this.put('profile/avatar', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).catch((error: AxiosError) => {
      throw new Error(error.toString())
    })
  }

  async handleChangePassword(data: TPasswordValue) {
    return this.put('password', data).catch((error: AxiosError) => {
      throw new Error(error.toString())
    })
  }
}

export const profileTransport = new ProfileTransport(authURL)
