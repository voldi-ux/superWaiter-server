import React from 'react';
import './mail.css';
import ButtonPrimary from '../buttons/buttonPrimary'

const MailConfirm = ({ msg, setConfirm }) => {
  return (
    <div className="mail-confirm-container">
      <h1>{msg}</h1>
      <ButtonPrimary title={"close"} clicked={"btn-clicked"} onClick={() => setConfirm(null)}/>
    </div>
  );
};



export default MailConfirm;