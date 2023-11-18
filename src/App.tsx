import { storeThoughts } from './services/thoughts'
import { useThoughts } from './hooks/use-thoughts'
import { ThoughtsList } from './components/thoughts-list'
import './styles/app.css'

export default function App() {
  const { thoughts, updateThoughts, deleteThoughtById, deteleAllThoughts } =
    useThoughts()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const thought = formData.get('thought') as string

    const newThought = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      value: thought,
    }

    const newThoughts = [...thoughts, newThought]
    updateThoughts(newThoughts)

    form.reset()
    storeThoughts(newThoughts)
  }

  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target

      const newThoughts = [...thoughts]
      const index = newThoughts.findIndex(thought => thought.id === id)
      const thoughtInfo = newThoughts[index]

      newThoughts[index] = {
        ...thoughtInfo,
        value,
      }

      updateThoughts(newThoughts)
      storeThoughts(newThoughts)
    }

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

        <form onSubmit={handleSubmit}>
          <input type='text' name='thought' />
        </form>

        <ThoughtsList
          thoughts={thoughts}
          handleChange={handleChange}
          handleDeleteById={handleDeleteById}
        />
      </main>
    </div>
  )
}
