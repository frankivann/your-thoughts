export const INITIAL_THOUGHTS = { Today: [] }
export const THOUGHTS_STORE_NAME = '_THOUGHTS_'
export const THOUGHTS_THEME_NAME = '_THOUGHTS_THEME_'
export const THOUGHTS_ONBOARDED = '_THOUGHTS_ONBOARDED_'
export const KEYDOWN_THEME = ['T', 't']
export const INITIAL_ONBOARDING_THOUGHTS = [
  {
    id: '1',
    timestamp: new Date().toISOString(),
    value: 'Welcome to Thoughts.',
  },
  {
    id: '2',
    timestamp: new Date().toISOString(),
    value: 'Free your mind by expressing your most intimate thoughts.',
  },
  {
    id: '3',
    timestamp: new Date().toISOString(),
    value:
      'Feel free to pen down your thoughts; they will patiently await your return, ready to unveil the wisdom you have sown.',
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
