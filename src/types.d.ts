/* Esto me lo acabo de inventar jajajaka */
declare global {
  interface Object {
    groupBy(
      items: Iterable,
      callbackFn: (element: Iterable, index: number) => Iterable
    ): { [key: string]: Iterable }
  }
}

export interface Thought {
  id: string
  timestamp: string
  value: string
  formatDay?: string
}

export interface Thoughts {
  [key: string]: Thought[]
}
