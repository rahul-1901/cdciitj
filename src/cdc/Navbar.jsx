import React from 'react';
import './Navbar.css';
import cdcImage from '../assets/cdc.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#"><img src={cdcImage} className='cdclogo'></img></a>
      </div>
      <ul className="navbar-links">
        <li className='options'><a href="#home">Home</a></li>
        <li className='options'><a href="#past-recruiter">Past Recruiter</a></li>
        <li className='options'><a href="#alumni">Alumni</a></li>
        <li className='options'><a href="#team">Team</a></li>
      </ul>
    </nav>
  )
}

export default Navbar