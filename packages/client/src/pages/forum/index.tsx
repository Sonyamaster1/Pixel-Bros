import { FC } from 'react'
import { MainLayout } from '../../components'
import { ForumTopicPreview } from './components/topic-preview'

const TOPICS = [
  {
    id: 1,
    username: 'Pixel Bros',
    text: (
      <>
        <p>
          Сегодня мы попробуем воссоздать нашумевшую в свое время игру Flappy
          Bird.
        </p>
        <p>
          Главный герой (если знаете английский или знакомы с темой, то вы уже
          догадались) — птица, которая летит между торчащими сверху и снизу
          трубами, поднимаясь и опускаясь, чтобы не задеть их.
        </p>
        <p>
          Цель игры — не натолкнуться ни на одно из препятствий и добраться к
          финишу. Или, что вероятнее, просто набрать наибольшее количество очков
          на пути к нему…
        </p>
      </>
    ),
  },
  { id: 2, username: 'Elon Musk', text: `I'm creating Flappy Bird 2` },
]

export const ForumPage: FC = () => {
  return (
    <MainLayout>
      {TOPICS.map(({ id, username, text }) => (
        <ForumTopicPreview id={id} username={username} text={text} />
      ))}
    </MainLayout>
  )
}
