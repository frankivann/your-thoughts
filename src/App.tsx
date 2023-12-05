import { useThoughts } from './hooks/use-thoughts'
import { ThoughtsList } from './components/thoughts-list'
import { Header } from './components/header'
import { LogoIcon } from './components/icons'
import { Menu } from './components/menu'
import './styles/app.css'

export default function App() {
  const { thoughts, updateThoughts, deleteThoughtById, deteleAllThoughts } =
    useThoughts()

  return (
    <div className='app'>
      <Header>
        <LogoIcon />
        <Menu deteleAllThoughts={deteleAllThoughts} />
      </Header>

      <ThoughtsList
        thoughts={thoughts}
        updateThoughts={updateThoughts}
        deleteThoughtById={deleteThoughtById}
      />
    </div>
  )
}
