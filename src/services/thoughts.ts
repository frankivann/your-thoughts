import { type Thought, type Thoughts } from '../types'
import { isToday, isYesterday, format } from 'date-fns'
import { INITIAL_THOUGHTS, KEY_DAYS, THOUGHTS_STORE_NAME } from '../constants'

export function groupByFormatDay(thoughts: Thought[]) {
  const grouped = Object.groupBy(thoughts, (thought: Thought) => {
    const today = isToday(new Date(thought.timestamp))
    const yesterday = isYesterday(new Date(thought.timestamp))

    return today
      ? KEY_DAYS.TODAY
      : yesterday
      ? KEY_DAYS.YESTERDAY
      : format(new Date(thought.timestamp), 'MMMM do')
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
  if (thoughts == null) return INITIAL_THOUGHTS

  const parsedThoughts = JSON.parse(thoughts) as Thought
  const onlyThoughts = Object.values(parsedThoughts).flat()
  const isThoughtsEmpty = onlyThoughts.length === 0
  if (isThoughtsEmpty) return INITIAL_THOUGHTS

  const sortedToughts = sortThoughts(onlyThoughts)
  const thoughtsGroupedByFormatDay = groupByFormatDay(sortedToughts)
  return thoughtsGroupedByFormatDay
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem(THOUGHTS_STORE_NAME, JSON.stringify(thoughts))
}
