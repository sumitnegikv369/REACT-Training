import { Link, Outlet, useNavigate } from 'react-router-dom'
import '../styles.css'
import { useEffect } from 'react'

const Dashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    // The useEffect hook is used here to ensure that the home page can be shown in cases where there might not be a similar route like the about.page in another assignment question.
    const timer = setTimeout(() => {
      navigate('/')
    }, 5000)
    return () => clearTimeout(timer)
  })
  return (
    <div className="ques5">
      <nav className="nav">
        <Link to="/dashboard/profile">Profile</Link>

        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <h2>Dash Board</h2>
      <Outlet />
    </div>
  )
}

export default Dashboard
