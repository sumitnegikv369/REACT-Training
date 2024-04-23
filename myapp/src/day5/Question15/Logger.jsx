import { useEffect, useState } from 'react'

const Logger = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        console.log(`${WrappedComponent.name} mounted`)
    }, [])

    useEffect(()=>{
      console.log(`${WrappedComponent.name} updated`)
      if(counter>=5){
        console.log(`${WrappedComponent.name} unmount`)
      }
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
