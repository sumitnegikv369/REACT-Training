import { useContext, useState } from 'react'
import { AuthContext } from './App'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { auth, setAuth, setIsLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setAuth({ ...auth, username: username, password: password })
    setIsLogin(true)
    navigate('/')
  }

  return (
    <div className="ques4">
      <h1>Enter - Username: sumit | Password: 123</h1>
      <p>Login Details</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
