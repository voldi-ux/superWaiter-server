/** @format */

import React, { useState, useContext } from "react";
import { IconContext } from "react-icons";
import "./mail.css";
import { MdAttachFile, MdOutlineEmojiEmotions, MdWallpaper } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import UserMail from "./user";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AppContext } from "../../context/appContext";
import { getFilteredUsers } from "./util";
import {axiosPost} from '../../axios/axios'
import MailConfirm from "./emailConfirmation";
import Loader from "../loader/loader";
//use the pre hatml tag on the server when sending emails as html.

const Mail = () => {
  const [term, setTerm] = useState("");
  const [mailData,setMailData] = useState({subject:'', mailBody:''})
  const { users, selectedUsers, toggleSelectUser, toggleSelectUserAll } = useContext(AppContext);
  const allSelected = users.length === selectedUsers.length ? true:false;
  const filtereduser = getFilteredUsers(term, users);
  const [confirm, setConfirm] = useState(null)
  const [loading,setLoading] = useState(false)
  
  const renderUsers = filtereduser.map((user) => <UserMail key={user._id} user={user} selectedUsers={selectedUsers} toggleSelectUser={toggleSelectUser} />);

  const handleMailDataChange = (e) => {
    setMailData(prev => { 
      const newState = {...prev}
      newState[e.target.name] = e.target.value;
      return newState;
    })
  }
  
  
  const sendMail = async () => {
     setLoading(true)
    const res = await axiosPost("/dashboard/send-mail", { ...mailData, emails: selectedUsers.map(user => user.email) });
    setLoading(false)
    if (res.err || res.msg !== 'success') {
     setConfirm('could not send your email please try again!')
    } else {
     setConfirm("email was sent successfully");
   }
  }

  return (
    <main className="mail-container">
      {confirm && <MailConfirm msg={confirm} setConfirm={setConfirm} />}
      <div className="mail-users">
        <input className="search-users" placeholder="search users" onChange={(e) => setTerm(e.target.value)} />
        <div className="selection-count" onClick={toggleSelectUserAll}>
          <h3> {selectedUsers.length} selected</h3>
          {allSelected ? <ImCheckboxChecked size={15} /> : <ImCheckboxUnchecked size={15} />}
        </div>
        {renderUsers}
      </div>
      <div className="mail-create">
        <h1>send new email</h1>
        <input placeholder="subject" className="subject" name="subject" onChange={handleMailDataChange} value={mailData["subject"]} />
        <textarea name="mailBody" className="email-content" placeholder="enter email here" onChange={handleMailDataChange} value={mailData["mailBody"]} />
        <IconContext.Provider value={{ size: 30, color: "#141414", style: { cursor: "pointer" } }}>
          <div className="mail-btns">
            <div className="mail-icons">
              <MdAttachFile />
              <MdOutlineEmojiEmotions />
              <MdWallpaper />
            </div>
            <div className="mail-send">
              {loading ? <Loader style={{width:'3rem', height:'3rem'}}/>: <FaPaperPlane onClick={sendMail} />}
              {/* <span className="mail-send-btn">send mail</span> */}
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </main>
  );
};

export default Mail;
