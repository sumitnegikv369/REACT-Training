import React from 'react'
import Counter from './Counter'
import styles from './question4.module.css'

const index = () => {
  return (
    <div className={styles.counter}>
      <Counter />
    </div>
  )
}

export default index

// 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.
