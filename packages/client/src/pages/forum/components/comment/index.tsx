import { FC } from 'react'
import { ForumAuthor } from '../author'
import type { TForumComment } from '../../types'
import './comment.pcss'

export const ForumComment: FC<TForumComment> = ({ comment, author }) => {
  return (
    <div className="comment">
      <ForumAuthor {...author} />
      <div className="comment__text">{comment}</div>
    </div>
  )
}
