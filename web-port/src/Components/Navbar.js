import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Navbar.css";

function Navbar() {
  return (
    <div className='navBar'>
        <div className='toggle'>
            <button></button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/websites"> Websites </Link>
            <Link to="/art"> Art </Link>
        </div>
    </div>
  )
}

export default Navbar