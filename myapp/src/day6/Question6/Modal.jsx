import React from 'react'
import './styles.css'
const Modal = ({ isOpen, onClose, onOpen, children }) => {
  return (
    <div onBlur={onClose} className="ques6">
      <div className="modal-content">
        {!isOpen && (
          <span onClick={onOpen} data-testid="menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </span>
        )}
        {isOpen && (
          <>
            <span onClick={onClose}>&times;</span>
            {children}
          </>
        )}
      </div>
    </div>
  )
}

export default Modal
