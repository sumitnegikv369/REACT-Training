import { useState } from 'react'
import './styles.css'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <p>Count {count}</p>
      <div className="buttons">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
