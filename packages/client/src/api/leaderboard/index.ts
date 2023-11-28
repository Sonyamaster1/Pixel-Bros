import { LeaderboardItem } from '../../pages/leaderboard/type'
import { store } from '../../store'
import { BaseTransport } from '../base.transport'
import {
  LEADERBOARD_LIMIT,
  LEADERBOARD_RATING_FIELD_NAME,
  LEADERBOARD_TEAM_NAME,
} from './constants'

const BASE_URL = 'https://ya-praktikum.tech/api/v2/leaderboard'

class LeaderboardTransport extends BaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  async saveScore(score: number) {
    const user = store.getState()?.user?.user ?? null
    if (!user || !user.login) {
      console.error('Field "user" in store not found!', user)
      return
    }

    const body: LeaderboardItem = {
      data: {
        score,
        username: user.login,
      },
    }

    return this.post('', {
      ...body,
      ratingFieldName: LEADERBOARD_RATING_FIELD_NAME,
      teamName: LEADERBOARD_TEAM_NAME,
    })
      .then(res => res)
      .catch(error => {
        console.error(error)
        throw new Error(error?.response?.data?.reason)
      })
  }

  async getLeaderboard() {
    return this.post<LeaderboardItem[]>(`/${LEADERBOARD_TEAM_NAME}`, {
      ratingFieldName: LEADERBOARD_RATING_FIELD_NAME,
      cursor: 0,
      limit: LEADERBOARD_LIMIT,
    })
      .then(res => res ?? [])
      .catch(error => {
        console.error(error)
        throw new Error(error?.response?.data?.reason)
      })
  }
}

export const leaderboardTransport = new LeaderboardTransport(BASE_URL)
