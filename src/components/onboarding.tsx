import { ThoughtDay } from './thought-day'
import { ThoughtDivider } from './thought-divider'
import { StaticTimestamp } from './static-timestamp'
import { ContinueIcon } from './icons'
import { type Thought } from '../types'

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
      <article style={{ opacity: 0 }}>
        <ThoughtDay day='Onboarding' />
        <ThoughtDivider />
        <ul className='thoughts'>
          {onboardingThoughts.map(thought => (
            <li className='thought' key={thought.id} style={{ opacity: 0 }}>
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
          <button
            className='continue'
            onClick={completeOnboarding}
            style={{ opacity: 0 }}
          >
            <ContinueIcon />
          </button>
        )}
      </article>
    </main>
  )
}
