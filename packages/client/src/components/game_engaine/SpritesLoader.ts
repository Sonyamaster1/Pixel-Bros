import background from '../../assets/sprites/background-day.png'
import bird from '../../assets/sprites/yellowbird-upflap.png'
import pipeDown from '../../assets/sprites/pipe-green-down.png'
import pipeUp from '../../assets/sprites/pipe-green-up.png'

const Sprites = {
  backgroundImg: SpritesLoader(background),
  birdImg: SpritesLoader(bird),
  pipeDownImg: SpritesLoader(pipeDown),
  pipeUpImg: SpritesLoader(pipeUp),
}

function SpritesLoader(src: string) {
  // Проверка на наличие глобальных обьектов для серверного рендеринга
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  const img = new Image()
  img.src = src
  return img
}

export default Sprites
