import React from 'react'

function ArtGallery({ image, name}) {
  return (
    <div className='artPiece'>
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage'/>
        <h1> {name} </h1>
    </div>
  )
}

export default ArtGallery