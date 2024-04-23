import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles.css'
import ErrorBoundary from './ErrorBoundary'
import LazyLoadWithFallback from './LazyLoadWithFallback'
const LazyLoadHome = LazyLoadWithFallback(() => import('./Home'))
const LazyLoadAbout = LazyLoadWithFallback(() => import('./About'))
const LazyLoadServices = LazyLoadWithFallback(() => import('./Services'))

// Use network throttling in Chrome DevTools to observe lazy loading in action

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LazyLoadHome />} />
            <Route path="/services" element={<LazyLoadServices />} />
            <Route path="/about" element={<LazyLoadAbout />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
