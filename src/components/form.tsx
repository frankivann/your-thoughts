import { useRef, useState } from 'react'
import { storeThoughts } from '../services/thoughts'
import { type Thoughts } from '../types'

interface Props {
  thoughts: Thoughts
  updateThoughts: (newThoughts: Thoughts) => void
}

export function Form({ thoughts, updateThoughts }: Props) {
  const [thought, setThought] = useState('')
  const [shiftPressed, setShiftPressed] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThought(event.target.value)
    const textarea = textareaRef.current

    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = event
    if (key === 'Shift') setShiftPressed(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = event
    const isEnter = key === 'Enter'
    const isShift = key === 'Shift'
    const isEmpty = thought.trim() === ''
    const textarea = textareaRef.current

    if (isEmpty) return
    if (isShift) setShiftPressed(true)

    if (isEnter && !shiftPressed) {
      event.preventDefault()

      const newThought = {
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        value: thought.trim(),
      }

      const newThoughts = { ...thoughts }
      newThoughts.Today = [newThought, ...newThoughts.Today]
      updateThoughts(newThoughts)
      storeThoughts(newThoughts)

      setThought('')
      if (textarea) {
        textarea.style.height = '48px'
      }
    }
  }

  return (
    <textarea
      id='textarea-root'
      ref={textareaRef}
      value={thought}
      name='thought'
      placeholder='Let your thoughts out'
      autoFocus
      rows={1}
      spellCheck={false}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      style={{ height: '48px', overflowY: 'hidden' }}
    />
  )
}
