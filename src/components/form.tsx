import { storeThoughts } from '../services/thoughts'
import { type Thought } from '../types'

interface Props {
  thoughts: Thought[]
  updateThoughts: (newThoughts: Thought[]) => void
}

export function Form({ thoughts, updateThoughts }: Props) {
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

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='thought' />
    </form>
  )
}
