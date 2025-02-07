import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          We are a team of passionate individuals dedicated to creating
          innovative solutions.
        </p>
        <p>
          Our mission is to make technology accessible and enjoyable for
          everyone.
        </p>
      </div>
      <Link to="/">Back To Home</Link>
    </div>
  )
}

export default About
