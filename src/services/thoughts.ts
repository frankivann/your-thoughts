import { type Thought } from '../types'

export function getStoredThoughts() {
  const thoughts = window.localStorage.getItem('_THOUGHTS_')
  return thoughts ? (JSON.parse(thoughts) as Thought[]) : []
}

export function storeThoughts(thoughts: Thought[]) {
  window.localStorage.setItem('_THOUGHTS_', JSON.stringify(thoughts))
}

export function clearThoughts() {
  window.localStorage.removeItem('_THOUGHTS_')
}
