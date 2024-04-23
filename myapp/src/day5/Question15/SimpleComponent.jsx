import Logger from './Logger'
import './styles.css'

const SimpleComponent = ({ counter, setCounter }) => {
  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="ques15">
      <button onClick={handleIncrement}>increment</button>
      {counter}
    </div>
  )
}

export default Logger(SimpleComponent)
