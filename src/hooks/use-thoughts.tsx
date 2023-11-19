import { type Thoughts } from '../types'
import { useState } from 'react'
import {
  clearThoughts,
  getStoredThoughts,
  storeThoughts,
} from '../services/thoughts'
// import { format, isToday, isYesterday } from 'date-fns'

export function useThoughts() {
  const [thoughts, setThoughts] = useState<Thoughts>(getStoredThoughts())

  const updateThoughts = (newThoughts: Thoughts) => {
    setThoughts(newThoughts)
  }

  const deleteThoughtById = (key: string, id: string) => {
    const newThoughts = { ...thoughts }
    const newKeyThoughts = newThoughts[key].filter(thought => thought.id !== id)
    newThoughts[key] = newKeyThoughts

    updateThoughts(newThoughts)
    storeThoughts(newThoughts)
  }

  const deteleAllThoughts = () => {
    updateThoughts({ Today: [] })
    clearThoughts()
  }

  // const order = () => {
  //   // console.log(thoughts)
  //   const mapped = thoughts.map(thought => ({
  //     ...thought,
  //     createdAt: format(new Date(thought.timestamp), 'EEEE do'),
  //   }))

  //   const based = Object.groupBy(mapped, (thought: Thought) => {
  //     if (isToday(new Date(thought.timestamp))) return 'Today'
  //     else if (isYesterday(new Date(thought.timestamp))) return 'Yesterday'
  //     return thought.createdAt
  //   })
  //   // console.log(based)
  // }

  // order()

  return {
    thoughts,
    updateThoughts,
    deleteThoughtById,
    deteleAllThoughts,
  }
}
