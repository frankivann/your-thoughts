import { ThoughtDay } from './thought-day'
import { ContinueIcon } from './icons'
import { type Thought } from '../types'
import { ThoughtDivider } from './thought-divider'
import { StaticTimestamp } from './static-timestamp'

interface Props {
  onboardingThoughts: Thought[]
  showContinue: boolean
  completeOnboarding: () => void
}

export function Onboarding({
  onboardingThoughts,
  showContinue,
  completeOnboarding,
}: Props) {
  return (
    <main>
      <article>
        <ThoughtDay day='Onboarding' />
        <ThoughtDivider />
        <ul className='thoughts'>
          {onboardingThoughts.map(thought => (
            <li className='thought onboarding' key={thought.id}>
              <textarea
                data-thought-id={thought.id}
                rows={1}
                spellCheck={false}
                readOnly
                value={thought.value}
                placeholder='Erase with Backspace ⌫'
                style={{ overflowY: 'hidden', height: 'auto' }}
              />
              <StaticTimestamp timestamp={thought.timestamp} />
            </li>
          ))}
        </ul>
        {showContinue && (
          <button className='continue' onClick={completeOnboarding}>
            <ContinueIcon />
          </button>
        )}
      </article>
    </main>
  )
}
