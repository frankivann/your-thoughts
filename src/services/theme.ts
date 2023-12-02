import { THEME_MODES, THOUGHTS_THEME_NAME } from '../constants'

export function getThemeMode() {
  const theme = window.localStorage.getItem(THOUGHTS_THEME_NAME)
  if (theme) return theme

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (isDark) {
    storeTheme(THEME_MODES.DARK)
    return THEME_MODES.DARK
  } else {
    storeTheme(THEME_MODES.LIGHT)
    return THEME_MODES.LIGHT
  }
}

export function storeTheme(theme: string) {
  window.localStorage.setItem(THOUGHTS_THEME_NAME, theme)
}
