import React from 'react';
import { useParams } from "react-router-dom";
import { webList } from '../helpers/WebList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../Style/webDisplay.css";

function WebDisplay() {
  const { id } = useParams();
  const web = webList[id]
  return (
    <div className="project">
      <h1>{web.name}</h1>
      <img src={web.image} alt=""/>
      <p><b>Skills:</b> {web.skills}</p>
      <GitHubIcon />
    </div>
  )
}

export default WebDisplay