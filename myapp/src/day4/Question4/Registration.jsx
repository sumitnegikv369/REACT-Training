import React, { useState } from 'react'
import './styles.css'
import { intialDataQues4 } from '../utils/content'

const Registration = () => {
  const [userInfo, setUserInfo] = useState(intialDataQues4)
  const submitForm = (e) => {
    e.preventDefault()
    if (validate()) {
      alert('submitted successfully')
      setUserInfo(intialDataQues4)
    }
  }
  const validate = () => {
    const { email, password, confirmPassword } = userInfo

    if (
      email.length === 0 &&
      password.length === 0 &&
      confirmPassword.length === 0
    ) {
      alert('fields cannot be empty')
      return false
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert('invaild email address')
      return false
    } else if (password !== confirmPassword) {
      alert("password doesn't match re enter the password")
      return false
    } else {
      return true
    }
  }
  return (
    <form onSubmit={(e) => submitForm(e)} className="registration">
      <input
        type="text"
        value={userInfo.email}
        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        placeholder="Enter Your Email"
      />
      <input
        type="password"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        placeholder="Enter Your Password"
      />
      <input
        type="password"
        value={userInfo.confirmPassword}
        onChange={(e) =>
          setUserInfo({ ...userInfo, confirmPassword: e.target.value })
        }
        placeholder="Re-Enter Your Password For Confirmation"
      />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Registration
