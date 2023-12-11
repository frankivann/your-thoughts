import { useEffect, useState } from 'react'
import { type Thought } from '../types'
import { getStoredOnboarding, storeHasOnboarding } from '../services/onboarding'
import { INITIAL_ONBOARDING_THOUGHTS } from '../constants'

export function useOnboarding() {
  const [hasOnboarded, setHasOnboarded] = useState(getStoredOnboarding())
  const [onboardingThoughts, setOnboardingThoughts] = useState<Thought[]>([])
  const [showContinue, setShowContinue] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(
    function () {
      if (hasOnboarded) return

      const intervalId = setInterval(() => {
        if (currentIndex < INITIAL_ONBOARDING_THOUGHTS.length) {
          const newThoughts = [
            ...onboardingThoughts,
            INITIAL_ONBOARDING_THOUGHTS[currentIndex],
          ]

          setOnboardingThoughts(newThoughts)
          setCurrentIndex(prevIndex => prevIndex + 1)
        } else {
          setShowContinue(true)
          clearInterval(intervalId)
        }
      }, 1100)

      return () => clearInterval(intervalId)
    },
    [hasOnboarded, currentIndex, onboardingThoughts]
  )

  const completeOnboarding = () => {
    setHasOnboarded(true)
    storeHasOnboarding()
  }

  return {
    onboardingThoughts,
    showContinue,
    hasOnboarded,
    completeOnboarding,
  }
}
