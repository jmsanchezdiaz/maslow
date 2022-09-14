import React from 'react'
import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'
import useModal from '../hook/useModal'
import { UpdateModal } from './index'
import { bgColors } from '../context/CompensationsContext'

const Card = ({ compensation }) => {
  const { title, subtitle, multiplier, value, minValue, maxValue } =
    compensation
  const { isOpen, closeModal, openModal } = useModal(false)
  const midValue = (maxValue + minValue) / 2
  const percentage = ((value - minValue) / (maxValue - minValue)) * 100

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
      <div className=" mb-6 p-2">
        <ProgressBar
          filledBackground={bgColors[title].hexa}
          percent={percentage}
        >
          <Step>
            {({ accomplished }) => (
              <div className="flex justify-center">
                <div
                  className={`rotate-45 w-4 h-4 ${
                    accomplished ? bgColors[title].utility : 'bg-gray-500'
                  }`}
                ></div>
                <span className="absolute opacity-30 top-6  rotate-0">
                  {minValue}
                </span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="flex justify-center">
                <div
                  className={`rotate-45 w-4 h-4 ${
                    accomplished ? bgColors[title].utility : 'bg-gray-500'
                  }`}
                ></div>
                <span className="absolute opacity-30 top-6  rotate-0">
                  {midValue}
                </span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div className="flex justify-center">
                <div
                  className={`rotate-45 w-4 h-4 ${
                    accomplished ? bgColors[title].utility : 'bg-gray-500'
                  }`}
                ></div>
                <span className="absolute opacity-30 top-6 rotate-0">
                  {maxValue}
                </span>
              </div>
            )}
          </Step>
        </ProgressBar>
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
