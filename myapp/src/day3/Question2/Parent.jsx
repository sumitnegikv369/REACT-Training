import { createContext, useState } from 'react'
import Child from './Child'
import './styles.css'

export const AuthContext2 = createContext(false)

const initialPreference = {
  theme: 'dark',
}

export const ThemeContext = createContext(initialPreference)
const Parent = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [prefernce, setPrefernce] = useState(initialPreference)

  return (
    <AuthContext2.Provider value={{ isLogin, setIsLogin }}>
      <ThemeContext.Provider value={{ prefernce, setPrefernce }}>
        <Child />
      </ThemeContext.Provider>
    </AuthContext2.Provider>
  )
}

export default Parent
