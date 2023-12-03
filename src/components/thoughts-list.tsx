import { type Thoughts } from '../types'
import { KEY_DAYS } from '../constants'
import { Form } from './form'
import { ThoughtsPerDay } from './thoughts-per-day'

interface Props {
  thoughts: Thoughts
  updateThoughts: (newThoughts: Thoughts) => void
  deleteThoughtById: (day: string, id: string) => void
}

export function ThoughtsList({
  thoughts,
  updateThoughts,
  deleteThoughtById,
}: Props) {
  const entries = Object.entries(thoughts)

  return (
    <main>
      {entries.map(([day, thoughtsPerDay]) => {
        const isToday = day === KEY_DAYS.TODAY

        return isToday ? (
          <ThoughtsPerDay
            key={day}
            day={day}
            thoughtsPerDay={thoughtsPerDay}
            deleteThoughtById={deleteThoughtById}
          >
            <Form thoughts={thoughts} updateThoughts={updateThoughts} />
          </ThoughtsPerDay>
        ) : (
          <ThoughtsPerDay
            key={day}
            day={day}
            thoughtsPerDay={thoughtsPerDay}
            deleteThoughtById={deleteThoughtById}
          />
        )
      })}
    </main>
  )
}
