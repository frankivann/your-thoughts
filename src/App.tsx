import { useState } from 'react'
import { type Thought } from './types'
import './styles/app.css'

const initialThoughts = [
  {
    id: '90fs',
    timestamp: new Date().toISOString(),
    value: 'my first thought',
  },
  {
    id: '0auu',
    timestamp: new Date().toISOString(),
    value: 'i love programming',
  },
]

export default function App() {
  const [thoughts, setThoughts] = useState<Thought[]>(initialThoughts)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    }

  return (
    <div className='app'>
      <header className='header'>
        <p className='logo'>Logo</p>
        <button>Logo</button>
      </header>

      <main className='main'>
        <h1 className='title'>Give me your thoughts</h1>

        <form onSubmit={onSubmit}>
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
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
