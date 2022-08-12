import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import UpdateModal from './UpdateModal'

const Card = ({ compensation, onEdit }) => {
  const { title, subtitle, multiplier, value, minValue, maxValue } =
    compensation
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <section className="shadow-lg p-4 gap-2 rounded-md flex flex-col justify-between ">
      <div className="flex justify-between align-middle">
        <div>
          <h2 className="font-semibold text-lg">{title.toUpperCase()}</h2>
          <h4 className="opacity-60 text-xs">Mensual</h4>
          <h4 className="opacity-60 text-xs">ARS</h4>
          {subtitle && <h4 className="opacity-60 text-xs">{subtitle}</h4>}
        </div>
        <span className="font-semibold">{multiplier}x</span>
      </div>
      <input min={minValue} max={maxValue} value={value} type="range" />
      <button
        className="w-5 h-5 self-end rounded-md"
        aria-label="edit slider button"
        onClick={openModal}
      >
        <img alt="pencil" src="/icons/pencil.svg" />
      </button>
      <UpdateModal
        compensation={compensation}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    </section>
  )
}

export default Card
