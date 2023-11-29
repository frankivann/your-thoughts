import { type Thought } from '../types'
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
      <h2 className='title-day'>{day}</h2>
      {children}
      <hr className='divider' />
      <ThoughtsListPerDay
        key={day}
        day={day}
        thoughtsPerDay={thoughtsPerDay}
        deleteThoughtById={deleteThoughtById}
      />
    </article>
  )
}
