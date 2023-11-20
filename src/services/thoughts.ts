import { format, isToday, isYesterday } from 'date-fns'
import { type Thought, type Thoughts } from '../types'
import { INITIAL_THOUGHTS, THOUGHTS_STORE_NAME } from '../constants'

function groupThoughtsByFormatDay(onlyThoughts: Thought[]) {
  const ThoughtsformatDay = onlyThoughts.map(thought => ({
    ...thought,
    formatDay: format(new Date(thought.timestamp), 'MMMM do'),
  }))

  const x = Object.groupBy(ThoughtsformatDay, (thought: Thought) => {
    if (isToday(new Date(thought.timestamp))) return 'Today'
    else if (isYesterday(new Date(thought.timestamp))) return 'Yesterday'
    return thought.formatDay
  })

  return x
}

export function getStoredThoughts() {
  const thoughts = window.localStorage.getItem(THOUGHTS_STORE_NAME)
  if (thoughts == null) return INITIAL_THOUGHTS

  const parsedThoughts = JSON.parse(thoughts) as Thoughts
  const onlyThoughts = Object.values(parsedThoughts).flat()
  const isThoughtsEmpty = onlyThoughts.length === 0

  return isThoughtsEmpty
    ? INITIAL_THOUGHTS
    : groupThoughtsByFormatDay(onlyThoughts)
}

export function storeThoughts(thoughts: Thoughts) {
  window.localStorage.setItem(THOUGHTS_STORE_NAME, JSON.stringify(thoughts))
}
