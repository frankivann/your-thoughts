import { Thought } from '../types'
import { Timestamp } from './timestamp'

interface Props {
  day: string
  thoughtsPerDay: Thought[]
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
        <div key={thought.id} className='thought'>
          <Timestamp timestamp={thought.timestamp} />
          <li>{thought.value}</li>
          <button onClick={() => deleteThoughtById(day, thought.id)}>
            delete
          </button>
        </div>
      ))}
    </ul>
  )
}
