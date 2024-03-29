import React from 'react'

const UserCard = (props) => {
  const { name, email, avatarURL } = props.info
  return (
    <div className="card">
      <img className="avatar" src={avatarURL} alt={`${name} avatar`} />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default UserCard
