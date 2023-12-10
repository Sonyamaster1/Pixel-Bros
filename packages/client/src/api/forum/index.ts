import {
  TForumComment,
  TForumTopic,
  TForumTopicDetail,
} from '../../pages/forum/types'
import { FakeBaseTransport } from './fake'

const BASE_URL = '' // TODO: ждем появления API. Нужно добавит актуальный урл

// TODO: после появления меняем FakeBaseTransport на BaseTransport
class ForumTransport extends FakeBaseTransport {
  constructor(baseURL: string) {
    super(baseURL)
  }

  async getTopics() {
    return this.get<TForumTopic[]>('/topics')
      .then(res => res ?? [])
      .catch(error => {
        console.error(error)
        throw new Error(error?.response?.data?.reason)
      })
  }

  async getTopic(id: number) {
    return this.get<TForumTopicDetail>(`/topics/${id}`)
      .then(res => res ?? null)
      .catch(error => {
        console.error(error)
        throw new Error(error?.response?.data?.reason)
      })
  }

  async createTopic(name: string, author: TForumTopic['author']) {
    return this.post<Pick<TForumTopicDetail, 'id'>>('/topics', {
      name,
      author,
    })
      .then(res => res ?? null)
      .catch(error => {
        console.error(error)
        throw new Error(error?.response?.data?.reason)
      })
  }

  async createComment(
    topicId: TForumTopicDetail['id'],
    comment: TForumComment['comment'],
    author: TForumComment['author']
  ) {
    return this.post<TForumComment[]>(`/topics/${topicId}/comment`, {
      comment,
      author,
    })
      .then(res => res ?? null)
      .catch(error => {
        console.error(error)
        throw new Error(error?.response?.data?.reason)
      })
  }
}

export const forumTransport = new ForumTransport(BASE_URL)
