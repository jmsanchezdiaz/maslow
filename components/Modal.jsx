import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, isOpen }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (isBrowser && isOpen) {
    return createPortal(
      <div className="fixed z-10 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white space-y-3">
          {children}
        </div>
      </div>,
      document.getElementById('modal-root'),
    )
  }

  return null
}

export default Modal
