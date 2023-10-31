import { RefObject, useEffect } from 'react'

enum FullscreenKeyCodes {
  Open = 'KeyF',
  Close = 'Escape',
}

type Options = {
  keyCodeOpen?: string
  keyCodeClose?: string
}

export function useFullscreen<T extends HTMLElement>(
  refFullscreenContainer: RefObject<T>,
  options: Options = {}
) {
  const {
    keyCodeOpen = FullscreenKeyCodes.Open,
    keyCodeClose = FullscreenKeyCodes.Close,
  } = options

  function handleFullscreen(event: KeyboardEvent) {
    if (!document.fullscreenEnabled) {
      return
    }

    if (!document.fullscreenElement) {
      if (event.code === keyCodeOpen) {
        refFullscreenContainer.current?.requestFullscreen()
      }
    } else if (document.exitFullscreen) {
      if (event.code === keyCodeClose) {
        document.exitFullscreen()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleFullscreen)

    return () => {
      document.removeEventListener('keyup', handleFullscreen)
    }
  }, [])
}
