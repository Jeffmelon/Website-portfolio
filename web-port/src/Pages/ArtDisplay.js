import React from 'react';
import { useParams } from "react-router-dom";
import { artList } from '../helpers/artList';
import "../Style/webDisplay.css";

function ArtDisplay() {
  const { id } = useParams();
  const art = artList[id]
  return (
    <div className="project">
      <h1>{art.name}</h1>
      <img src={art.image} alt=""/>
    </div>
  )
}

export default ArtDisplay