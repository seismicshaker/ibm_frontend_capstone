import React from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./Navbar.css"; // Importing the CSS styles for the Navbar component

// Defining the Function component Navbar
const Navbar = () => {
  return (
    <nav>
      {/* Navigation logo section */}
      <div className="nav__logo">
        {/* Link to the home page */}
        <i className="fa fa-heart"></i>
        <a href="/"> StayHealthy </a>
        {/* A span element for styling purposes */}
      </div>
      {/* Navigation icon section with an onClick event listener */}
      <div className="nav__icon" onClick="{handleClick}">
        {/* Font Awesome icon for bars (hamburger menu) */}
        <i className="fa fa-times fa fa-bars"></i>
      </div>

      {/* Unordered list for navigation links with 'active' className */}
      <ul className="nav__links active">
        {/* List item for the 'Home' link */}
        <li className="link">
          <Link to='/'>Home</Link> 
        </li>
        {/* List item for the 'Appointments' link */}
        <li className="link">
          <Link to='/Appointments'>Appointments</Link>
        </li>
        {/* List item for the 'Sign Up' link with a button */}
        <li className="link">
          <Link to='/SignUp'>
            <button className="btn1">Sign Up</button>
          </Link>
        </li>
        {/* List item for the 'Login' link with a button */}
        <li className="link">
        <Link to='/Login'>
            <button className="btn1">Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component to be used in other parts of the application