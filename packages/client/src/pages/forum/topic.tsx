import { FC } from 'react'
import { MainLayout } from '../../components'
import { useParams } from 'react-router-dom'
import { ForumTopicDetail } from './components/topic-detail'
import { FAKE_TOPICS } from './constants'
import { ForumComment } from './components/comment'
import { ForumCommentCreate } from './components/comment/create'

export const ForumTopicPage: FC = () => {
  const { id } = useParams()

  // TODO: Заменить на API
  const TOPIC = id && FAKE_TOPICS.find(t => t.id === +id)
  if (!TOPIC) throw new Error('Topic not found!')

  return (
    <MainLayout>
      <ForumTopicDetail title={TOPIC.title} author={TOPIC.author} />
      <ForumCommentCreate />
      <>
        {TOPIC.comments.map(({ comment, author }, idx) => (
          <ForumComment key={idx} comment={comment} author={author} />
        ))}
      </>
    </MainLayout>
  )
}
