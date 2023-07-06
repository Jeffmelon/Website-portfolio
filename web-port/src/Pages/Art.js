import React from 'react';
import ArtGallery from '../Components/artList';
import "../Style/website.css";
import {artGallery} from "../helpers/artList.js"

function Art() {
  return (
    <div className='websites'>
      <h1 className='webTitle'>My Websites</h1>
      <div className='webList'>
        {artGallery.map((art) => {
          return <ArtGallery name={art.name} image={art.image}/>
        })}
      </div>
    </div>
  )
}

export default Art