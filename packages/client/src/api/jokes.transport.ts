import { BaseTransport } from './base.transport'

const jokesUrl = 'https://api.chucknorris.io/jokes/random'

// просто получаем информацию об авторизации с помощью данных о юзере
let userData: unknown = {}

class JokesTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  getRandomJoke() {
    return this.get('')
      .then(user => {
        console.log(user, 'joke')
        return (userData = user)
      })
      .catch(() => {
        return (userData = '')
      })
  }
}
export const jokesTransport = new JokesTransport(jokesUrl)
