import React from 'react'
import styles from '../styles/question2.module.css'

const UserCard = (props) => {
  const { name, email, avatarURL } = props
  return (
    <div className={styles.card}>
      <img className={styles.avatar} src={avatarURL} alt={`${name} avatar`} />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default UserCard
