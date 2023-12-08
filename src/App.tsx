import { useThought } from './hooks/use-thought'
import { Menu } from './components/menu'
import { Header } from './components/header'
import { LogoIcon } from './components/icons'
import { ThoughtsList } from './components/thoughts-list'
import './styles/app.css'

export default function App() {
  const {
    thoughts,
    createNewThought,
    storeNewThought,
    deleteThoughtById,
    deteleAllThoughts,
  } = useThought()

  return (
    <div className='app'>
      <Header>
        <LogoIcon />
        <Menu deteleAllThoughts={deteleAllThoughts} />
      </Header>

      <ThoughtsList
        thoughts={thoughts}
        storeNewThought={storeNewThought}
        createNewThought={createNewThought}
        deleteThoughtById={deleteThoughtById}
      />
    </div>
  )
}
