import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCounter = (action) => {
        if(action === 'inc') setCount(count+1);
        else setCount(count-1);
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>handleCounter('inc')}>increment</button>
        <button onClick={()=>handleCounter('dec')}>decrement</button>
    </div>
  )
}

export default Counter