import React from "react";
import './mail.css'
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { userSelected } from "./util";

const UserMail = ({ selectedUsers, user, toggleSelectUser }) => {
  const selected = userSelected(user._id, selectedUsers);

  const handleClick = () => {
   toggleSelectUser(user)
 }

  return (
    <div className="user-mail-container" onClick={handleClick}>
      <div className="user-details">
        <h2>
          {user.name} {user.surname}
        </h2>
        <h3>{user.email}</h3>
      </div>
      {selected ? <ImCheckboxChecked size={15} /> : <ImCheckboxUnchecked size={15} />}
    </div>
  );
};



export default UserMail;