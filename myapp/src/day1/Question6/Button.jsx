import React from 'react'
import styles from './question6.module.css'

const Button = ({ text = 'button', color = 'black' }) => {
  return (
    <button
      className={styles}
      style={{
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  )
}

export default Button
