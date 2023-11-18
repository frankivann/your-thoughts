import { type Thought } from '../types'
import { useState } from 'react'
import {
  clearThoughts,
  getStoredThoughts,
  storeThoughts,
} from '../services/thoughts'

export function useThoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>(getStoredThoughts())

  const updateThoughts = (newThoughts: Thought[]) => {
    setThoughts(newThoughts)
  }

  const deleteThoughtById = (id: string) => {
    const newThoughts = thoughts.filter(thought => thought.id !== id)
    updateThoughts(newThoughts)
    storeThoughts(newThoughts)
  }

  const deteleAllThoughts = () => {
    updateThoughts([])
    clearThoughts()
  }

  return {
    thoughts,
    updateThoughts,
    deleteThoughtById,
    deteleAllThoughts,
  }
}
