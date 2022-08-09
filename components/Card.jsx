import React from 'react'

const Card = ({ title, subtitle, multiplier, value, minValue, maxValue }) => {
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
      >
        <img alt="pencil" src="/icons/pencil.svg" />
      </button>
    </section>
  )
}

export default Card
