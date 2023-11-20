import { differenceInHours } from 'date-fns'
import { type Thought } from '../types'
import { DynamicTimestamp } from './dynamic-timestamp'
import { StaticTimestamp } from './static-timestamp'

interface Props {
  day: string
  thought: Thought
  deleteThoughtById: (day: string, id: string) => void
}

export function Thought({ day, thought, deleteThoughtById }: Props) {
  const isDayPassed =
    differenceInHours(new Date(), new Date(thought.timestamp)) > 24

  return (
    <div key={thought.id} className='thought'>
      {isDayPassed ? (
        <StaticTimestamp timestamp={thought.timestamp} />
      ) : (
        <DynamicTimestamp timestamp={thought.timestamp} />
      )}
      <li>{thought.value}</li>
      <button onClick={() => deleteThoughtById(day, thought.id)}>delete</button>
    </div>
  )
}
