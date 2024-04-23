import { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import './styles.css'

const Button = () => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }
  const decreaseCount = () => {
    setCount(count - 1)
  }
  const multiplyCount = () => {
    setCount(count * 2)
  }
  return (
    <div className="ques12">
      <p> {count}</p>
      <ButtonComponent
        buttonName="Primary ( to increase current count by 1 )"
        buttonhandler={increaseCount}
        name="primary"
      />
      <ButtonComponent
        buttonName="Secondary ( to decrease current count by 1 )"
        buttonhandler={decreaseCount}
        name="secondary"
      />
      <ButtonComponent
        buttonName="Danger ( to multiply current count by 2 )"
        buttonhandler={multiplyCount}
        name="danger"
      />
    </div>
  )
}

export default Button
