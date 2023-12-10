import { THEME_MODES, THOUGHTS_THEME_NAME } from '../constants'
import { type ThemeMode } from '../types'

function getPrefersColorScheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return isDark ? THEME_MODES.DARK : THEME_MODES.LIGHT
}

export function getStoredThemeMode() {
  const theme = window.localStorage.getItem(THOUGHTS_THEME_NAME)
  const isValidThemeMode =
    theme === THEME_MODES.DARK || theme === THEME_MODES.LIGHT

  if (isValidThemeMode) {
    storeThemeMode(theme)
    return theme
  }

  const favoriteTheme = getPrefersColorScheme()
  storeThemeMode(favoriteTheme)
  return favoriteTheme
}

export function storeThemeMode(theme: ThemeMode) {
  window.localStorage.setItem(THOUGHTS_THEME_NAME, theme)
}
