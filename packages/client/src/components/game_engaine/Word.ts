import { PureComponent } from 'react'
import Sprites from './SpritesLoader'

interface WorldProps {
  img: HTMLImageElement
  x: number
  y: number
  ScreenWidth: number
  ScreenHeight: number
  ctx: CanvasRenderingContext2D | null | undefined
}

class World extends PureComponent {
  x: number
  y: number
  ScreenWidth: number
  ScreenHeight: number
  topScore: number
  ctx: CanvasRenderingContext2D | null | undefined

  constructor(props: WorldProps) {
    super(props)
    this.x = props.x
    this.y = props.y
    this.ScreenWidth = props.ScreenWidth
    this.ScreenHeight = props.ScreenHeight
    this.topScore = 0
    this.ctx = props.ctx
  }

  draw() {
    this.ctx?.drawImage(
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
    this.ctx?.fillText(`score: ${0}`, 20, 40)
    this.ctx?.fillText(`top score: ${0}`, 20, 60)
  }
}

export default World
