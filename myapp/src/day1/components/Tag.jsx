import React from 'react'

const Tag = ({ questionNumber }) => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '1rem',
      }}
    >
      Task {questionNumber}
    </div>
  )
}

export default Tag
