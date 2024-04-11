import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Authenticate from './Authenticate'
import Dashboard from './Dashboard/Dashboard'
import Profile from './Dashboard/Profile'
import Settings from './Dashboard/Settings'
import Login from './Login'
import './styles.css'

export const MyContext = createContext()

const Wrapper = () => {
  const [auth, setAuth] = useState({ username: '', password: '' })

  return (
    <MyContext.Provider value={{ auth, setAuth }}>
      <Router>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route element={<Authenticate />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route element={<Profile />} path="profile" />
              <Route element={<Settings />} path="settings" />
            </Route>
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </MyContext.Provider>
  )
}

export default Wrapper
