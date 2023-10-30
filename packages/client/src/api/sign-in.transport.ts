import { BaseTransport } from './base.transport'
import { TSignInFormValue } from '../pages/sign-in-form/sign-in.form'
import { AxiosError } from 'axios'

const authURL = 'https://ya-praktikum.tech/api/v2/auth/'

// просто получаем информацию об авторизации с помощью данных о юзере
let userData: unknown = {}

class SignInTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  signIn(data: TSignInFormValue): Promise<unknown> {
    return this.post('signin', data)
  }

  logout() {
    this.post('logout').catch((error: AxiosError) => {
      throw new Error(error.toString())
    })
  }

  getUserData() {
    return this.get('user')
      .then(user => {
        console.log(user, 'user')
        return (userData = user)
      })
      .catch(() => {
        return (userData = '')
      })
  }
}

export const signInTransport = new SignInTransport(authURL)
