import { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import './styles.css'

const Button = () => {
  const [count, setCount] = useState(0)

  const increasecount = () => {
    setCount(count + 1)
  }
  const decreasecount = () => {
    setCount(count - 1)
  }
  const multiplycount = () => {
    setCount(count * 2)
  }
  return (
    <div className="ques12">
      <p> {count}</p>
      <ButtonComponent
        buttonName="Primary(to increase current count by 1)"
        buttonhandler={increasecount}
        name="primary"
      />
      <ButtonComponent
        buttonName="Secondary(to decrease current count by 1)"
        buttonhandler={decreasecount}
        name="secondary"
      />
      <ButtonComponent
        buttonName="Danger(to multiply current count by 2)"
        buttonhandler={multiplycount}
        name="danger"
      />
    </div>
  )
}

export default Button
