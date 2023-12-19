import { useRef, useState } from 'react'
import { type Thought } from '../types'

interface Props {
  createNewThought: (thought: string) => Thought
  storeNewThought: (thought: Thought) => void
}

export function Form({ createNewThought, storeNewThought }: Props) {
  const [thought, setThought] = useState('')
  const [shiftPressed, setShiftPressed] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setThought(event.target.value)
    const textarea = textareaRef.current

    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const onKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = event
    if (key === 'Shift') setShiftPressed(false)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = event
    const isEnter = key === 'Enter'
    const isShift = key === 'Shift'
    const isEmpty = thought.trim() === ''
    const textarea = textareaRef.current

    if (isEmpty) return
    if (isShift) setShiftPressed(true)

    if (isEnter && !shiftPressed) {
      event.preventDefault()

      const newThought = createNewThought(thought)
      storeNewThought(newThought)

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
      placeholder="What's on your mind?"
      autoFocus
      rows={1}
      spellCheck={false}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      style={{ height: 'auto', overflowY: 'hidden' }}
    />
  )
}
