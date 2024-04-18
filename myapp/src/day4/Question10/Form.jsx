import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  })

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.username) {
      errors.username = 'user name is required'
    }
    if (!formData.email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="username"
        name="username"
        label="User Name"
        variant="outlined"
        fullWidth
        value={formData.username}
        onChange={handleInputChange}
        error={formErrors.username}
        helperText={formErrors.username}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={formData.email}
        onChange={handleInputChange}
        error={formErrors.email}
        helperText={formErrors.email}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  )
}

export default Form
