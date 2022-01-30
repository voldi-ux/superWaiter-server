import React from 'react';
import './count.css';


const Count = ({ count }) => {
    return <span className='count-container'>
        <span>
            {
                count
            }
        </span>
    </span>
};


export default Count;