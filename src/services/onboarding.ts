import { THOUGHTS_ONBOARDED } from '../constants'

export function getStoredOnboarding() {
  const hasOnboarded = window.localStorage.getItem(THOUGHTS_ONBOARDED)
  return hasOnboarded ? (JSON.parse(hasOnboarded) as boolean) : false
}

export function storeHasOnboarding() {
  window.localStorage.setItem(THOUGHTS_ONBOARDED, JSON.stringify(true))
}
