import React from 'react';
import WebList from '../Components/WebList';
import HTMLCSS from '../assets/HTMLCSS.png';
import Movies from '../assets/Movies.png';
import TODO from '../assets/TODO.png';
import "../Style/website.css";

function Websites() {
  return (
    <div className='websites'>
      <h1>My Websites</h1>
      <div className='webList'>
        <WebList name="HTML/CSS pratice Site" image={HTMLCSS}/>
        <WebList name="To Do List Site" image={Movies}/>
        <WebList name="Movie API Site" image={TODO}/>
        <WebList name="Boardgame Angular Site"/>
        <WebList name="HR Timesheet Angular Site"/>
      </div>
    </div>
  )
}

export default Websites