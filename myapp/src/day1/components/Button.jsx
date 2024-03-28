import React from 'react'

const Button = ({ text = 'button', color = 'black' }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '1rem 2rem',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
      }}
    >
      {text}
    </button>
  )
}

export default Button
