import { useRef, useState } from 'react'
import { storeThoughts } from '../services/thoughts'
import { type Thoughts } from '../types'

interface Props {
  thoughts: Thoughts
  updateThoughts: (newThoughts: Thoughts) => void
}

export function Form({ thoughts, updateThoughts }: Props) {
  const [thought, setThought] = useState('')
  const textareaRef = useRef<null | HTMLTextAreaElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThought(event.target.value)
    const textarea = textareaRef.current

    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = event
    const isEnter = key === 'Enter'
    const isEmpty = thought.trim() === ''
    const textarea = textareaRef.current

    if (isEnter && !isEmpty) {
      event.preventDefault()

      const newThought = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        value: thought,
      }

      const newThoughts = { ...thoughts }
      newThoughts.Today = [newThought, ...newThoughts.Today]
      updateThoughts(newThoughts)
      storeThoughts(newThoughts)

      setThought('')
      if (textarea) {
        textarea.style.height = '24px'
      }
    }
  }

  return (
    <textarea
      ref={textareaRef}
      value={thought}
      name='thought'
      placeholder='Let your thoughts out'
      autoFocus
      rows={1}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      style={{ height: '24px', overflowY: 'hidden' }}
    />
  )
}
