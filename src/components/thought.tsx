import { isToday } from 'date-fns'
import { type Thought } from '../types'
import { DynamicTimestamp } from './dynamic-timestamp'
import { StaticTimestamp } from './static-timestamp'

interface Props {
  day: string
  thought: Thought
  deleteThoughtById: (day: string, id: string) => void
}

export function Thought({ day, thought, deleteThoughtById }: Props) {
  const today = isToday(new Date(thought.timestamp))

  return (
    <li className='thought'>
      <textarea
        data-thought-id={thought.id}
        rows={1}
        spellCheck={false}
        readOnly
        value={thought.value}
        style={{ overflowY: 'hidden' }}
      />
      {today ? (
        <DynamicTimestamp timestamp={thought.timestamp} />
      ) : (
        <StaticTimestamp timestamp={thought.timestamp} />
      )}
      <button
        className='delete'
        // onClick={() => deleteThoughtById(day, thought.id)}
      >
        delete
      </button>
    </li>
  )
}
