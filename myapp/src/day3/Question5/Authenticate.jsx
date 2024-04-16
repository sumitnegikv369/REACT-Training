import { Outlet, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { MyContext } from './Wrapper'
import './styles.css'

function Authenticate() {
  const navigate = useNavigate()
  const { auth } = useContext(MyContext)
  return auth.username === 'sumit' && auth.password === '123' ? (
    <Outlet />
  ) : (
    <button className="button" onClick={() => navigate('/login')}>
      login page
    </button>
  )
}

export default Authenticate
