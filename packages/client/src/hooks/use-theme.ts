import { useAppSelector } from './redux-hooks'
import { ButtonColors } from '../components/button/pure-button/button.component'

enum Components {
  MAIN_LAYOUT = 'MAIN_LAYOUT',
  LAYOUT = 'LAYOUT',
  BUTTON = 'BUTTON',
}

enum Birds {
  FIRST_BIRD = 'FIRST_BIRD',
  SECOND_BIRD = 'SECOND_BIRD',
  THIRD_BIRD = 'THIRD_BIRD',
}

const birdAnimations = {
  GREEN: {
    FIRST_BIRD: '',
    SECOND_BIRD: '',
    THIRD_BIRD: '',
  },
  PURPLE: {
    FIRST_BIRD: 'FirstBirdFlyAnimation 15s ease-in infinite',
    SECOND_BIRD: 'MiddleBirdFlyAnimation 20s ease-in-out infinite',
    THIRD_BIRD: 'FirstBirdFlyAnimation 10s ease-out infinite',
  },
}

const mainLayoutThemeStyles = {
  GREEN: 'linear-gradient(135deg, #E7FBD9 0%, #A3DDD7 100%) no-repeat',
  PURPLE: 'linear-gradient(135deg, #00688E 0%, #8C486D 100%) no-repeat',
}

const layout = {
  GREEN:
    'linear-gradient(180deg, #a3ddd7 0%, rgba(163, 221, 215, 0) 100%) no-repeat',
  PURPLE:
    'linear-gradient(180deg, #8C486D 0%, rgba(140, 72, 109, 0)) no-repeat',
}

const button = {
  GREEN: {
    SUCCESS: '#00C54F',
    NEUTRAL: '#0066C5',
    ALERT: '#C72828',
  },
  PURPLE: {
    SUCCESS: '#005FC9',
    NEUTRAL: '#000000',
    ALERT: '#6F7EE4',
  },
}

export function useTheme(buttonColorProp?: ButtonColors) {
  const theme = useAppSelector(state => state.user.theme)

  const dynamicStyles: Record<Components | Birds, object | undefined> = {
    MAIN_LAYOUT: { background: mainLayoutThemeStyles[theme] },
    LAYOUT: { background: layout[theme] },
    BUTTON: buttonColorProp
      ? { background: button[theme][buttonColorProp] }
      : undefined,
    FIRST_BIRD: { animation: birdAnimations[theme].FIRST_BIRD },
    SECOND_BIRD: { animation: birdAnimations[theme].SECOND_BIRD },
    THIRD_BIRD: { animation: birdAnimations[theme].THIRD_BIRD },
  }

  return dynamicStyles
}
