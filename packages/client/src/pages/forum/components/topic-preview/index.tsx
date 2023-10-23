import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ForumAuthor } from '../author'
import type { TForumTopic } from '../../types'
import './topic-preview.pcss'

export const ForumTopicPreview: FC<TForumTopic> = ({ id, title, author }) => {
  const to = `/forum/${id}`

  return (
    <Link to={to} className="topic-preview">
      <ForumAuthor {...author} />
      <div className="topic-preview__title">{title}</div>
    </Link>
  )
}
