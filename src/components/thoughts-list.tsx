import { KEY_DAYS } from '../constants'
import { type Thoughts } from '../types'
import { Form } from './form'
import { ThoughtsPerDay } from './thoughts-per-day'

interface Props {
  thoughts: Thoughts
  updateThoughts: (newThoughts: Thoughts) => void
}

export function ThoughtsList({ thoughts, updateThoughts }: Props) {
  const entries = Object.entries(thoughts)

  return (
    <main>
      {entries.map(([day, thoughtsPerDay]) => {
        const isToday = day === KEY_DAYS.TODAY
        const isEmpty = thoughtsPerDay.length === 0
        if (!isToday && isEmpty) return

        return isToday ? (
          <ThoughtsPerDay
            key={crypto.randomUUID()}
            day={day}
            thoughtsPerDay={thoughtsPerDay}
          >
            <Form thoughts={thoughts} updateThoughts={updateThoughts} />
          </ThoughtsPerDay>
        ) : (
          <ThoughtsPerDay
            key={crypto.randomUUID()}
            day={day}
            thoughtsPerDay={thoughtsPerDay}
          />
        )
      })}
    </main>
  )
}
