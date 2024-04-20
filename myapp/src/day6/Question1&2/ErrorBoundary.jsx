import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    try {
      // throw new Error('Simulated error: Component failed to load.');
      // uncomment the above line to observe error boundary use
    } catch (error) {
      setHasError(true)
    }
  }, [])

  if (hasError) {
    return (
      <>
        <div>
          <span>Opps</span>
          <Link to="/">Back To Home</Link>
        </div>
      </>
    )
  }

  return <>{children}</>
}

export default ErrorBoundary
