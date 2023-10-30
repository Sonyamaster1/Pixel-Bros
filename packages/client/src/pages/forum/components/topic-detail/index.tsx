import { FC } from 'react'
import { ForumAuthor } from '../author'
import type { TForumTopic } from '../../types'
import './topic-detail.pcss'

type Props = Omit<TForumTopic, 'id'>

export const ForumTopicDetail: FC<Props> = ({ title, author }) => {
  return (
    <div className="topic-detail">
      <ForumAuthor {...author} />
      <div className="topic-detail__title">{title}</div>
    </div>
  )
}
