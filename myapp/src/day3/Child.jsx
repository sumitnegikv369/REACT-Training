import React, { useContext } from 'react'
import { AuthContext, ThemeContext } from './App'
import { Link, Outlet } from 'react-router-dom'

const Child = () => {
  const { isLogin, auth } = useContext(AuthContext)
  const { prefernce, setPrefernce } = useContext(ThemeContext)

  return (
    <div className="app">
      <p>{isLogin ? `Welcome, ${auth.username}!` : 'Please log in'}</p>
      {isLogin && (
        <>
          <nav className="ques3">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/random">Random</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard/profile">Profile</Link>
            <Link to="/dashboard/settings">Settings</Link>
          </nav>
          <div className="theme">
            <button
              onClick={() => setPrefernce({ ...prefernce, theme: 'dark' })}
            >
              Dark Mode
            </button>
            <button
              onClick={() => setPrefernce({ ...prefernce, theme: 'light' })}
            >
              Light Mode
            </button>
          </div>
          <div>
            <Outlet />
            <p className={prefernce.theme}>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae quae neque error id, impedit incidunt odit veritatis
              labore maiores dolor tenetur tempora sed iusto assumenda molestiae
              delectus maxime, excepturi a!
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Child
