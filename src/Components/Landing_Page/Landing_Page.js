import React from "react";
import "./Landing_Page.css";

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
              <a href="/Sign_Up">
                <button className="button">Get Started</button>
              </a>
                
          </div>
  
        </div>
      </section>
  );
};

export default Landing_Page;