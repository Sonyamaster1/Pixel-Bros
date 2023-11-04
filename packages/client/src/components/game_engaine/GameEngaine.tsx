/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MutableRefObject, RefObject, useEffect, useRef } from 'react'

import Settings from './Settings'
import Pipe from './Pipes'
import Bird from './Bird'
import Sprites from './SpritesLoader'
import World from './Word'

function GameEngaine() {
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)
  const animateRef: MutableRefObject<number> = useRef(0)

  useEffect(() => {
    let Score = 0
    const ctx = canvasRef.current?.getContext('2d')

    // Создает задний фон и подсчет очков
    const world: World = new World({
      img: Sprites.backgroundImg,
      x: 0,
      y: 0,
      ScreenWidth: Settings.ScreenWidth,
      ScreenHeight: Settings.ScreenHeight,
      Score: Score,
      ctx: ctx,
    })

    // Создает птицу
    const bird: Bird = new Bird({
      x: Settings.ScreenWidth,
      y: Settings.ScreenHeight,
      BirdHeight: Settings.BirdHeight,
      BirdWidth: Settings.BirdWidth,
      Gravity: Settings.Gravity,
      BirdSpeed: Settings.SpeedBird,
      ctx: ctx,
    })

    // Создает трубы
    const pipes: Array<Pipe> = [
      new Pipe({
        x: Settings.ScreenWidth,
        y: 0,
        PipeWidth: Settings.PipeWidth,
        PipeHeight: Settings.PipeHeight,
        PipeGap: Settings.PipeGap,
        PipeSpeed: Settings.SpeedBird,
        ScreenHeight: Settings.ScreenHeight,
        ctx: ctx,
      }),
      new Pipe({
        x: Settings.ScreenWidth * 1.8,
        y: 0,
        PipeWidth: Settings.PipeWidth,
        PipeHeight: Settings.PipeHeight,
        PipeGap: Settings.PipeGap,
        PipeSpeed: Settings.SpeedBird,
        ScreenHeight: Settings.ScreenHeight,
        ctx: ctx,
      }),
    ]

    // Запускает птицу и трубы
    function start() {
      bird.fly()
      if (pipes[0].PipeSpeed !== 1 && bird.BirdSpeed !== 0) {
        pipes.forEach(pipe => (pipe.PipeSpeed = 1))
      }
      if (animateRef.current === 0) {
        animateRef.current = requestAnimationFrame(animate)
      }
    }

    // Останавливает птицу, трубы и сбрасывает настройки до начальных
    function reset() {
      cancelAnimationFrame(animateRef.current)
      animateRef.current = 0
      bird.y = Settings.ScreenHeight / 2 - 40
      bird.Gravity = 0.98
      bird.BirdSpeed = 0
      pipes.forEach(pipe => {
        pipe.PipeSpeed = 0
        pipe.x = pipe.x + Settings.ScreenWidth / 1.6 + 65
      })
      world.update(Score)
      Score = 0
    }

    // Запускает анимацию
    function animate() {
      animateRef.current = requestAnimationFrame(animate)
      ctx?.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      // Рисует мир
      world.draw()

      // Рисует трубы
      pipes.forEach(pipe => {
        pipe.update()

        if (pipe.x + pipe.PipeWidth < 0) {
          pipe.PipeHeight = Math.random() * 250 + 50
          pipe.x = pipe.ScreenHeight
          Score += 1
        }

        if (
          pipe.x - pipe.PipeWidth < bird.x &&
          pipe.x + pipe.PipeWidth > bird.x
        ) {
          if (
            pipe.PipeHeight > bird.y ||
            bird.y + bird.BirdHeight > pipe.PipeHeight + pipe.PipeGap
          ) {
            reset()
          }
        }
      })

      // Рисует птицу
      bird.update()

      // Рисует очки
      world.drawScore()
      world.update(Score)

      // Проверка птице на экране
      if (bird.y > Settings.ScreenHeight || bird.y < 0) {
        reset()
      }
    }

    animate()

    window.addEventListener('click', start)
    window.addEventListener('keydown', start)

    return () => {
      cancelAnimationFrame(animateRef.current)
      window.removeEventListener('click', start)
      window.removeEventListener('keydown', start)
    }
  }, [])

  return (
    <canvas
      id="canvas_game_engaine"
      ref={canvasRef}
      height={Settings.ScreenHeight}
      width={Settings.ScreenWidth}
    />
  )
}

export default GameEngaine
