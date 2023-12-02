import { THEME_MODES } from './constants'

/* Esto me lo acabo de inventar jajajaka */
declare global {
  interface Object {
    groupBy(
      items: Iterable,
      callbackFn: (element: Iterable, index: number) => Iterable
    ): { [key: string]: Iterable }
  }
}

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}

export interface Thought {
  id: string
  timestamp: string
  value: string
}

export interface Thoughts {
  [key: string]: Thought[]
}

export type ThemeMode = (typeof THEME_MODES)[keyof typeof THEME_MODES]
