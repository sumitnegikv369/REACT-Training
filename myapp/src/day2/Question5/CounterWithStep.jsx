import { useState } from 'react'
import './styles.css'

const CounterWithStep = () => {
  const [value, setValue] = useState(0)
  const [steps, setSteps] = useState(1)
  return (
    <div className="step-counter">
      <input
        type="text"
        value={steps}
        placeholder="Enter Number Of Steps"
        onChange={(e) => setSteps(parseInt(e.target.value))}
      />
      <p>{value}</p>
      <button onClick={() => setValue(value + steps)}>Increment</button>
      <button onClick={() => setValue(value - steps)}>Decrement</button>
    </div>
  )
}

export default CounterWithStep
