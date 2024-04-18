import React, { useState } from 'react'
import './styles.css'

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(null)
  const [farhenheit, setFahrenheit] = useState(null)

  const handleCelsiusChange = (event) => {
    const newCelsius = parseFloat(event.target.value)
    if (!isNaN(newCelsius)) {
      // Check for NaN
      setCelsius(newCelsius)
      setFahrenheit((newCelsius * 1.8 + 32).toFixed(2))
    } else {
      setCelsius('')
    }
  }

  const handleFahrenheitChange = (event) => {
    const newFahrenheit = parseFloat(event.target.value)
    if (!isNaN(newFahrenheit)) {
      setFahrenheit(newFahrenheit)
      setCelsius((((newFahrenheit - 32) * 5) / 9).toFixed(2))
    } else {
      setFahrenheit('')
    }
  }

  return (
    <div className="ques8">
      <input
        type="text"
        placeholder="Enter Temperature in Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <input
        type="text"
        placeholder="Enter Temperature in Fahrenheit"
        value={farhenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  )
}

export default TemperatureConverter
