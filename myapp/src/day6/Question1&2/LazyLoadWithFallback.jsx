import React, { Suspense, lazy } from 'react'
import Loader from './Loader'
import ErrorBoundary from './ErrorBoundary'

const LazyLoadWithFallback = (importFunction) => {
  const LazyComponent = lazy(importFunction)

  return (props) => (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default LazyLoadWithFallback
