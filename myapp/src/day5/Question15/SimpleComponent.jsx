import { useEffect } from 'react'
import Logger from './Logger'
import './styles.css'

const SimpleComponent = ({ counter, setCounter }) => {
  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  useEffect(() => {
    console.log('mounted')
    console.log('updated')
    return () => {
      console.log('unmount')
    }
  }, [counter])

  return (
    <div className='ques15'>
      <button onClick={handleIncrement}>increment</button>
      {counter}
    </div>
  )
}

export default Logger(SimpleComponent)
