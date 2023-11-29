import { type Thought as ThoughtType } from '../types'
import { Thought } from './thought'

interface Props {
  day: string
  thoughtsPerDay: ThoughtType[]
  deleteThoughtById: (day: string, id: string) => void
}

export function ThoughtsListPerDay({
  day,
  thoughtsPerDay,
  deleteThoughtById,
}: Props) {
  return (
    <ul className='thoughts'>
      {thoughtsPerDay.map(thought => (
        <Thought
          day={day}
          key={thought.id}
          thought={thought}
          deleteThoughtById={deleteThoughtById}
        />
      ))}
    </ul>
  )
}
