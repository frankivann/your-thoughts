import { type Thought } from '../types'
import { ThoughtsListPerDay } from './thoughts-list-per-day'

interface Props {
  thoughtsPerDay: Thought[]
  day: string
  children?: React.ReactNode
}

export function ThoughtsPerDay({ thoughtsPerDay, day, children }: Props) {
  return (
    <article>
      <h2 className='title-day'>{day}</h2>
      {children}
      <hr className='divider' />
      <ThoughtsListPerDay key={day} thoughtsPerDay={thoughtsPerDay} />
    </article>
  )
}
