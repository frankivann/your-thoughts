export const INITIAL_THOUGHTS = { Today: [] }
export const THOUGHTS_NAME = '_THOUGHTS_'
export const THOUGHTS_THEME_NAME = '_THOUGHTS_THEME_'
export const THOUGHTS_ONBOARDED_NAME = '_THOUGHTS_ONBOARDED_'
export const DATA_ATTRIBUTE_THEME_NAME = 'data-theme'
export const KEYDOWN_THEME = ['T', 't']
export const INITIAL_ONBOARDING_THOUGHTS = [
  {
    id: '1',
    timestamp: new Date().toISOString(),
    value: 'Welcome to Thoughts App.',
  },
  {
    id: '2',
    timestamp: new Date().toISOString(),
    value: 'Free your mind by expressing your most intimate thoughts.',
  },
  {
    id: '3',
    timestamp: new Date().toISOString(),
    value: 'No filters or regrets. This is the canvas of your imagination.',
  },
  {
    id: '4',
    timestamp: new Date().toISOString(),
    value:
      'Do not worry, you can always go back to read what was once in your thoughts.',
  },
]

export const KEY_DAYS = {
  TODAY: 'Today',
  YESTERDAY: 'Yesterday',
} as const

export const THEME_MODES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const
