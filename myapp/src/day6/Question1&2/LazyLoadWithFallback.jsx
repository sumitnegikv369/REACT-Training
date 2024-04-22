import React, { Suspense, lazy } from 'react'
import Loader from './Loader'

const LazyLoadWithFallback = (importFunction) => {
  const LazyComponent = lazy(importFunction)

  return (props) => (
      <Suspense fallback={<Loader />}>
        <LazyComponent {...props} />
      </Suspense>
  )
}

export default LazyLoadWithFallback
