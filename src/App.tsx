import { useState } from 'react'
import { type Thought } from './types'
import './styles/app.css'

function setToLocalStorage(thoughts: Thought[]) {
  window.localStorage.setItem('_THOUGHTS_', JSON.stringify(thoughts))
}

function getStoredThoughts() {
  const thoughts = window.localStorage.getItem('_THOUGHTS_')
  return thoughts ? (JSON.parse(thoughts) as Thought[]) : []
}

export default function App() {
  const [thoughts, setThoughts] = useState<Thought[]>(getStoredThoughts())

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    /**
     * Get input value
     */

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const thought = formData.get('thought') as string

    /**
     * Set new obj to thoughts
     */

    const newThought = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      value: thought,
    }

    const newThoughts = [...thoughts, newThought]
    setThoughts(newThoughts)

    form.reset()
    setToLocalStorage(newThoughts)
  }

  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target

      /**
       * Get thought info
       */

      const newThoughts = [...thoughts]
      const index = newThoughts.findIndex(thought => thought.id === id)
      const thoughtInfo = newThoughts[index]

      /**
       * Set new thought
       */

      newThoughts[index] = {
        ...thoughtInfo,
        value,
      }

      setThoughts(newThoughts)
      setToLocalStorage(newThoughts)
    }

  const handleDelete = (id: string) => () => {
    const newThoughts = thoughts.filter(thought => thought.id !== id)
    setThoughts(newThoughts)
    setToLocalStorage(newThoughts)
  }

  const handleDeleteAll = () => {
    setThoughts([])
    setToLocalStorage([])
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

        <ul className='toughts'>
          {thoughts.map(({ id, value }) => (
            <li key={id} className='tought'>
              <textarea
                name={value}
                id={id}
                defaultValue={value}
                onChange={handleChange(id)}
              />
              <button onClick={handleDelete(id)}>delete</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
