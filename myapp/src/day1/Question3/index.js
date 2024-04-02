import React from 'react'
import Weather from './Weather'
import './styles.css'

const index = () => {
  return (
    <div className="weather">
      <Weather temperature={26} />
      <Weather temperature={20} />
      <Weather temperature={8} />
    </div>
  )
}

export default index

// 3.Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.
