import React from 'react'

function WebList({ image, name}) {
  return (
    <div className='webItem'>
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage'/>
        <h1> {name} </h1>
    </div>
  )
}

export default WebList