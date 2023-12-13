import { Router } from 'express'
import EmojiAPI from '../Controllers/EmojiAPI'
const EmojiRouter = Router()

EmojiRouter.post('/create', async (request, response) => {
  try {
    const emojiName = request.body.emoji
    await EmojiAPI.setEmoji(emojiName)
    return response.status(201).send({ status: 'ok' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return response
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

EmojiRouter.get('/:emoji', async (request, response) => {
  try {
    const emoji = request.params.emoji
    const emojiObj = await EmojiAPI.getEmoji(emoji)
    return response.status(200).send(emojiObj)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return response
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

EmojiRouter.get('/all', async (_request, response) => {
  try {
    const emojis = await EmojiAPI.getEmojiAll()
    return response.status(200).send(JSON.stringify(emojis))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return response
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

export default EmojiRouter
