import { useState } from 'react'
import { type Thoughts } from '../types'
import { INITIAL_THOUGHTS } from '../constants'
import { getStoredThoughts, storeThoughts } from '../services/thoughts'

export function useThoughts() {
  const [thoughts, setThoughts] = useState<Thoughts>(getStoredThoughts())

  const updateThoughts = (newThoughts: Thoughts) => {
    setThoughts(newThoughts)
  }

  const deleteThoughtById = (day: string, id: string) => {
    const newThoughts = { ...thoughts }
    const newDayThoughts = newThoughts[day].filter(thought => thought.id !== id)
    newThoughts[day] = newDayThoughts

    setThoughts(newThoughts)
    storeThoughts(newThoughts)
  }

  const deteleAllThoughts = () => {
    setThoughts(INITIAL_THOUGHTS)
    storeThoughts(INITIAL_THOUGHTS)
  }

  return {
    thoughts,
    updateThoughts,
    deleteThoughtById,
    deteleAllThoughts,
  }
}
