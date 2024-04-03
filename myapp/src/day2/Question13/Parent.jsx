import { useCallback, useState } from "react"
import Child from './Child'
import './styles.css'

const Parent = () => {
    const [count, setCount] = useState(0);
    const incrementHandler = useCallback(
      () => {
        setCount(count+1);
      },
      [count],
    )
    
  return (
    <div className="parent">
        <Child count={count} setCount={setCount} incrementHandler={incrementHandler} />
    </div>
  )
}

export default Parent