import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h3>Jordan Kam</h3>
            <ul className="navbar-ul">
                <li className="navbar-item font-poppins"><a href="#About">About</a></li>
                <li className="navbar-item font-poppins"><a href="#Experience">Experience</a></li>
                <li className="navbar-item font-poppins"><a href="#Projects">Projects</a></li>
                <li className="navbar-item font-poppins"><a href="#Skills">Skills</a></li>
            </ul>
        </div>
    )
}

export default Navbar
