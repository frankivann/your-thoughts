import { type Thought } from '../types'
import { Timestamp } from './timestamp'

interface Props {
  thought: Thought
  handleChange: (
    id: string
  ) => (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleDeleteById: (id: string) => () => void
}

export function ThoughtItem({
  thought,
  handleChange,
  handleDeleteById,
}: Props) {
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
