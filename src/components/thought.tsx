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
    <li className='thought'>
      <textarea
        data-thought-id={thought.id}
        rows={1}
        spellCheck={false}
        readOnly
        value={thought.value}
      />
      {today ? (
        <DynamicTimestamp timestamp={thought.timestamp} />
      ) : (
        <StaticTimestamp timestamp={thought.timestamp} />
      )}
    </li>
  )
}
