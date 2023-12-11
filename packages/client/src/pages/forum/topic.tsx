import { FC, useEffect, useState } from 'react'
import { MainLayout } from '../../components'
import { useParams } from 'react-router-dom'
import { ForumTopicDetail } from './components/topic-detail'
import { ForumComment } from './components/comment'
import { ForumCommentCreate } from './components/comment/create'
import { checkAuthRenderHOC } from 'client/src/utils/authorization-hoc'
import { TForumComment, TForumTopicDetail } from './types'
import { forumTransport } from '../../api/forum'

export const ForumTopicPage: FC = () => {
  const { id } = useParams()
  if (!id || !Number.isInteger(+id)) {
    throw new Error('Incorrect topic ID!')
  }

  const [pending, setPending] = useState(true)
  const [topic, setTopic] = useState<TForumTopicDetail | null>(null)

  useEffect(() => {
    setPending(true)

    forumTransport
      .getTopic(+id)
      .then(data => setTopic(data))
      .catch(() => {
        setTopic(null)
        console.error('Ошибка получения топика!')
        throw new Error('Topic not found!')
      })
      .finally(() => setPending(false))
  }, [])

  const setComments = (comments: TForumComment[]) => {
    setTopic(prev => {
      if (!prev) return null
      return { ...prev, comments }
    })
  }

  return (
    <MainLayout>
      {pending ? (
        <div>Загрузка данных!</div>
      ) : (
        <>
          {topic ? (
            <>
              <ForumTopicDetail title={topic.title} author={topic.author} />
              <ForumCommentCreate topicId={+id} updateComments={setComments} />
              <>
                {topic.comments.map(comment => (
                  <ForumComment key={comment.id} {...comment} />
                ))}
              </>
            </>
          ) : (
            <div>Топик не найден или произошла ошибка!</div>
          )}
        </>
      )}
    </MainLayout>
  )
}

export const WithAuthorizationForumTopicPage =
  checkAuthRenderHOC(ForumTopicPage)
