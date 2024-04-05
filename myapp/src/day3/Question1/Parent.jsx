import { createContext, useState } from 'react'
import Child from './Child';

export const AuthContext = createContext(false);

const Parent = () => {
    const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{isLogin, setIsLogin}}>
        <Child/>
    </AuthContext.Provider>
  )
}

export default Parent