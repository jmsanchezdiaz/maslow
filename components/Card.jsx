import React from 'react'
import useModal from '../hook/useModal'
import { UpdateModal } from './index'

const Card = ({ compensation }) => {
  const { title, subtitle, multiplier, value, minValue, maxValue } =
    compensation
  const { isOpen, closeModal, openModal } = useModal(false)

  return (
    <section className="shadow-lg p-8 gap-2 rounded-md flex flex-col justify-between ">
      <div className="flex justify-between align-middle">
        <div>
          <h2 className="font-semibold text-lg">{title.toUpperCase()}</h2>
          <h4 className="opacity-60 text-xs">Mensual</h4>
          <h4 className="opacity-60 text-xs">ARS</h4>
          {subtitle && <h4 className="opacity-60 text-xs">{subtitle}</h4>}
        </div>
        <span className="font-semibold">{multiplier}x</span>
      </div>
      <div className="flex gap-2 align-middle justify-between">
        <span className="opacity-60 text-sm">{minValue}</span>
        <input
          className="flex-grow"
          readOnly
          min={minValue}
          max={maxValue}
          value={value}
          type="range"
        />
        <span className="opacity-60 text-sm">{maxValue}</span>
      </div>
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
