import React from 'react';
import './btn.css'

const ButtonPrimary = ({ outline,title,onClick }) => {
  
    
    return <button  onClick={onClick} className={`primary-btn`} >
      {title}
    </button>
};



export default ButtonPrimary;