import {
  DATA_ATTRIBUTE_THEME_NAME,
  THEME_MODES,
  THOUGHTS_THEME_NAME,
} from '../constants'

function addDataAttributeTheme() {
  try {
    const rootElement = window.document.documentElement
    const savedTheme = window.localStorage.getItem(THOUGHTS_THEME_NAME)
    const isDark = savedTheme === THEME_MODES.DARK

    if (isDark) {
      rootElement.setAttribute(DATA_ATTRIBUTE_THEME_NAME, THEME_MODES.DARK)
    } else {
      rootElement.setAttribute(DATA_ATTRIBUTE_THEME_NAME, THEME_MODES.LIGHT)
    }
  } catch (error) {
    return null
  }
}

addDataAttributeTheme()
