import { format, isToday, isYesterday } from 'date-fns'
import { type Thought, type Thoughts } from '../types'
import { INITIAL_THOUGHTS, THOUGHTS_STORE_NAME } from '../constants'

function groupThoughtsByDate(onlyThoughts: Thought[]) {
  const ThoughtsformatDay = onlyThoughts.map(thought => ({
    ...thought,
    formatDay: format(new Date(thought.timestamp), 'MMMM do'),
  }))

  let groupedByDate = Object.groupBy(ThoughtsformatDay, (thought: Thought) => {
    const today = isToday(new Date(thought.timestamp))
    const yesterday = isYesterday(new Date(thought.timestamp))

    return today ? 'Today' : yesterday ? 'Yesterday' : thought.formatDay
  })

  // check if Today exists
  const hasToday = groupedByDate.Today

  if (!hasToday) {
    groupedByDate = {
      Today: [],
      ...groupedByDate,
    }
  }

  return groupedByDate
}

export function getStoredThoughts() {
  const thoughts = window.localStorage.getItem(THOUGHTS_STORE_NAME)
  if (thoughts == null) return INITIAL_THOUGHTS

  const parsedThoughts = JSON.parse(thoughts) as Thoughts
  const onlyThoughts = Object.values(parsedThoughts).flat()
  const isThoughtsEmpty = onlyThoughts.length === 0

  return isThoughtsEmpty ? INITIAL_THOUGHTS : groupThoughtsByDate(onlyThoughts)
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem(THOUGHTS_STORE_NAME, JSON.stringify(thoughts))
}
