import React from 'react'
import Weather from './components/Weather'
import styles from './styles/question3.module.css'

const Question3 = () => {
  return (
    <div className={styles.weather}>
      <Weather temperature={26} />
      <Weather temperature={20} />
      <Weather temperature={8} />
    </div>
  )
}

export default Question3

// 3.Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.
