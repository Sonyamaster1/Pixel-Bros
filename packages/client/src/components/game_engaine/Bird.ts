import { PureComponent } from 'react'
import Sprites from './SpritesLoader'

interface BirdProps {
  x: number
  y: number
  BirdWidth: number
  BirdHeight: number
  BirdSpeed: number
  Gravity: number
  ctx: CanvasRenderingContext2D | null | undefined
}

class Bird extends PureComponent {
  x: number
  y: number
  BirdWidth: number
  BirdHeight: number
  Gravity: number
  BirdSpeed: number
  ctx: CanvasRenderingContext2D | null | undefined

  constructor(props: BirdProps) {
    super(props)
    this.x = props.x / 2 - props.BirdWidth
    this.y = props.y / 2 - props.BirdHeight
    this.BirdWidth = props.BirdWidth
    this.BirdHeight = props.BirdHeight
    this.Gravity = props.Gravity
    this.BirdSpeed = props.BirdSpeed
    this.ctx = props.ctx
  }

  update() {
    this.draw()

    if (this.BirdSpeed) {
      this.y += this.Gravity
      this.Gravity += 0.098
    }
  }

  draw() {
    this.ctx?.translate(this.x, this.y)
    this.ctx?.rotate(0.1 * this.Gravity)
    this.ctx?.drawImage(Sprites.birdImg, 0, 0, this.BirdWidth, this.BirdHeight)
    this.ctx?.rotate(-0.1 * this.Gravity)
    this.ctx?.translate(-this.x, -this.y)
  }

  fly = () => {
    this.Gravity = -2

    if (!this.BirdSpeed) {
      this.BirdSpeed = 1
    }
  }
}

export default Bird
