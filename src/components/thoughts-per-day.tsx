import { type Thought } from '../types'
import { ThoughtsListPerDay } from './thoughts-list-per-day'

interface Props {
  thoughtsPerDay: Thought[]
  day: string
  deleteThoughtById: (day: string, id: string) => void
}

export function ThoughtsPerDay({
  thoughtsPerDay,
  day,
  deleteThoughtById,
}: Props) {
  return (
    <div>
      <h2>{day}</h2>
      <ThoughtsListPerDay
        key={day}
        day={day}
        thoughtsPerDay={thoughtsPerDay}
        deleteThoughtById={deleteThoughtById}
      />
    </div>
  )
}
