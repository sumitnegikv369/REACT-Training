import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev)=>prev+1)}>Increment</button>
        <button onClick={() => setCount((prev)=>prev-1)}>Decrement</button>
    </div>
  )
}

export default Counter