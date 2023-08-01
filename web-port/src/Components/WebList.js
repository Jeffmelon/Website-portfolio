import React from 'react'
import { useNavigate } from 'react-router-dom';

function WebList({ image, name}) {
  const navigate = useNavigate()
  return (
    <div className='webItem' onClick={() => {navigate("/project/" + id)}}>
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage'/>
        <h1> {name} </h1>
    </div>
  )
}

export default WebList