import { type Thought } from '../types'
import { ThoughtsListPerDay } from './thoughts-list-per-day'

interface Props {
  thoughtsPerDay: Thought[]
  day: string
  children?: React.ReactNode
}

export function ThoughtsPerDay({ thoughtsPerDay, day, children }: Props) {
  return (
    <article className='thoughts-per-day'>
      <h2>{day}</h2>
      {children}
      <ThoughtsListPerDay key={day} thoughtsPerDay={thoughtsPerDay} />
    </article>
  )
}
