import React from 'react'
import Counter from './components/Counter'
import styles from './styles/question4.module.css'

const Question4 = () => {
  return (
    <div className={styles.counter}>
      <Counter />
    </div>
  )
}

export default Question4

// 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.
