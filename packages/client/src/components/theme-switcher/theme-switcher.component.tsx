import styles from './theme-switcher.module.scss'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { setTheme } from '../../store/slices/userSlices'
import { themeTransport } from '../../api/theme.transport'
import { Spinner } from '../spinner/spinner.component'

export function ThemeSwitcher(): JSX.Element {
  const [isThemeChecked, setIsThemeChecked] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  function handleSwitcherOnChange() {
    setIsLoading(true)
    themeTransport
      .setTheme()
      .then(res => {
        console.log(res, 'res')
        dispatch(setTheme(res.theme))
        setIsThemeChecked(!isThemeChecked)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <div className={styles['my-component']}>
        <Spinner isLoading={isLoading} />
        <label className={styles.switch}>
          <input
            disabled={isLoading}
            checked={isThemeChecked}
            onChange={handleSwitcherOnChange}
            type="checkbox"
            className={styles['my-switch']}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </>
  )
}
