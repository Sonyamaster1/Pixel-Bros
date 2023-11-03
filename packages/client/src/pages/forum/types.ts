export type TForumAuthor = {
  name: string
  avatarUrl?: string
}

export type TForumComment = {
  comment: string
  author: TForumAuthor
}

export type TForumTopic = {
  id: number
  title: string
  author: TForumAuthor
}
