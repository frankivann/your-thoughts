import { type Thoughts } from '../types'

export function getStoredThoughts() {
  const thoughts = window.localStorage.getItem('_THOUGHTS_')

  /* Make re-order */

  /* Store the re-order */

  return thoughts ? (JSON.parse(thoughts) as Thoughts) : { Today: [] }
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem('_THOUGHTS_', JSON.stringify(thoughts))
}
