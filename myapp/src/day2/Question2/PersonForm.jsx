import { useState } from 'react'
import './styles.css'

const PersonForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    age: '',
  })

  const userUpdate = (value, key) => {
    const newInfo = { ...userInfo }
    newInfo[key] = value
    setUserInfo({ ...newInfo })
  }

  return (
    <>
      <form className="form">
        <input
          type="text"
          value={userInfo.firstName}
          placeholder="Enter Your Firstname"
          onChange={(e) => userUpdate(e.target.value, 'firstName')}
        />
        <p>{userInfo.firstName}</p>
        <input
          type="text"
          value={userInfo.lastName}
          placeholder="Enter Your Lastname"
          onChange={(e) => userUpdate(e.target.value, 'lastName')}
        />
        <p>{userInfo.lastName}</p>
        <input
          type="text"
          value={userInfo.age}
          placeholder="Enter Your Age"
          onChange={(e) => userUpdate(e.target.value, 'age')}
        />
        <p>{userInfo.age}</p>
      </form>
    </>
  )
}

export default PersonForm
