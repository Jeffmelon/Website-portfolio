import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Style/footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon />
            <GitHubIcon />
        </div>
        <p> &copy; 2023 ethankettle.com</p>
    </div>
  )
}

export default Footer