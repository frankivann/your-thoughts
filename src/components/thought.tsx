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
    <div key={thought.id} className='thought'>
      {today ? (
        <DynamicTimestamp timestamp={thought.timestamp} />
      ) : (
        <StaticTimestamp timestamp={thought.timestamp} />
      )}
      <li>{thought.value}</li>
      <button onClick={() => deleteThoughtById(day, thought.id)}>delete</button>
    </div>
  )
}
