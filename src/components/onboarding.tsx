import { useEffect } from 'react'
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
  // make height auto resize based on content
  useEffect(
    function () {
      const Allthoughts: NodeListOf<HTMLTextAreaElement> =
        document.querySelectorAll('[data-thought-id]')

      Allthoughts.forEach(element => {
        element.style.height = 'auto'
        element.style.height = `${element.scrollHeight}px`
      })
    },
    [onboardingThoughts]
  )

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
