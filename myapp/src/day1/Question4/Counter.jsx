import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count {count}</p>
      <div>
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
