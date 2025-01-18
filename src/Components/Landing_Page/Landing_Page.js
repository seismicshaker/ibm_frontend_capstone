import React from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./LandingPage.css"; // Importing the CSS styles for the Landing_Page component

// Defining the Function component Landing_Page
const Landing_Page = () => {
  return (
    <section className="hero-section">
        <div>
          <div data-aos="fade-up" className="flex-hero">
              
              <h1>
                Staying Healthy<br/>
                <span className="text-gradient">
                  
                  Made Easy
                </span>
              </h1>
                <div className="blob-cont">
                    <div className="blue blob"></div>
                </div>
                <div className="blob-cont">
                    <div className="blue1 blob"></div>
                </div>
              <h4>
            Empowering smarter healthcare choices. Our health portal simplifies finding the right doctor for you. Browse doctor profiles, read patient reviews, and conveniently book appointments. We connect you with qualified professionals while fostering open communication through ratings. Our mission is to streamline your healthcare journey and ensure a positive patient experience.
              </h4>
              <Link to='/service'> {/* Creating a hyperlink to jump to the 'services' section */}
              <button className="button">Get Started</button> {/* Creating a button with class name 'button' */}
            </Link>
                
          </div>
  
        </div>
      </section>
  );
};

export default Landing_Page; // Exporting the Landing_Page component to be used in other parts of the application