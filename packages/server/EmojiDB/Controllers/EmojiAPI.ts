import Emoji from '../Model/Emoji'

class EmojiAPI {
  setEmoji = (emoji: string) => {
    return Emoji.create({ emoji: `${emoji}` })
  }

  getEmoji = (emoji: string) => {
    return Emoji.findOne({
      where: { emoji: emoji },
    }).then(res => res?.dataValues)
  }
  getEmojiAll = () => {
    return Emoji.findAll()
  }
}

export default new EmojiAPI()
