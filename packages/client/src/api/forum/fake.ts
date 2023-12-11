/**
 * Класс для фейковых запросов к методам форума.
 * @important Для ревьювера: этот класс не нужно смотреть/оценивать/комментировать.
 *
 * TODO: Удалить файл, как только появятся методы работы с форумом
 */
export abstract class FakeBaseTransport {
  baseURL
  topics = [
    {
      id: 1,
      title: `
        Сегодня мы попробуем воссоздать нашумевшую в свое время игру Flappy
        Bird.
        Главный герой (если знаете английский или знакомы с темой, то вы уже
        догадались) — птица, которая летит между торчащими сверху и снизу
        трубами, поднимаясь и опускаясь, чтобы не задеть их.
        Цель игры — не натолкнуться ни на одно из препятствий и добраться к
        финишу. Или, что вероятнее, просто набрать наибольшее количество очков
        на пути к нему…
      `,
      author: { name: 'Pixel Bros' },
    },
    {
      id: 2,
      author: { name: 'Elon Musk' },
      title: `I'm creating Flappy Bird 2`,
    },
  ]
  comments = [
    {
      id: 1,
      topicId: 1,
      author: { name: 'author1' },
      comment:
        'Цель игры — не натолкнуться ни на одно из препятствий и добраться к финишу. Или, что вероятнее, просто набрать наибольшее количество очков на пути к нему',
    },
    {
      id: 2,
      topicId: 1,
      author: { name: 'author2' },
      comment: 'Game over!',
    },
  ]

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  // Метод get
  async get<T>(endpoint: string): Promise<T> {
    const id = endpoint.match(/\/topics\/([\d+])/)

    if (endpoint === '/topics') {
      return this.fetchFakeGetTopics() as Promise<T>
    } else if (id?.[1]) {
      return this.fetchFakeGetTopic(+id[1]) as Promise<T>
    } else {
      return Promise.reject(null) as Promise<T>
    }
  }

  // Метод post
  async post<T>(endpoint: string, data: unknown): Promise<T> {
    const id = endpoint.match(/\/topics\/([\d+])\/comment/)

    if (endpoint === '/topics') {
      return this.fetchFakeCreateTopic(data) as Promise<T>
    } else if (id?.[1]) {
      return this.fetchFakeCreateComment(+id[1], data) as Promise<T>
    } else {
      return Promise.reject(null) as Promise<T>
    }
  }

  // Фейковый ответ топиков
  private fetchFakeGetTopics() {
    const topics = this.getFakeTopics()

    return new Promise(resolve => {
      setTimeout(() => resolve(topics), 300)
    })
  }

  // Фейковый ответ топика
  private fetchFakeGetTopic(id: number) {
    const topics = this.getFakeTopics()
    const comments = this.getFakeComments()

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const topic = topics.find(a => a.id === id)
        const topicComments = comments.filter(a => a.topicId === id) ?? []

        if (topic) {
          resolve({ ...topic, comments: topicComments })
        } else {
          reject(null)
        }
      }, 300)
    })
  }

  // Фейковый ответ создания топика
  private fetchFakeCreateTopic(data: any) {
    const topics = this.getFakeTopics()

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const id = topics.length + 1

        if (!data?.author || !data?.name) {
          throw reject(null)
        }

        this.topics.push({
          id,
          author: data.author,
          title: data.name,
        })

        return resolve({ id })
      }, 300)
    })
  }

  // Фейковый ответ создания коммента
  private fetchFakeCreateComment(topicId: number, data: any) {
    const comments = this.getFakeComments()

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const id = comments.length + 1

        if (!data?.comment || !data?.author) {
          throw reject(null)
        }

        this.comments.push({
          id,
          topicId,
          author: data.author,
          comment: data.comment,
        })

        const topicComments = this.comments.filter(a => a.topicId === topicId)
        return resolve(topicComments)
      }, 300)
    })
  }

  private getFakeTopics() {
    return this.topics ?? []
  }

  private getFakeComments() {
    return this.comments ?? []
  }
}
