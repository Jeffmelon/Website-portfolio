import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Style/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [expandNav, setExpand] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpand(false);
  }, [location]);

  return (
    <div className='navBar' id={expandNav ? "open" : "close"}>
        <div className='toggle'>
            <button 
              onClick={() => {
                setExpand((prev) => !prev)
              }}
            >
              <ReorderIcon />
            </button>
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