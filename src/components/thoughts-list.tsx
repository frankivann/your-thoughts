import { type Thought } from '../types'
import { ThoughtItem } from './thought-item'

interface Props {
  thoughts: Thought[]
  updateThoughts: (newThoughts: Thought[]) => void
  handleDeleteById: (id: string) => () => void
}

export function ThoughtsList({
  thoughts,
  updateThoughts,
  handleDeleteById,
}: Props) {
  return (
    <ul className='toughts'>
      {thoughts.map(thought => (
        <ThoughtItem
          key={thought.id}
          thought={thought}
          thoughts={thoughts}
          updateThoughts={updateThoughts}
          handleDeleteById={handleDeleteById}
        />
      ))}
    </ul>
  )
}
