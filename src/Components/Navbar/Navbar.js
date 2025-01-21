import React, { useState, useEffect } from "react"; // Importing the necessary modules from React library
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library
import "./Navbar.css"; // Importing the CSS styles for the Navbar component

// Defining the Function component Navbar
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }

        setIsLoggedIn(false);
        setUsername('');
        setEmail('');
        window.location.reload();
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");

        if (storedEmail) {
            setIsLoggedIn(true);
            setEmail(storedEmail);
            setUsername(storedEmail.split('@')[0]);
        }
    }, []);

    return (
        <nav>
        <div className="nav__logo">
            <i className="fa fa-heart"></i>
            <a href="/"> StayHealthy </a>
        </div>
        <div className="nav__icon" onClick={handleClick}>
            <i className="fa fa-times fa fa-bars"></i>
        </div>

        <ul className={click ? "nav__links active" : "nav__links"}>
            <li className="link">
                <Link to='/'>Home</Link> 
            </li>
            <li className="link">
                <Link to='/Appointments'>Appointments</Link>
            </li>
            {isLoggedIn?(
                <>
                    <li onClick={handleDropdown} className="link">
                        <span>Welcome, {username}</span>
                        <button className="btn2" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </>
            ) : (
                <>
                <li className="link">
                    <Link to="/signup">
                    <button className="btn1">Sign Up</button>
                    </Link>
                </li>
                <li className="link">
                    <Link to="/login">
                    <button className="btn1">Login</button>
                    </Link>
                </li>
                </>
            )}
        </ul>
        </nav>
    );
};

export default Navbar; // Exporting the Navbar component to be used in other parts of the application