import { useEffect } from 'react'
import { KEY_DAYS } from '../constants'
import { type Thoughts } from '../types'
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

  // make height auto resize based on content
  useEffect(
    function () {
      const Allthoughts: NodeListOf<HTMLTextAreaElement> =
        document.querySelectorAll('[data-thought-id]')

      Allthoughts.forEach(element => {
        element.style.height = 'auto'
        element.style.height = `${element.scrollHeight}px`
      })
    },
    [thoughts]
  )

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
            deleteThoughtById={deleteThoughtById}
          >
            <Form thoughts={thoughts} updateThoughts={updateThoughts} />
          </ThoughtsPerDay>
        ) : (
          <ThoughtsPerDay
            key={crypto.randomUUID()}
            day={day}
            thoughtsPerDay={thoughtsPerDay}
            deleteThoughtById={deleteThoughtById}
          />
        )
      })}
    </main>
  )
}
