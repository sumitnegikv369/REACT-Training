import { useState } from 'react'
import './styles.css'

const UI = () => {
  const [value, setValue] = useState('')
  return (
    <div className="ques1">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter A Value"
      />
    </div>
  )
}

export default UI
