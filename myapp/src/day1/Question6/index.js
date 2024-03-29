import React from 'react'
import Button from './Button'
import './question6.css'

const Question6 = () => {
  return (
    <div className="buttons-container">
      <Button text={'Submit'} color="#1abc9c" />
      <Button text={'Click'} color="#e74c3c" />
      <Button />
    </div>
  )
}

export default Question6

// 6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.
