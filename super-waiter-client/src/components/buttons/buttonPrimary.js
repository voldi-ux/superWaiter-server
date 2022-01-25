import React from 'react';
import './btn.css'

const ButtonPrimary = ({ outline, title, clicked, onClick, ...props }) => {
  return (
    <button onClick={onClick} className={`primary-btn ${clicked}`} {...props}>
      {title}
    </button>
  );
};



export default ButtonPrimary;