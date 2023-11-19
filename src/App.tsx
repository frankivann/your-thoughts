import { useThoughts } from './hooks/use-thoughts'
import { ThoughtsList } from './components/thoughts-list'
import { Form } from './components/form'
import './styles/app.css'

export default function App() {
  const { thoughts, updateThoughts, deleteThoughtById, deteleAllThoughts } =
    useThoughts()

  const handleDeleteById = (id: string) => () => {
    deleteThoughtById(id)
  }

  const handleDeleteAll = () => {
    deteleAllThoughts()
  }

  return (
    <div className='app'>
      <header className='header'>
        <p className='logo'>Logo</p>
        <button>Logo</button>
      </header>

      <main className='main'>
        <button onClick={handleDeleteAll}>delete all</button>
        <h1 className='title'>Give me your thoughts</h1>

        <Form thoughts={thoughts} updateThoughts={updateThoughts} />

        <ThoughtsList
          thoughts={thoughts}
          updateThoughts={updateThoughts}
          handleDeleteById={handleDeleteById}
        />
      </main>
    </div>
  )
}
