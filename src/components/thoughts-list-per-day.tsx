import { type Thought as ThoughtType } from '../types'
import { Thought } from './thought'

interface Props {
  thoughtsPerDay: ThoughtType[]
}

export function ThoughtsListPerDay({ thoughtsPerDay }: Props) {
  return (
    <ul className='thoughts'>
      {thoughtsPerDay.map(thought => (
        <Thought key={thought.id} thought={thought} />
      ))}
    </ul>
  )
}
