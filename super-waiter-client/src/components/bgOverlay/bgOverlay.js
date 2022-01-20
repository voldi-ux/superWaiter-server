import React from 'react';
import './bgOverlay.css'

const BgOverlay = ({ bgColor }) => {
  console.log(bgColor);
    
    return <header className='bgOverlay' style={{backgroundColor:bgColor}}>

    </header>
} 



export default BgOverlay;