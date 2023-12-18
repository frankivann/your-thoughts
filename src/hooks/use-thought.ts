import { useState } from 'react'
import { nanoid } from 'nanoid'
import { type Thought, type Thoughts } from '../types'
import { INITIAL_THOUGHTS, KEY_DAYS } from '../constants'
import { getStoredThoughts, storeThoughts } from '../services/thoughts'

export function useThought() {
  const [thoughts, setThoughts] = useState<Thoughts>(getStoredThoughts())

  const createNewThought = (thought: string) => {
    return {
      id: nanoid(6),
      timestamp: new Date().toISOString(),
      value: thought.trim(),
    }
  }

  const storeNewThought = (thought: Thought) => {
    const newThoughts = { ...thoughts }
    newThoughts.Today = [thought, ...newThoughts.Today]
    updateThoughts(newThoughts)
    storeThoughts(newThoughts)
  }

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
    setThoughts(INITIAL_THOUGHTS)
    storeThoughts(INITIAL_THOUGHTS)
  }

  const hasThoughts = Object.values(thoughts).flat().length > 0

  return {
    thoughts,
    hasThoughts,
    createNewThought,
    storeNewThought,
    updateThoughts,
    deleteThoughtById,
    deteleAllThoughts,
  }
}
