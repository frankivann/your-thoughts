import { useState } from 'react'
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
  const [animation, setAnimation] = useState(false)

  const handleDelete = () => {
    setAnimation(true)
    setTimeout(() => deleteThoughtById(day, thought.id), 300)
  }

  const fadeOut = animation ? 'fade-out' : ''

  return (
    <li className={`thought ${fadeOut}`}>
      <textarea
        data-thought-id={thought.id}
        rows={1}
        spellCheck={false}
        readOnly
        value={thought.value}
        placeholder='Erase with Backspace ⌫'
        style={{ overflowY: 'hidden', height: 'auto' }}
      />
      {today ? (
        <DynamicTimestamp timestamp={thought.timestamp} />
      ) : (
        <StaticTimestamp timestamp={thought.timestamp} />
      )}
      <button aria-label='delete' className='delete' onClick={handleDelete}>
        delete
      </button>
    </li>
  )
}
