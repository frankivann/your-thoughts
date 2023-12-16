import { type Thought, type Thoughts } from '../types'
import { isToday, isYesterday, format } from 'date-fns'
import { INITIAL_THOUGHTS, KEY_DAYS, THOUGHTS_NAME } from '../constants'

export function groupByFormatDay(thoughts: Thought[]) {
  const grouped = thoughts.reduce((result: Thoughts, thought) => {
    const today = isToday(new Date(thought.timestamp))
    const yesterday = isYesterday(new Date(thought.timestamp))

    const keyDay = today
      ? KEY_DAYS.TODAY
      : yesterday
      ? KEY_DAYS.YESTERDAY
      : format(new Date(thought.timestamp), 'MMMM do')

    if (!result[keyDay]) result[keyDay] = []
    result[keyDay].push(thought)

    return result
  }, {})

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
    const onlyThoughts = Object.values(parsedThoughts).flat() as Thought[]
    const isThoughtsEmpty = onlyThoughts.length === 0
    if (isThoughtsEmpty) return INITIAL_THOUGHTS

    const sortedToughts = sortThoughts(onlyThoughts)
    const thoughtsGroupedByFormatDay = groupByFormatDay(sortedToughts)
    return thoughtsGroupedByFormatDay
  } catch {
    storeThoughts(INITIAL_THOUGHTS)
    return INITIAL_THOUGHTS
  }
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem(THOUGHTS_NAME, JSON.stringify(thoughts))
}
