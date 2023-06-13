import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navBar'>
        <div className='toggle'>
            <button></button>
        </div>
        <div className='links'>
            <link to="/"> Home </link>
            <link to="/websites"> Websites </link>
            <link to="/art"> Home </link>
        </div>
    </div>
  )
}

export default Navbar