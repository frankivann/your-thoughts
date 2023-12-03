import { useState, useEffect, useCallback } from 'react'
import { getThemeMode, storeThemeMode } from '../services/theme'
import { KEYDOWN_THEME, THEME_MODES } from '../constants'
import { type ThemeMode } from '../types'

export function useTheme() {
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
        let isFormActive = false

        if (activeElement && textareaRoot) {
          isFormActive = textareaRoot === activeElement
        }

        if (KEYDOWN_THEME.includes(key) && !isFormActive) {
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
