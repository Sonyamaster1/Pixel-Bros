import Sprites from './SpritesLoader'

interface PipeProps {
  x: number
  y: number
  PipeWidth: number
  PipeHeight: number
  PipeGap: number
  PipeSpeed: number
  ScreenHeight: number
}

class Pipe {
  x: number
  y: number
  PipeWidth: number
  PipeHeight: number
  PipeGap: number
  PipeSpeed: number
  ScreenHeight: number
  image?: HTMLImageElement
  update: () => void
  draw: () => void

  constructor(props: PipeProps, ctx: CanvasRenderingContext2D) {
    this.x = props.x
    this.y = props.y
    this.PipeWidth = props.PipeWidth
    this.PipeHeight = props.PipeHeight
    this.PipeGap = props.PipeGap
    this.PipeSpeed = props.PipeSpeed
    this.ScreenHeight = props.ScreenHeight

    this.update = () => {
      this.x -= this.PipeSpeed
      this.draw()
    }

    this.draw = () => {
      ctx.drawImage(
        (this.image = Sprites.pipeDownImg),
        this.x,
        this.y - this.image.height + this.PipeHeight,
        this.PipeWidth,
        this.image.height
      )
      ctx.drawImage(
        (this.image = Sprites.pipeUpImg),
        this.x,
        this.y + this.PipeGap + this.PipeHeight,
        this.PipeWidth,
        this.image.height
      )
    }
  }
}

export default Pipe
