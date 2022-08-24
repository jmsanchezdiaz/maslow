import React from 'react'
import { useCompensations } from '../context/CompensationsContext'
import Modal from './Modal'

const ConfirmationModal = ({ isOpen, onClose }) => {
  const { resetCompensations } = useCompensations()
  const handleConfirm = () => {
    resetCompensations()
    onClose()
  }

  return (
    <Modal isOpen={isOpen}>
      <h2 className="text-xl font-bold">Formulario enviado con exito!</h2>
      <button onClick={handleConfirm} className="btn btn-success">
        Cerrar
      </button>
    </Modal>
  )
}

export default ConfirmationModal
