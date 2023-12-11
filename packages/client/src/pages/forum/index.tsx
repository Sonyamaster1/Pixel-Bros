import { FC, useEffect, useState } from 'react'
import { MainLayout } from '../../components'
import { ForumTopicPreview } from './components/topic-preview'
import { Link } from 'react-router-dom'
import { checkAuthRenderHOC } from 'client/src/utils/authorization-hoc'
import { forumTransport } from '../../api/forum'
import { TForumTopic } from './types'
import './styles/index.pcss'

export const ForumPage: FC = () => {
  const [pending, setPending] = useState(true)
  const [topics, setTopics] = useState<TForumTopic[]>([])

  useEffect(() => {
    setPending(true)

    forumTransport
      .getTopics()
      .then(data => setTopics(data))
      .catch(() => {
        console.error('Ошибка получения топиков форума!')
      })
      .finally(() => setPending(false))
  }, [])

  return (
    <MainLayout>
      <>
        {pending ? (
          <p>Загрузка топиков...</p>
        ) : (
          <>
            {topics.length ? (
              topics.map(({ id, title, author }) => (
                <ForumTopicPreview
                  key={id}
                  id={id}
                  title={title}
                  author={author}
                />
              ))
            ) : (
              <p>Топики не найдены!</p>
            )}
          </>
        )}
        <Link to="/forum/create" className="create-topic-link">
          + Create topic
        </Link>
      </>
    </MainLayout>
  )
}

export const WithAuthorizationForumPage = checkAuthRenderHOC(ForumPage)
