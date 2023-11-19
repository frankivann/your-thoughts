import { type Thought } from '../types'
import { Timestamp } from './timestamp'
import { storeThoughts } from '../services/thoughts'

interface Props {
  thought: Thought
  thoughts: Thought[]
  updateThoughts: (newThoughts: Thought[]) => void
  deleteThoughtById: (id: string) => void
}

export function ThoughtItem({
  thought,
  thoughts,
  updateThoughts,
  deleteThoughtById,
}: Props) {
  const handleDeleteById = (id: string) => () => {
    deleteThoughtById(id)
  }

  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target

      const newThoughts = [...thoughts]
      const index = newThoughts.findIndex(thought => thought.id === id)
      const thoughtInfo = newThoughts[index]

      newThoughts[index] = {
        ...thoughtInfo,
        value,
      }

      updateThoughts(newThoughts)
      storeThoughts(newThoughts)
    }

  return (
    <li className='tought'>
      <Timestamp timestamp={thought.timestamp} />
      <textarea
        name={thought.value}
        id={thought.id}
        defaultValue={thought.value}
        onChange={handleChange(thought.id)}
      />
      <button onClick={handleDeleteById(thought.id)}>delete</button>
    </li>
  )
}
