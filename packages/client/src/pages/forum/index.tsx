import { FC } from 'react'
import { MainLayout } from '../../components'
import { ForumTopicPreview } from './components/topic-preview'
import { FAKE_TOPICS } from './constants'
import { Link } from 'react-router-dom'

export const ForumPage: FC = () => {
  return (
    <MainLayout>
      <>
        {FAKE_TOPICS.map(({ id, title, author }) => (
          <ForumTopicPreview key={id} id={id} title={title} author={author} />
        ))}
        <Link to="/forum/create">+ Create topic</Link>
      </>
    </MainLayout>
  )
}
