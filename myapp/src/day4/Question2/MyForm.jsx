import React, { useState } from 'react'
import './styles.css'

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rememberMe: false,
    gender: '',
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
          />
        <label htmlFor="rememberMe">
          Remember me
        </label>
      </div>
      <div className="form-group-vertical">
        <label>Gender:</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleInputChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleInputChange}
        />
        <label htmlFor="female">Female</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default MyForm
