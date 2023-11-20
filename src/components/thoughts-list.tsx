import { type Thoughts } from '../types'
import { ThoughtsPerDay } from './thoughts-per-day'

interface Props {
  thoughts: Thoughts
  deleteThoughtById: (day: string, id: string) => void
}

export function ThoughtsList({ thoughts, deleteThoughtById }: Props) {
  const entries = Object.entries(thoughts)

  return (
    <section className='thoughts'>
      {entries.map(([day, thoughts]) => {
        return (
          <ThoughtsPerDay
            key={day}
            day={day}
            thoughtsPerDay={thoughts}
            deleteThoughtById={deleteThoughtById}
          />
        )
      })}
    </section>
  )
}
