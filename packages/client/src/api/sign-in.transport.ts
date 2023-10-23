import { BaseTransport } from './base.transport'
import { TSignInFormValue } from '../pages/sign-in-form/sign-in.form'

const authURL = 'https://ya-praktikum.tech/api/v2/auth/'

// просто получаем информацию об авторизации с помощью данных о юзере
let userData: unknown = {}

class SignInTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  async signIn(data: TSignInFormValue): Promise<unknown> {
    try {
      const response = this.post('signin', data)
      return response
    } catch (error: any) {
      throw new Error(error.toString())
    }
  }

  logout() {
    try {
      const response = this.post('logout')
      return response
    } catch (error: any) {
      throw new Error(error.toString())
    }
  }

  async getUserData() {
    try {
      const user = await this.get('user')
      return (userData = user)
    } catch (error) {
      return (userData = '')
    }
  }
}

export const signInTransport = new SignInTransport(authURL)
