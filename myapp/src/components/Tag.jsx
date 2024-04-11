import React from 'react'

const Tag = ({ questionNumber }) => {
  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '1rem 2rem',
        width: 'fit-content',
        margin: '2rem auto 1rem',
        fontSize: '1rem',
        borderRadius: '8px',
      }}
    >
      Task {questionNumber}
    </div>
  )
}

export default Tag
