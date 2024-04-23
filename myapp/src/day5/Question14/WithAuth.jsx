import React, { useState } from 'react'

const WithAuth = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return (
      <>
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        {isAuthenticated && <WrappedComponent />}
      </>
    )
  }

  return EnhancedComponent
}

export default WithAuth
