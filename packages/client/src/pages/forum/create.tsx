import { FC } from 'react'
import { MainLayout } from '../../components'
import { ForumTopicCreate } from './components/topic-create'

export const ForumCreatePage: FC = () => {
  return (
    <MainLayout>
      <ForumTopicCreate />
    </MainLayout>
  )
}
