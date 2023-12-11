import { BaseTransport } from './base.transport'

const authURL = 'https://ya-praktikum.tech/api/v2/user/'

let mockTheme = 'PURPLE'

class ThemeTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  async getTheme() {
    return new Promise((resolve: (date: { theme: string }) => void) => {
      setTimeout(() => {
        if (mockTheme === 'GREEN') {
          resolve({ theme: 'PURPLE' })
        } else {
          resolve({ theme: 'GREEN' })
        }
      }, 500)
    })
  }

  async setTheme() {
    return new Promise((resolve: (date: { theme: string }) => void) => {
      setTimeout(() => {
        if (mockTheme === 'GREEN') {
          mockTheme = 'PURPLE'
          resolve({ theme: 'PURPLE' })
        } else {
          mockTheme = 'GREEN'
          resolve({ theme: 'GREEN' })
        }
      }, 500)
    })
  }
}

export const themeTransport = new ThemeTransport(authURL)
