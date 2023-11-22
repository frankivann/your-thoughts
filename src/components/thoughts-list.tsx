import { KEY_DAYS } from '../constants'
import { type Thoughts } from '../types'
import { Form } from './form'
import { ThoughtsPerDay } from './thoughts-per-day'

interface Props {
  thoughts: Thoughts
  deleteThoughtById: (day: string, id: string) => void
  updateThoughts: (newThoughts: Thoughts) => void
}

export function ThoughtsList({
  thoughts,
  deleteThoughtById,
  updateThoughts,
}: Props) {
  const entries = Object.entries(thoughts)

  return (
    <section className='thoughts-list'>
      {entries.map(([day, thoughtsPerDay]) => {
        let children = null
        const isToday = day === KEY_DAYS.TODAY
        const isEmpty = thoughtsPerDay.length === 0

        if (isToday) {
          children = (
            <ThoughtsPerDay
              key={day}
              day={day}
              thoughtsPerDay={thoughtsPerDay}
              deleteThoughtById={deleteThoughtById}
            >
              <Form thoughts={thoughts} updateThoughts={updateThoughts} />
            </ThoughtsPerDay>
          )
        } else if (!isToday && isEmpty) return
        else {
          children = (
            <ThoughtsPerDay
              key={day}
              day={day}
              thoughtsPerDay={thoughtsPerDay}
              deleteThoughtById={deleteThoughtById}
            />
          )
        }

        return children
      })}
    </section>
  )
}
