import { BaseTransport } from './base.transport'
import { TSignInFormValue } from '../pages/sign-in-form/sign-in.form'
import { AxiosError } from 'axios'

const authURL = 'https://ya-praktikum.tech/api/v2/auth/'

class SignInTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  signIn(data: TSignInFormValue): Promise<unknown> {
    return this.post('signin', data)
  }

  logout(): Promise<unknown> {
    return this.post('logout').catch((error: AxiosError) => {
      throw new Error(error.toString())
    })
  }

  getUserData() {
    return this.get('user')
      .then(user => {
        return user
      })
      .catch(error => {
        throw new Error(error.response.data.reason)
      })
  }
}

export const signInTransport = new SignInTransport(authURL)
