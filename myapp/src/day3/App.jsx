import { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import About from './About'
import Child from './Child'
import './styles.css'
import Authenticate from './Authenticate'
import Login from './Login'
import Dashboard from './Dashboard/Dashboard'
import Profile from './Dashboard/Profile'
import Settings from './Dashboard/Settings'
import ProductDetail from './ProductDetail'

export const AuthContext = createContext(false)
const initialPreference = {
  theme: 'dark',
}
export const ProductContext = createContext()

export const ThemeContext = createContext(initialPreference)
const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [prefernce, setPrefernce] = useState(initialPreference)
  const [auth, setAuth] = useState({ username: '', password: '' })
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: 49.99,
      details: 'All details about ProductA',
    },
    {
      id: 2,
      name: 'Product B',
      price: 29.99,
      details: 'All details about ProductB',
    },
  ]
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, auth, setAuth }}>
      <ThemeContext.Provider value={{ prefernce, setPrefernce }}>
        <ProductContext.Provider value={{ products }}>
          <Router>
            <Routes>
              <Route element={<Authenticate />}>
                <Route element={<Child />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/dashboard" element={<Dashboard />}>
                    <Route element={<Profile />} path="profile" />
                    <Route element={<Settings />} path="settings" />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Route>
              <Route element={<Login />} path="/login" />
            </Routes>
          </Router>
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
