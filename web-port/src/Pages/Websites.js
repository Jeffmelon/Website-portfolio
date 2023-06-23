import React from 'react';
import WebList from '../Components/WebList';

function Websites() {
  return (
    <div className='websites'>
      <h1>My Websites</h1>
      <div className='webList'>
        <WebList name="HTML/CSS pratice Site"/>
        <WebList name="To Do List Site"/>
        <WebList name="Movie API Site"/>
        <WebList name="Boardgame Angular Site"/>
        <WebList name="HR Timesheet Angular Site"/>
      </div>
    </div>
  )
}

export default Websites