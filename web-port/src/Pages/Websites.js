import React from 'react';
import WebList from '../Components/WebList';
import "../Style/website.css";
import {webList} from "../helpers/WebList.js"

function Websites() {
  return (
    <div className='websites'>
      <h1 className='webTitle'>My Websites</h1>
      <div className='webList'>
        {webList.map((website, idx) => {
          return <WebList id={idx} name={website.name} image={website.image}/>
        })}
      </div>
    </div>
  )
}

export default Websites