export interface Thought {
  id: string
  timestamp: string
  value: string
}

export interface Thoughts {
  [key: string]: Thought[]
}
