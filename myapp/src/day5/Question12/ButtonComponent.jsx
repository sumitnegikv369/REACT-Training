import React from 'react'

const ButtonComponent = ({ buttonName, buttonhandler, name }) => {
  return (
    <div>
      <button onClick={buttonhandler} className={`${name}`}>
        {buttonName}
      </button>
    </div>
  )
}

export default ButtonComponent
