import { PureComponent } from 'react'
import Sprites from './SpritesLoader'

interface PipeProps {
  x: number
  y: number
  PipeWidth: number
  PipeHeight: number
  PipeGap: number
  PipeSpeed: number
  ScreenHeight: number
  ctx: CanvasRenderingContext2D | null | undefined
}

class Pipe extends PureComponent {
  x: number
  y: number
  PipeWidth: number
  PipeHeight: number
  PipeGap: number
  PipeSpeed: number
  ScreenHeight: number
  ctx: CanvasRenderingContext2D | null | undefined

  constructor(props: PipeProps) {
    super(props)
    this.x = props.x
    this.y = props.y
    this.PipeWidth = props.PipeWidth
    this.PipeHeight = props.PipeHeight
    this.PipeGap = props.PipeGap
    this.PipeSpeed = props.PipeSpeed
    this.ScreenHeight = props.ScreenHeight
    this.ctx = props.ctx
  }

  update = () => {
    this.x -= this.PipeSpeed
    this.draw()
  }

  draw = () => {
    this.ctx?.drawImage(
      // @ts-ignore
      Sprites.pipeDownImg,
      this.x,
      this.y - Sprites.pipeDownImg!.height + this.PipeHeight,
      this.PipeWidth,
      Sprites.pipeDownImg!.height
    )
    this.ctx?.drawImage(
      // @ts-ignore
      Sprites.pipeUpImg,
      this.x,
      this.y + this.PipeGap + this.PipeHeight,
      this.PipeWidth,
      Sprites.pipeUpImg!.height
    )
  }
}

export default Pipe
