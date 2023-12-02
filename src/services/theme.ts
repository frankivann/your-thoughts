import { THEME_MODES, THOUGHTS_THEME_NAME } from '../constants'
import { type ThemeMode } from '../types'

export function getThemeMode() {
  const theme = window.localStorage.getItem(THOUGHTS_THEME_NAME) as ThemeMode
  if (theme) return theme

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (isDark) {
    storeThemeMode(THEME_MODES.DARK)
    return THEME_MODES.DARK
  } else {
    storeThemeMode(THEME_MODES.LIGHT)
    return THEME_MODES.LIGHT
  }
}

export function storeThemeMode(theme: ThemeMode) {
  window.localStorage.setItem(THOUGHTS_THEME_NAME, theme)
}
