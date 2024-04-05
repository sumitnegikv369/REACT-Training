import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'
import { createContext, useState } from 'react'
import Authenticate from './Authenticate'

export const MyContext = createContext()
function Wrapper() {
  const [auth, setAuth] = useState({ username: '', password: '' })
  return (
    <MyContext.Provider value={{ auth, setAuth }}>
      <Router>
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route element={<Authenticate />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<About />} path="/about" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </MyContext.Provider>
  )
}

export default Wrapper
