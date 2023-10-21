interface WorldProps {
  img: HTMLImageElement
  x: number
  y: number
  ScreenWidth: number
  ScreenHeight: number
  Score: number
}

class World {
  img: HTMLImageElement
  x: number
  y: number
  ScreenWidth: number
  ScreenHeight: number
  Score: number
  topScore: number
  update: (e: number) => void
  draw: () => void
  drawScore: () => void

  constructor(props: WorldProps, ctx: CanvasRenderingContext2D) {
    this.img = props.img
    this.x = props.x
    this.y = props.y
    this.ScreenWidth = props.ScreenWidth
    this.ScreenHeight = props.ScreenHeight
    this.Score = 0
    this.topScore = 0

    this.update = score => {
      if (score !== this.Score) {
        this.Score = score
        this.drawScore()
      }

      if (score > this.topScore) {
        this.topScore = score
        this.drawScore()
      }
    }

    this.draw = () => {
      ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.ScreenWidth,
        this.ScreenHeight
      )
    }

    this.drawScore = () => {
      ctx.fillStyle = 'white'
      ctx.font = '24px serif'
      ctx.fillText(`score: ${this.Score}`, 20, 40)
      ctx.fillText(`top score: ${this.topScore}`, 20, 60)
    }
  }
}

export default World
