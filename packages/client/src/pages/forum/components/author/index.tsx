import { FC } from 'react'
import { AVATAR_URL } from '../../constants'
import type { TForumAuthor } from '../../types'
import './author.pcss'

export const ForumAuthor: FC<TForumAuthor> = ({ name, avatarUrl }) => {
  return (
    <div className="author">
      <img src={avatarUrl || AVATAR_URL} className="author-photo" />
      <div className="author-username">{name}</div>
    </div>
  )
}
