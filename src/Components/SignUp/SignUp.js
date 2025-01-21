import React, { useState } from "react"; // Importing the necessary modules from React library
import { Link, useNavigate } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./SignUp.css"; // Importing the CSS styles for the SignUp component
import { API_URL }  from "../../config.js";

// Defining the Function component SignUp
const SignUp = () => {
    // State variables using useState hook
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const [showPhoneErr, setShowPhoneErr] = useState(''); // State for phone number specific error message    const [error, setError] = useState(null); // Error Msg
    const [error, setError] = useState(null); // General error message for display
    const navigate = useNavigate(); // Navigation hook from react-router
    
    const handlePhoneBlur = (e) => {
        const phoneNumber = e.target.value;

        // Update phone number error message based on validation
        if (phoneNumber.length === 10) {
            setShowPhoneErr(''); // Clear error if phone number has 10 digits
        } 
        else if (phoneNumber.length > 0 && phoneNumber.length < 10) {
            setShowPhoneErr('Phone number must be exactly 10 characters long.'); // Set error for invalid length
        }
    };
    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: role,
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            // Handle registration errors
            if (json.errors) {
                for (const error of json.errors) {
                setShowerr(error.msg); // Set general error message from API response
                }
            } else {
                setShowerr(json.error); // Set general error message if no specific errors provided
            }
        } 

    };
  
    return (
    <div className="container">
      <div className="signup-grid">
        <div className="signup-text">
            <h1>Sign Up</h1>
        </div>
        <div className="signup-text1">
          Already a member?
            <span>
                <Link to='/login' style={{color: '#9570ff'}}> Login</Link>
            </span>
        </div>
        <div className="signup-form">
          <form onSubmit={register}>
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <div className="select-group">
                    <select 
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        name="role" 
                        id="role"
                        required>
                            <option>Select a role</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                    </select>
              </div>
            </div>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="form-control"
                    placeholder="Enter your name"
                    aria-describedby="helpId"
              />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={handlePhoneBlur}
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="form-control"
                    placeholder="Enter your phone number"
                    aria-describedby="helpId"
                />
                {showPhoneErr && <div className="err" style={{ color: 'red' }}>{showPhoneErr}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="form-control"
                    placeholder="Enter your email"
                    aria-describedby="helpId"
                />
                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>

            <div className="form-group">
              {/* Form group for user's password */}
              <label htmlFor="password">Password</label>
              {/* Label for password input field */}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                <button
                    type="submit"
                    id="submit"
                    className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
                >
                    Submit
                </button>

                <button
                    type="reset"
                    id="reset"
                    onClick={() => { 
                        setRole(''); 
                        setName(''); 
                        setPhone(''); 
                        setEmail(''); 
                        setPassword(''); 
                        setShowerr('');
                        setError(null); 
                    }}
                    className="btn btn-danger mb-2 mr-1 waves-effect waves-light"
                >
                    Reset
                </button>
            </div>
          </form>
          {/* End of the form */}
        </div>
      </div>
    </div>
  );
};

export default SignUp; // Exporting the SignUp component to be used in other parts of the application