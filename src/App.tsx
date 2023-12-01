import { useThoughts } from './hooks/use-thoughts'
import { ThoughtsList } from './components/thoughts-list'
import './styles/app.css'
import { Header } from './components/header'

export default function App() {
  const { thoughts, updateThoughts, deleteThoughtById } = useThoughts()

  return (
    <div className='app'>
      <Header />

      <ThoughtsList
        thoughts={thoughts}
        updateThoughts={updateThoughts}
        deleteThoughtById={deleteThoughtById}
      />
    </div>
  )
}
