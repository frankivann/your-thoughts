import { type Thought } from '../types'
import { ThoughtItem } from './thought-item'

interface Props {
  thoughts: Thought[]
  handleChange: (
    id: string
  ) => (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleDeleteById: (id: string) => () => void
}

export function ThoughtsList({
  thoughts,
  handleChange,
  handleDeleteById,
}: Props) {
  return (
    <ul className='toughts'>
      {thoughts.map(thought => (
        <ThoughtItem
          key={thought.id}
          thought={thought}
          handleChange={handleChange}
          handleDeleteById={handleDeleteById}
        />
      ))}
    </ul>
  )
}
