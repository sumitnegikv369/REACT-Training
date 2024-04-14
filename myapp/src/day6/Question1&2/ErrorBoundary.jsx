import React, { useEffect, useState } from 'react'

const ErrorBoundary = ({children}) => {
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
      try {
        // throw new Error('Simulated error: Component failed to load.');
        // uncomment the above line to observe error boundary use
      } catch (error) {
        setHasError(true);
      }
    }, [])

    if(hasError){
        return 'opps'
    }
    
  return (
    <>{children}</>
  )
}

export default ErrorBoundary