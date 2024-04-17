import React, { useState } from 'react'
import Modal from './Modal'

const UI = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}>
        <div>Modal Content</div>
      </Modal>
    </div>
  )
}

export default UI
