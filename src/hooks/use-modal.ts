import { useState } from 'react'

export function useModal() {
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return {
    showModal,
    closeModal,
    openModal,
    toggleModal,
  }
}
