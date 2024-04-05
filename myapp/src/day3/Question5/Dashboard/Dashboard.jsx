import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="ques5">
      <nav className="nav">
      <Link to="/dashboard/profile">Profile</Link>

<Link to="/dashboard/settings">Settings</Link>
      </nav>
      <h1>Dash Board</h1>
      <Outlet/>
    </div>
  )
}

export default Dashboard
