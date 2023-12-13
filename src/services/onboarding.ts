import { THOUGHTS_ONBOARDED_NAME } from '../constants'

export function getStoredOnboarding() {
  const hasOnboarded = window.localStorage.getItem(THOUGHTS_ONBOARDED_NAME)

  if (!hasOnboarded) {
    storeNoHasOnboarding()
    return false
  }

  try {
    const onboardingParsed = JSON.parse(hasOnboarded) as boolean
    const isBoolean = typeof onboardingParsed === 'boolean'
    if (!isBoolean) throw new Error()

    return onboardingParsed
  } catch {
    storeNoHasOnboarding()
    return false
  }
}

export function storeHasOnboarding() {
  window.localStorage.setItem(THOUGHTS_ONBOARDED_NAME, JSON.stringify(true))
}

export function storeNoHasOnboarding() {
  window.localStorage.setItem(THOUGHTS_ONBOARDED_NAME, JSON.stringify(false))
}
