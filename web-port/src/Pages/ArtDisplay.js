import React from 'react';
import { useParams } from "react-router-dom";
import { artGallery } from '../helpers/artList';
import "../Style/webDisplay.css";

export default function ArtDisplay() {
  const { id } = useParams();
  const art = artGallery[id]
  return (
    <div className="project">
      <h1>{art.name}</h1>
      <img src={art.image} alt=""/>
    </div>
  )
}
