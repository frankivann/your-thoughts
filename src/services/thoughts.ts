import { type Thought, type Thoughts } from '../types'
import { isToday, isYesterday, lightFormat } from 'date-fns'
import { INITIAL_THOUGHTS, THOUGHTS_STORE_NAME } from '../constants'

export function groupByFormatDay(thoughts: Thought[]) {
  const grouped = Object.groupBy(thoughts, (thought: Thought) => {
    const today = isToday(new Date(thought.timestamp))
    const yesterday = isYesterday(new Date(thought.timestamp))

    return today
      ? 'Today'
      : yesterday
      ? 'Yesterday'
      : lightFormat(new Date(thought.timestamp), 'MMMM do')
  })

  return grouped.Today ? grouped : { Today: [], ...grouped }
}

export function sortThoughts(thoughts: Thought[]) {
  return thoughts.toSorted(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )
}

export function getStoredThoughts() {
  const thoughts = window.localStorage.getItem(THOUGHTS_STORE_NAME)
  return thoughts ? (JSON.parse(thoughts) as Thoughts) : INITIAL_THOUGHTS
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem(THOUGHTS_STORE_NAME, JSON.stringify(thoughts))
}
