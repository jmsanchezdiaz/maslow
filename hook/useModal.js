import { useState } from 'react'

const useModal = (init) => {
  const [isOpen, setIsOpen] = useState(init)

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  const toggle = () => setIsOpen(!isOpen)

  return { closeModal, openModal, toggle, isOpen }
}

export default useModal
