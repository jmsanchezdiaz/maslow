import React, { useState } from 'react'
import { useCompensations } from '../context/CompensationsContext'
import { Modal } from './index'

const UpdateModal = ({ compensation, isOpen, closeModal }) => {
  const { updateCompensation } = useCompensations()
  const [errorMessage, setErrorMessage] = useState('')
  const [currentValue, setCurrentValue] = useState(
    compensation.value.toString(),
  )

  const handleInputChange = ({ target }) => {
    setCurrentValue(target.value)
    setErrorMessage('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const currentValueInt = parseInt(currentValue)

    if (
      currentValueInt < compensation.minValue ||
      currentValueInt > compensation.maxValue
    )
      return setErrorMessage('El valor debe estar entre el mínimo y el máximo')

    updateCompensation(compensation.id, currentValueInt)
    event.target.reset()
    closeModal()
  }

  return (
    <Modal isOpen={isOpen}>
      <h2 className="text-xl font-semibold">
        Actualizar Compensación - {compensation.title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="compensation">Valor:</label>
          <input
            onChange={handleInputChange}
            className="border-sky-400 border-b-4"
            type="number"
            name="compensation"
            id="compensation"
            value={currentValue}
          />
          <p className="text-red-500">{errorMessage}</p>
        </div>
        <div className="space-x-2">
          <button type="submit" className="btn btn-success">
            Confirmar
          </button>
          <button onClick={closeModal} type="button" className="btn btn-danger">
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default UpdateModal
