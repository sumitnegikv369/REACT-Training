import React, { useState } from 'react'
import UI from './UI'
import './styles.css'

const Wrapper = () => {
  const [value, setValue] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)

  return (
    <div className="ques3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Show to Display UI component"
      />
      <button onClick={() => setIsSubmit(!isSubmit)}>
        {isSubmit ? 'Hide' : 'Show'}
      </button>
      {isSubmit && value === 'show' && <UI />}
    </div>
  )
}

export default Wrapper
