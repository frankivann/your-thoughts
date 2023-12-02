import { useEffect, useState } from 'react'
import { BoxIcon, HamburgerIcon, MoonIcon } from './icons'
import { getThemeMode, storeThemeMode } from '../services/theme'
import { THEME_MODES } from '../constants'
import { type ThemeMode } from '../types'

interface Props {
  deteleAllThoughts: () => void
}

export function DropdownMenu({ deteleAllThoughts }: Props) {
  const [theme, setTheme] = useState<ThemeMode>(getThemeMode())

  useEffect(
    function () {
      const html = window.document.documentElement

      if (theme === THEME_MODES.DARK) {
        html.setAttribute('data-theme', THEME_MODES.DARK)
        storeThemeMode(THEME_MODES.DARK)
      } else {
        html.setAttribute('data-theme', THEME_MODES.LIGHT)
        storeThemeMode(THEME_MODES.LIGHT)
      }
    },
    [theme]
  )

  const toggleTheme = () => {
    const newTheme =
      theme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK

    setTheme(newTheme)
  }

  return (
    <nav className='menu'>
      <button className='toggle'>
        <HamburgerIcon />
      </button>
      <div className='dropdown-wrapper'>
        <ul className='menu-ul'>
          <li className='menu-li'>
            <button className='menu-button' onClick={toggleTheme}>
              Toggle Theme
              <MoonIcon />
            </button>
          </li>
          <hr className='menu-divider' />
          <li className='menu-li'>
            <button className='menu-button' onClick={() => deteleAllThoughts()}>
              Clear Thoughts
              <BoxIcon />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
