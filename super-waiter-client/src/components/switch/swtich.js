import React from "react";
import './switch.css';

const Switch = ({ on, toggle }) => {
    
    return (
        <div className={`switch ${on ? 'on' : ''}`}>
            <span></span>
        </div>
    );
};



export default Switch;