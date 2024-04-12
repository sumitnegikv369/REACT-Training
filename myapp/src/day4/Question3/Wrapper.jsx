import React, { useState } from 'react'
import UI from './UI'
import './styles.css'

const Wrapper = () => {
    const [value, setValue] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

  return (
    <div className='ques3'>
                {
            isSubmit && value === "show" && (
                <UI/>
            )
        }
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter Show to Display UI component' />
        <button onClick={()=>setIsSubmit(!isSubmit)}>{isSubmit?'Hide':'Show'}</button>
    </div>
  )
}

export default Wrapper