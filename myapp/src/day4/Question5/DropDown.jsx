import React, { useState } from 'react'

const DropDown = () => {
    const [selectedValue, setSelectedValue] = useState("India");
  return (
   <div>
     <select value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
        <option value="Bhutan">Bhutan</option>
    </select>
    <p>
        {selectedValue}
    </p>
   </div>
  )
}

export default DropDown