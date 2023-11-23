import { BaseTransport } from './base.transport'
import { TOAuthId } from '../pages/sign-in-form/sign-in.form'

const OAuthURL = 'https://ya-praktikum.tech/api/v2/oauth/yandex'

type TOAuthConfig = {
  code: string
  redirect_uri: string
}

class YandexOAuthTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  signIn(data: TOAuthConfig): Promise<unknown> {
    return this.post('', data)
  }

  getServiceId(): Promise<TOAuthId> {
    return this.get<TOAuthId>('service-id').catch(error => {
      throw new Error(error.response.data.reason)
    })
  }
}

export const yandexOAuthTransport = new YandexOAuthTransport(OAuthURL)
