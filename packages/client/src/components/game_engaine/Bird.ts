import Sprites from './SpritesLoader'

interface BirdProps {
  x: number
  y: number
  BirdWidth: number
  BirdHeight: number
  BirdSpeed: number
  Gravity: number
}

class Bird {
  x: number
  y: number
  BirdWidth: number
  BirdHeight: number
  Gravity: number
  BirdSpeed: number
  image?: HTMLImageElement
  update: () => void
  draw: () => void
  fly: () => void

  constructor(props: BirdProps, ctx: CanvasRenderingContext2D) {
    this.x = props.x / 2 - props.BirdWidth
    this.y = props.y / 2 - props.BirdHeight
    this.BirdWidth = props.BirdWidth
    this.BirdHeight = props.BirdHeight
    this.Gravity = props.Gravity
    this.BirdSpeed = props.BirdSpeed

    this.update = () => {
      this.draw()

      if (this.BirdSpeed) {
        this.y += this.Gravity
        this.Gravity += 0.098
      }
    }

    this.draw = () => {
      ctx.translate(this.x, this.y)
      ctx.rotate(0.1 * this.Gravity)
      ctx.drawImage(
        (this.image = Sprites.birdImg),
        0,
        0,
        this.BirdWidth,
        this.BirdHeight
      )
      ctx.rotate(-0.1 * this.Gravity)
      ctx.translate(-this.x, -this.y)
    }

    this.fly = () => {
      this.Gravity = -2

      if (!this.BirdSpeed) {
        this.BirdSpeed = 1
      }
    }
  }
}

export default Bird
