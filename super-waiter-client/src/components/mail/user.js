import React from "react";
import './mail.css'
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const UserMail = ({ selectedUsers, user }) => { 
    const selected = false;

    return (
      <div className="user-mail-container">
            <div className="user-details">
                <h2>voldi muyumba</h2>
                <h3>voldimuyumba@gmail.com</h3>
        </div>
        {selected ? <ImCheckboxChecked size={15} /> : <ImCheckboxUnchecked size={15} />}
      </div>
    );
};



export default UserMail;