import React, { useState } from 'react'

const TemperatureConverter = () => {
  const [temp, setTemp] = useState({
    celsius: null,
    farhenheit: null,
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Temperature in Celsius"
        value={temp.celsius}
        onChange={(e) => {setTemp({ ...temp, celsius: parseInt(e.target.value), farhenheit: ((temp.celsius * 1.8) + 32).toFixed(2)})}}
        />
      <input
        type="text"
        placeholder="Enter Temperature in Fahrenheit"
        value={temp.farhenheit}
        onChange={(e) => setTemp({ ...temp, farhenheit: parseInt(e.target.value), celsius: ((temp.farhenheit - 32) * 5/9).toFixed(2),
        })}
      />
    </div>
  )
}

export default TemperatureConverter

