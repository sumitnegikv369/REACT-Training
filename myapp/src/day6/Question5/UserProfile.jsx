const UserProfile = ({ name, email, phoneNumber }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
    </div>
  )
}

export default UserProfile
