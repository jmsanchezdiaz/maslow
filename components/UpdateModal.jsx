import React, { useState } from 'react'
import { useCompensations } from '../context/CompensationsContext'
import { Modal } from './index'

const UpdateModal = ({ compensation, isOpen, closeModal }) => {
  const [, { updateCompensation }] = useCompensations()
  const [currentValue, setCurrentValue] = useState(
    compensation.value.toString(),
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    updateCompensation(compensation.id, {
      ...compensation,
      value: currentValue,
    })
    closeModal()
  }

  return (
    <Modal isOpen={isOpen}>
      <h2 className="text-xl font-semibold">Actualizar Compensación</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="compensation">Valor:</label>
          <input
            onChange={({ target }) => setCurrentValue(target.value)}
            className="border-sky-400 border-b-4"
            type="number"
            name="compensation"
            min="0"
            id="compensation"
            value={currentValue}
          />
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
