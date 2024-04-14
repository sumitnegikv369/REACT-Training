import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et porttitor lectus.
        Phasellus vehicula consectetur augue, eget consequat sem ultricies sed.
      </p>
      <div className="nav-links">
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Home;
