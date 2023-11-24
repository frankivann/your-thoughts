import { isToday } from 'date-fns'
import { type Thought } from '../types'
import { DynamicTimestamp } from './dynamic-timestamp'
import { StaticTimestamp } from './static-timestamp'

interface Props {
  thought: Thought
}

export function Thought({ thought }: Props) {
  const today = isToday(new Date(thought.timestamp))

  return (
    <li key={thought.id} className='thought'>
      <textarea spellCheck={false} readOnly value={thought.value} />
      {today ? (
        <DynamicTimestamp timestamp={thought.timestamp} />
      ) : (
        <StaticTimestamp timestamp={thought.timestamp} />
      )}
    </li>
  )
}
