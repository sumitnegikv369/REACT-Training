import React from 'react'
import UserCard from './UserCard'
import './question2.css'

const index = () => {
  const userInfo = [
    {
      name: 'Jouhan',
      email: 'jouhan@gmail.com',
      avatarURL:
        'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
    },
    {
      name: 'David',
      email: 'david9@gmail.com',
      avatarURL: 'https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk',
    },
  ]
  return (
    <div className="cards-container">
      {userInfo.map((info) => (
        <UserCard info={info} />
      ))}
    </div>
  )
}

export default index

// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.
