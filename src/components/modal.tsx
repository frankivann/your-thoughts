import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CloseIcon } from './icons'

interface Props {
  showModal: boolean
  closeModal: () => void
  onAccept: () => void
}

export function Modal({ showModal, closeModal, onAccept }: Props) {
  const modalRef = useRef<HTMLDialogElement | null>(null)
  const [animation, setAnimation] = useState(false)

  useEffect(
    function () {
      if (!animation) return
      const main = window.document.querySelector('main')

      if (!main) return
      main.classList.add('fade-out')

      const handleAnimationEnd = (event: AnimationEvent) => {
        const { animationName } = event
        if (animationName !== 'fadeOut') return

        main.classList.remove('fade-out')
        setAnimation(false)
      }

      main.addEventListener('animationend', handleAnimationEnd)

      return () => {
        main.removeEventListener('animationend', handleAnimationEnd)
      }
    },
    [animation]
  )

  useEffect(
    function () {
      const modal = modalRef.current
      if (!modal) return

      if (showModal) modal.showModal()
      else modal.close()
    },
    [showModal]
  )

  const handleOnAcceptAndCloseModal = () => {
    setAnimation(true)
    closeModal()
    setTimeout(() => onAccept(), 300)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    const { key } = event
    const isEscape = key === 'Escape'
    if (isEscape) closeModal()
  }

  const handleClickOutside = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialogDimensions = event.currentTarget.getBoundingClientRect()

    const isClickOutside =
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom ||
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right

    if (isClickOutside) closeModal()
  }

  return (
    <>
      {showModal &&
        createPortal(
          <dialog
            className='modal'
            ref={modalRef}
            onClick={handleClickOutside}
            onKeyDown={onKeyDown}
          >
            <section className='modal-main'>
              <div className='modal-content'>
                <p>¿Are you sure?</p>
                <p>This will clear all your thoughts</p>
              </div>

              <button
                className='modal-accept'
                onClick={handleOnAcceptAndCloseModal}
              >
                clear
              </button>
            </section>
            <button className='modal-close' onClick={closeModal}>
              <CloseIcon />
            </button>
          </dialog>,
          window.document.getElementById('portal') as HTMLElement
        )}
    </>
  )
}
