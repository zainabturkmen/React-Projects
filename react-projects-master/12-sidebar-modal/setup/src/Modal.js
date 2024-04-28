import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from "./context";

const Modal = () => {

  const {isModalOpen, closeModal} = useGlobalContext()

  return <div className={`${isModalOpen? } modal-overlay `}>
    <div className='modal-container'>
      <h3>modal content</h3>
      <button className='close-modal-btn'>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
