import React from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./Login.css"; // Importing the CSS styles for the Login component

// Defining the Function component Login
const Login = () => {
  return (
    <div className="container">
      {/* Div for login grid layout */}
      <div className="login-grid">
        {/* Div for login text */}
        <div className="login-text">
          <h1>Login</h1>
        </div>
        {/* Additional login text with a link to Sign Up page */}
        <div className="login-text1">
          Are you a new member?
            <span>
            <Link to='/sign_up' style={{color: '#9570ff'}}> Sign Up</Link>
            </span>
        </div>
        <br />
        {/* Div for login form */}
        <div className="login-form">
          <form>
            {/* Form group for email input */}
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
            </div>
            {/* Form group for password input */}
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
            </div>
            {/* Button group for login and reset buttons */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
            <br />
            {/* Additional login text for 'Forgot Password' option */}
            <div className="login-text1">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; // Exporting the Login component to be used in other parts of the application