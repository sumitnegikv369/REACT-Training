import { useEffect, useRef, useState } from 'react'

const Logger = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [counter, setCounter] = useState(0)

    const myRef = useRef(false)

    useEffect(() => {
      if (!myRef.current) {
        console.log(`${WrappedComponent.name} mounted`)
        myRef.current = true
      } else {
        console.log(`${WrappedComponent.name} updated`)
      }

      return () => console.log(`${WrappedComponent.name} unmount`)
    })

    return (
      <>
        {counter < 5 && (
          <WrappedComponent counter={counter} setCounter={setCounter} />
        )}
      </>
    )
  }
  return EnhancedComponent
}

export default Logger
