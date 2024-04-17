import React, { useState } from 'react'
import './styles.css';

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='ques3'>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev)=>prev+1)}>Increment</button>
        <button onClick={() => setCount((prev)=>prev-1)}>Decrement</button>
    </div>
  )
}

export default Counter