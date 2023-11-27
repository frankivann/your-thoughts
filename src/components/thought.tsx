import { isToday } from 'date-fns'
import { type Thought } from '../types'
import { DynamicTimestamp } from './dynamic-timestamp'
import { StaticTimestamp } from './static-timestamp'
import { useEffect } from 'react'

interface Props {
  thought: Thought
}

export function Thought({ thought }: Props) {
  const today = isToday(new Date(thought.timestamp))

  useEffect(
    function () {
      const element = document.getElementById(thought.id)
      if (element) {
        element.style.height = 'auto'
        element.style.height = `${element.scrollHeight}px`
      }
    },
    [thought.id]
  )

  return (
    <li className='thought'>
      <textarea
        id={thought.id}
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
