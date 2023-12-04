import { useEffect, useRef, useState } from 'react'
import { type EmojiPickerSelect } from '../types'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface Props {
  setThought: (value: React.SetStateAction<string>) => void
  textareaRef: HTMLTextAreaElement | null
}

export function EmojiPicker({ setThought, textareaRef }: Props) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(
    function () {
      if (!showEmojiPicker) return

      const handleKeydown = (event: KeyboardEvent) => {
        const { key } = event
        if (key === 'Escape') setShowEmojiPicker(false)

        if (textareaRef) {
          textareaRef.focus()
        }
      }

      window.addEventListener('keydown', handleKeydown)
      return () => window.removeEventListener('keydown', handleKeydown)
    },
    [showEmojiPicker, textareaRef]
  )

  const handleClick = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const onEmojiSelect = (emojiSelected: EmojiPickerSelect) => {
    const { native: emoji } = emojiSelected
    setThought(prevThought => prevThought + emoji)
  }

  const handleClickOutside = (data: PointerEvent) => {
    const { target } = data
    const isOutside = target !== buttonRef.current

    if (isOutside) setShowEmojiPicker(false)
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className='emoji-picker-button'
      >
        click
      </button>
      {showEmojiPicker && (
        <div className='emoji-picker-wrapper'>
          <Picker
            data={data}
            emojiSize={20}
            previewPosition='none'
            skinTonePosition='none'
            onEmojiSelect={onEmojiSelect}
            onClickOutside={handleClickOutside}
          />
        </div>
      )}
    </>
  )
}
