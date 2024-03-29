import React from 'react'

const Button = ({ text = 'button', color = 'black' }) => {
  return (
    <button
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  )
}

export default Button
