import { type Thought, type Thoughts } from '../types'
import { isToday, isYesterday, format } from 'date-fns'
import { INITIAL_THOUGHTS, KEY_DAYS, THOUGHTS_NAME } from '../constants'

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
  const thoughts = window.localStorage.getItem(THOUGHTS_NAME)

  if (!thoughts) {
    storeThoughts(INITIAL_THOUGHTS)
    return INITIAL_THOUGHTS
  }

  try {
    const parsedThoughts = JSON.parse(thoughts) as Thought
    const onlyThoughts = Object.values(parsedThoughts).flat()
    const isThoughtsEmpty = onlyThoughts.length === 0

    if (isThoughtsEmpty) throw new Error()

    const sortedToughts = sortThoughts(onlyThoughts)
    const thoughtsGroupedByFormatDay = groupByFormatDay(sortedToughts)
    return thoughtsGroupedByFormatDay
  } catch (error) {
    storeThoughts(INITIAL_THOUGHTS)
    return INITIAL_THOUGHTS
  }
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem(THOUGHTS_NAME, JSON.stringify(thoughts))
}
