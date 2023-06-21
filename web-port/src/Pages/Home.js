import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../Style/home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Howdy, My name is Ethan</h2>
        <div className='info'>
          <p>A web programer and a passionate digital artist</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>HTML, CSS, ReactJS, Angular</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Javascript, NodeJS, MongoDB, MySQL</span>
          </li>
          <li className='item'>
            <h2>Digital Art</h2>
            <span>I know how to draw on a computer and create beautiful art pieces</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home