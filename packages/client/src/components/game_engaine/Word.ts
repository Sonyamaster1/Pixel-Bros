import { PureComponent } from 'react'
import Sprites from './SpritesLoader'

interface WorldProps {
  img?: HTMLImageElement
  x: number
  y: number
  ScreenWidth: number
  ScreenHeight: number
  Score: number
  ctx: CanvasRenderingContext2D | null | undefined
}

class World extends PureComponent {
  x: number
  y: number
  ScreenWidth: number
  ScreenHeight: number
  Score: number
  topScore: number
  ctx: CanvasRenderingContext2D | null | undefined

  constructor(props: WorldProps) {
    super(props)
    this.x = props.x
    this.y = props.y
    this.ScreenWidth = props.ScreenWidth
    this.ScreenHeight = props.ScreenHeight
    this.Score = 0
    this.topScore = 0
    this.ctx = props.ctx
  }

  update(score: number) {
    if (score !== this.Score) {
      this.Score = score
      this.drawScore()
    }

    if (score > this.topScore) {
      this.topScore = score
      this.drawScore()
    }
  }

  draw() {
    this.ctx?.drawImage(
      // @ts-ignore
      Sprites.backgroundImg,
      this.x,
      this.y,
      this.ScreenWidth,
      this.ScreenHeight
    )
  }

  drawScore = () => {
    this.ctx!.fillStyle = 'white'
    this.ctx!.font = '24px serif'
    this.ctx?.fillText(`score: ${this.Score}`, 20, 40)
    this.ctx?.fillText(`top score: ${this.topScore}`, 20, 60)
  }
}

export default World
