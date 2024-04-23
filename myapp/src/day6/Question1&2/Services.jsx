import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <ul className="services-list">
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
      <Link to="/">Back To Home</Link>
    </div>
  )
}

export default Services
