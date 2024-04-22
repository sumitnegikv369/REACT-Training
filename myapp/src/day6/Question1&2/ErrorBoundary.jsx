import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = () => {
      setHasError(true);
      window.document.getElementById('webpack-dev-server-client-overlay').style.display = "none";
    };

    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []); 

  if (hasError) {
    return (
      <>
        <div>
          <span>Opps</span>
        </div>
      </>
    );
  }else{
    return children;
  }

};

export default ErrorBoundary;
