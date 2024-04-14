import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import './styles.css'
import LazyLoadWithFallback from './LazyLoadWithFallback';
const LazyLoadAbout = LazyLoadWithFallback(()=>import('./About'))
const LazyLoadServices = LazyLoadWithFallback(()=>import('./Services'))

// Use network throttling in Chrome DevTools to observe lazy loading in action

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<LazyLoadServices/>}/>
            <Route path='/about' element={<LazyLoadAbout/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App