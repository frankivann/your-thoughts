import { useState, useEffect } from 'react'
import { type Thoughts } from '../types'
import { INITIAL_THOUGHTS, KEY_DAYS } from '../constants'
import { getStoredThoughts, storeThoughts } from '../services/thoughts'

export function useThoughts() {
  const [thoughts, setThoughts] = useState<Thoughts>(getStoredThoughts())

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

  const updateThoughts = (newThoughts: Thoughts) => {
    setThoughts(newThoughts)
  }

  const deleteThoughtById = (day: string, id: string) => {
    const newThoughts = { ...thoughts }
    const newDayThoughts = newThoughts[day].filter(thought => thought.id !== id)
    newThoughts[day] = newDayThoughts

    const isToday = day === KEY_DAYS.TODAY
    const isEmpty = newDayThoughts.length === 0

    if (!isToday && isEmpty) {
      delete newThoughts[day]
    }

    setThoughts(newThoughts)
    storeThoughts(newThoughts)
  }

  const deteleAllThoughts = () => {
    console.log('deleting...')

    // setThoughts(INITIAL_THOUGHTS)
    // storeThoughts(INITIAL_THOUGHTS)
  }

  return {
    thoughts,
    updateThoughts,
    deleteThoughtById,
    deteleAllThoughts,
  }
}
