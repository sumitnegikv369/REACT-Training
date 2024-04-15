import { Outlet, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './App'
import './styles.css'

function Authenticate() {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)
  return auth.username === 'sumit' && auth.password === '123' ? (
    <Outlet />
  ) : (
    <button onClick={() => navigate('/login')}>login page</button>
  )
}

export default Authenticate
