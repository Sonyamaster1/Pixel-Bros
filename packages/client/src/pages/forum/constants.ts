import { TForumComment, TForumTopic } from './types'

export const AVATAR_URL =
  'https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-200'

// TODO: убрать после подключения API
export const FAKE_TOPICS: (TForumTopic & { comments: TForumComment[] })[] = [
  {
    id: 1,
    title: `
      Сегодня мы попробуем воссоздать нашумевшую в свое время игру Flappy
      Bird.
      Главный герой (если знаете английский или знакомы с темой, то вы уже
      догадались) — птица, которая летит между торчащими сверху и снизу
      трубами, поднимаясь и опускаясь, чтобы не задеть их.
      Цель игры — не натолкнуться ни на одно из препятствий и добраться к
      финишу. Или, что вероятнее, просто набрать наибольшее количество очков
      на пути к нему…
    `,
    author: { name: 'Pixel Bros' },
    comments: [
      {
        author: { name: 'comment1' },
        comment:
          'Цель игры — не натолкнуться ни на одно из препятствий и добраться к финишу. Или, что вероятнее, просто набрать наибольшее количество очков на пути к нему',
      },
      {
        author: { name: 'comment2' },
        comment: 'Game over!',
      },
    ],
  },
  {
    id: 2,
    author: { name: 'Elon Musk' },
    title: `I'm creating Flappy Bird 2`,
    comments: [],
  },
]
