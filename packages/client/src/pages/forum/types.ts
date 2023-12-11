export type TForumAuthor = {
  name: string
  avatarUrl?: string
}

export type TForumComment = {
  id: number
  topicId: number
  comment: string
  author: TForumAuthor
}

export type TForumTopic = {
  id: number
  title: string
  author: TForumAuthor
}

export type TForumTopicDetail = TForumTopic & { comments: TForumComment[] }
