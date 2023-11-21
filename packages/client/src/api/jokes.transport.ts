import { BaseTransport } from './base.transport'

const jokesUrl = 'https://api.chucknorris.io/jokes/random'

class JokesTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  getRandomJoke() {
    return this.get('')
      .then(joke => {
        console.log(joke, 'joke')
        return joke
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const jokesTransport = new JokesTransport(jokesUrl)
