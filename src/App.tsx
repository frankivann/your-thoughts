import { useThought } from './hooks/use-thought'
import { Menu } from './components/menu'
import { Header } from './components/header'
import { LogoIcon } from './components/icons'
import { ThoughtsList } from './components/thoughts-list'
import { Onboarding } from './components/onboarding'
import { useOnboarding } from './hooks/use-onboarding'
import './styles/app.css'

export default function App() {
  const {
    thoughts,
    hasThoughts,
    storeNewThought,
    createNewThought,
    deleteThoughtById,
    deteleAllThoughts,
  } = useThought()

  const { hasOnboarded, onboardingThoughts, showContinue, completeOnboarding } =
    useOnboarding()

  return (
    <div className='app'>
      <Header>
        <LogoIcon />
        <Menu hasThoughts={hasThoughts} deteleAllThoughts={deteleAllThoughts} />
      </Header>

      {hasOnboarded ? (
        <ThoughtsList
          thoughts={thoughts}
          storeNewThought={storeNewThought}
          createNewThought={createNewThought}
          deleteThoughtById={deleteThoughtById}
        />
      ) : (
        <Onboarding
          showContinue={showContinue}
          onboardingThoughts={onboardingThoughts}
          completeOnboarding={completeOnboarding}
        />
      )}
    </div>
  )
}
