import { BaseTransport } from './base.transport'

const jokesUrl = 'https://api.chucknorris.io/jokes/random'

export interface IJoke {
  categories: unknown[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}
class JokesTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  getRandomJoke(): Promise<IJoke> {
    return this.get<IJoke>('')
      .then(joke => {
        return joke
      })
      .catch(err => {
        console.log(err)
        throw err
      })
  }
}
export const jokesTransport = new JokesTransport(jokesUrl)
