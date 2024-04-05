import React, { useContext, useState } from 'react'
import { AuthContext2, ThemeContext } from './Parent'

const Child = () => {
  const { isLogin, setIsLogin } = useContext(AuthContext2)
  const { prefernce, setPrefernce } = useContext(ThemeContext)
  const [username, setUsername] = useState('')
  return (
    <div className='ques2'>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={isLogin}
      />

      <button
        disabled={username.length > 0 ? false : true}
        onClick={() => {
          if (isLogin) {
            setUsername('')
          }
          setIsLogin(!isLogin)
        }}>
        {isLogin ? 'Logout' : 'login'}
      </button>
      <p>{isLogin ? `Welcome, ${username}!` : 'Please log in'}</p>
      {isLogin && (
        <div className='theme'>
          <button onClick={()=>setPrefernce({...prefernce, theme: 'dark'})}>Dark Mode</button>
          <button onClick={()=>setPrefernce({...prefernce, theme: 'light'})}>Light Mode</button>
        </div>
      )}
      <div>
        <p className={prefernce.theme}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quae neque error id, impedit incidunt odit veritatis labore maiores
          dolor tenetur tempora sed iusto assumenda molestiae delectus maxime,
          excepturi a!
        </p>
      </div>
    </div>
  )
}

export default Child
