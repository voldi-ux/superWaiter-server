/** @format */

import React from "react";
import "./switch.css";

const Switch = ({ on, toggle }) => {
    
  const handleClick = () => {
    toggle((prev) => {
        const newState = { ...prev }
        newState.hot = !prev.hot
      return newState;
    });
    };
    
  return (
    <div className={`switch ${on ? "on" : ""}`} onClick={handleClick}>
      <span></span>
    </div>
  );
};

export default Switch;
