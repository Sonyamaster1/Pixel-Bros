import { IChangeAvatar } from '../../pages/profile'
import { BaseTransport } from '../base.transport'
import { AxiosError } from 'axios'

const authURL = 'https://ya-praktikum.tech/api/v2/user/'

class ProfileTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }
  getAvatar(data: any) {
    this.put('profile/avatar', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).catch((error: AxiosError) => {
      throw new Error(error.toString())
    })
  }
  // signIn(data) {
  // this.post('sign', data).catch((error: AxiosError) => {
  //   throw new Error(error.toString())
  // })
  // }

  // logout() {
  //   this.post('logout').catch((error: AxiosError) => {
  //     throw new Error(error.toString())
  //   })
  // }
}

export const profileTransport = new ProfileTransport(authURL)
