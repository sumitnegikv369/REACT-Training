import { createContext, useState } from 'react'
import Cart from './Cart'
import Products from './Products'
import './styles.css'

export const MyContext = createContext('')

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <MyContext.Provider value={{ cart, setCart }}>
        <Cart />
        <Products />
      </MyContext.Provider>
    </>
  )
}

export default App
