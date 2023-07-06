import React from 'react';
import { useParams } from "react-router-dom";
import { webList } from '../helpers/WebList';
import GitHubIcon from '@mui/icons-material/GitHub';

function WebDisplay() {
  const { id } = useParams();
  const web = webList[id]
  return (
    <div classname="web">
      <h1>{web.name}</h1>
      <img src={web.image} alt=""/>
      <GitHubIcon />
    </div>
  )
}

export default WebDisplay