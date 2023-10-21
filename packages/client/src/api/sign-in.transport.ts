import { BaseTransport } from './base.transport'
import { TSignInFormValue } from '../pages/sign-in-form/sign-in.form'
import { AxiosError } from 'axios'

const authURL = 'https://ya-praktikum.tech/api/v2/auth/'

class SignInTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  signIn(data: TSignInFormValue) {
    this.post('sign', data).catch((error: AxiosError) => {
      throw new Error(error.toString())
    })
  }

  logout() {
    this.post('logout').catch((error: AxiosError) => {
      throw new Error(error.toString())
    })
  }
}

export const signInTransport = new SignInTransport(authURL)
