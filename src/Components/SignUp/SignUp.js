import React, { useState } from "react"; // Importing the necessary modules from React library
import { Link, useNavigate } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./SignUp.css"; // Importing the CSS styles for the SignUp component

// Defining the Function component SignUp
const SignUp = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State for error messages
    const [error, setError] = useState(null); // General error message for display

    const navigate = useNavigate();

    // Handler for input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'role') setRole(value);
        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'phone') setPhone(value);
        if (name === 'password') setPassword(value);
    };
  
  
    return (
    <div className="container">
      {/* Main container with margin-top */}
      <div className="signup-grid">
        {/* Grid layout for sign-up form */}
        <div className="signup-text">
          {/* Title for the sign-up form */}
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1">
          Already a member?
            <span>
                <Link to='/login' style={{color: '#9570ff'}}> Login</Link>
            </span>
        </div>
        <div className="signup-form">
          {/* Form for user sign-up */}
          <form>
            {/* Start of the form */}

            <div className="form-group">
              {/* Form group for user's role */}
              <label for="role">Role</label>
              {/* Label for name input field */}
              <div className="select-group">
                <select name="role" id="role" aria-placeholder="Select a role">
                  <option>Select a role</option>
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
                <div className="select-icon">
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div className="form-group">
              {/* Form group for user's name */}
              <label for="name">Name</label>
              {/* Label for name input field */}
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                aria-describedby="helpId"
              />
              {/* Text input field for name */}
            </div>

            <div className="form-group">
              {/* Form group for user's phone number */}
              <label for="phone">Phone</label>
              {/* Label for phone input field */}
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                aria-describedby="helpId"
              />
              {/* Tel input field for phone number */}
            </div>

            <div className="form-group">
              {/* Form group for user's email */}
              <label for="email">Email</label>
              {/* Label for email input field */}
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
              />
              {/* Email input field */}
            </div>

            <div className="form-group">
              {/* Form group for user's password */}
              <label for="password">Password</label>
              {/* Label for password input field */}
              <input
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
              />
              {/* Password input field */}
            </div>

            <div className="btn-group">
              {/* Button group for form submission and reset */}
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              {/* Submit button */}
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
              {/* Reset button */}
            </div>
          </form>
          {/* End of the form */}
        </div>
      </div>
    </div>
  );
};

export default SignUp; // Exporting the SignUp component to be used in other parts of the application