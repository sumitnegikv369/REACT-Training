import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import About from './About'
import './styles.css'

const Wrapper = () => {
  return (
    <Router>
      <nav className="ques3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/random">Random</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default Wrapper
