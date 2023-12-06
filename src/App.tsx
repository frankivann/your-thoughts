import { useThoughts } from './hooks/use-thoughts'
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
  } = useThoughts()

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
