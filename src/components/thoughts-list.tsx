import { useEffect } from 'react'
import { Form } from './form'
import { ThoughtsPerDay } from './thoughts-per-day'
import { type Thought, type Thoughts } from '../types'
import { KEY_DAYS } from '../constants'

interface Props {
  thoughts: Thoughts
  storeNewThought: (thought: Thought) => void
  createNewThought: (thought: string) => Thought
  deleteThoughtById: (day: string, id: string) => void
}

export function ThoughtsList({
  thoughts,
  storeNewThought,
  createNewThought,
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

        return isToday ? (
          <ThoughtsPerDay
            key={day}
            day={day}
            thoughtsPerDay={thoughtsPerDay}
            deleteThoughtById={deleteThoughtById}
          >
            <Form
              storeNewThought={storeNewThought}
              createNewThought={createNewThought}
            />
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
