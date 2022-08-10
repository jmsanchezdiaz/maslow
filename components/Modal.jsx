import React from 'react'

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white space-y-3">
        {children}
      </div>
    </div>
  )
}

export default Modal
