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

    if (event.code === keyCodeOpen && !document.fullscreenElement) {
      refFullscreenContainer.current?.requestFullscreen()
    }

    if (event.code === keyCodeClose && document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleFullscreen)

    return () => {
      document.removeEventListener('keyup', handleFullscreen)
    }
  }, [])
}
