import { type Thought } from '../types'
import { ThoughtDay } from './thought-day'
import { ThoughtDivider } from './thought-divider'
import { ThoughtsListPerDay } from './thoughts-list-per-day'

interface Props {
  thoughtsPerDay: Thought[]
  day: string
  children?: React.ReactNode
  deleteThoughtById: (day: string, id: string) => void
}

export function ThoughtsPerDay({
  thoughtsPerDay,
  day,
  children,
  deleteThoughtById,
}: Props) {
  return (
    <article>
      <ThoughtDay day={day} />
      {children}
      <ThoughtDivider />
      <ThoughtsListPerDay
        day={day}
        key={day}
        thoughtsPerDay={thoughtsPerDay}
        deleteThoughtById={deleteThoughtById}
      />
    </article>
  )
}
