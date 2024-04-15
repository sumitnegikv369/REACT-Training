import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Profile from './Profile'
import './styles.css'

const App = () => {
  return (
    <div className='ques14'>
        <BrowserRouter>
        <Link to={"/"}>About</Link>
        <Link to={"/profile"}>Profile</Link>
        <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App