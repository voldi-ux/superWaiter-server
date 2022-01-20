import React from 'react';
import './btn.css'

const ButtonPrimary = ({ outline,title,onClick,...props }) => {
  
    
  return <button onClick={onClick} className={`primary-btn`} {...props}>
      {title}
    </button>
};



export default ButtonPrimary;