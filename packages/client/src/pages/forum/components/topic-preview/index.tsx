import { FC } from 'react'
import { Link } from 'react-router-dom'
import { AVATAR_URL } from '../../constants'
import './topic-preview.pcss'

type Props = {
  id: number
  text: string | JSX.Element
  username: string
  avatarUrl?: string
}

export const ForumTopicPreview: FC<Props> = ({
  id,
  text,
  username,
  avatarUrl = AVATAR_URL,
}) => {
  const to = `/forum/${id}`

  return (
    <Link to={to} className="topic">
      <div className="topic__author">
        <img src={avatarUrl} className="topic__author-photo" />
        <div className="topic__author-username">{username}</div>
      </div>
      <div className="topic__text">{text}</div>
    </Link>
  )
}
