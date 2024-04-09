import { useState } from 'react'
import './styles.css'

const CounterWithStep = () => {
  const [value, setValue] = useState(0)
  const [steps, setSteps] = useState(1)
  return (
    <div className="step-counter">
      <input
        type="number"
        value={steps}
        defaultValue={1}
        placeholder='1'
        onChange={(e) => {
          const inputValue = e.target.value;
    if (!isNaN(inputValue)) {
          setSteps(parseInt(inputValue))}
        }}
      />
      <p>{value}</p>
      <button onClick={() => setValue(value + steps)}>Increment</button>
      <button onClick={() => setValue(value - steps)}>Decrement</button>
    </div>
  )
}

export default CounterWithStep
