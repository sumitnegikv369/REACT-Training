import React from 'react'
import UserProfile from './UserProfile'

const index = () => {
  return (
    <div>
      <UserProfile
        name="Sumit"
        email="kv369@gmail.com"
        phoneNumber="9368400015"
      />
    </div>
  )
}

export default index

// 5.Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.
