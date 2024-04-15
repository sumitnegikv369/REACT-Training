import React, { useContext, useState } from 'react'
import { AuthContext } from './Parent'
import './styles.css'

const Child = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  return (
    <div className="ques1">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLogin}
        placeholder="Enter username"
        className={`${isLogin ? 'disabledInput' : ''}`}
      />
      <button
        disabled={username.length > 0 ? false : true}
        onClick={() => {
          if (isLogin) {
            setUsername('')
          }
          setIsLogin(!isLogin)
        }}
      >
        {isLogin ? 'Logout' : 'login'}
      </button>
      <p>{isLogin ? `Welcome, ${username}!` : 'Please log in'}</p>
    </div>
  )
}

export default Child
