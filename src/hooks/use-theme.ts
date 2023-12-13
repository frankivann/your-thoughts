import { useState, useEffect, useCallback } from 'react'
import { getStoredThemeMode, storeThemeMode } from '../services/theme'
import { type ThemeMode } from '../types'
import {
  DATA_ATTRIBUTE_THEME_NAME,
  KEYDOWN_THEME,
  THEME_MODES,
} from '../constants'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(getStoredThemeMode())

  useEffect(
    function () {
      const rootElement = window.document.documentElement

      if (theme === THEME_MODES.DARK) {
        rootElement.setAttribute(DATA_ATTRIBUTE_THEME_NAME, THEME_MODES.DARK)
        storeThemeMode(THEME_MODES.DARK)
      } else {
        rootElement.setAttribute(DATA_ATTRIBUTE_THEME_NAME, THEME_MODES.LIGHT)
        storeThemeMode(THEME_MODES.LIGHT)
      }
    },
    [theme]
  )

  const toggleTheme = useCallback(() => {
    const newTheme =
      theme === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK

    setTheme(newTheme)
  }, [theme])

  useEffect(
    function () {
      const handleKeydown = (event: KeyboardEvent) => {
        const { key } = event
        const { activeElement } = window.document

        const textareaRoot = window.document.getElementById('textarea-root')
        let isFormTarget = false

        if (activeElement && textareaRoot) {
          isFormTarget = textareaRoot.contains(activeElement)
        }

        if (KEYDOWN_THEME.includes(key) && !isFormTarget) {
          toggleTheme()
        }
      }

      window.addEventListener('keydown', handleKeydown)
      return () => window.removeEventListener('keydown', handleKeydown)
    },
    [toggleTheme]
  )

  return {
    theme,
    toggleTheme,
  }
}
