import { type Thoughts } from '../types'

interface Props {
  thoughts: Thoughts
  deleteThoughtById: (key: string, id: string) => void
}

export function ThoughtsList({ thoughts, deleteThoughtById }: Props) {
  const entries = Object.entries(thoughts)

  return (
    <section className='thoughts'>
      {entries.map(([key, thoughts], index) => {
        return (
          <div key={index}>
            <h2>{key}</h2>
            <ul className='thoughts'>
              {thoughts.map(thought => (
                <div key={thought.id} className='thought'>
                  <li>{thought.value}</li>
                  <button onClick={() => deleteThoughtById(key, thought.id)}>
                    delete
                  </button>
                </div>
              ))}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
