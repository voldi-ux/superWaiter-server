import React,{useState} from 'react';
import { IconContext } from 'react-icons';
import './mail.css';
import { MdAttachFile, MdOutlineEmojiEmotions, MdWallpaper } from "react-icons/md";
import { FaPaperPlane } from 'react-icons/fa';
import BgOverlay from '../bgOverlay/bgOverlay';
import UserMail from './user';
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";


//use the pre hatml tag on the server when sending emails as html.

const Mail = () => { 
    const [email, setEmail] = useState('')
    const allSelected = false;
    return (
      <main className="mail-container">
        <div className="mail-users">
          <input className="search-users" placeholder="search users" />
          <div className="selection-count">
            <h3> 5 selected</h3>
            {allSelected ? <ImCheckboxChecked size={15} /> : <ImCheckboxUnchecked size={15} />}
          </div>
          <UserMail />
          <UserMail />
          <UserMail />
          <UserMail />
        </div>
        <div className="mail-create">
          <h1>send new email</h1>
          <input placeholder="subject" className="subject" />
          <textarea className="email-content" placeholder="enter email here" onChange={(e) => setEmail(e.target.value)} />
          <IconContext.Provider value={{ size: 30, color: "#141414", style: { cursor: "pointer" } }}>
            <div className="mail-btns">
              <div className="mail-icons">
                <MdAttachFile />
                <MdOutlineEmojiEmotions />
                <MdWallpaper />
              </div>
              <div className="mail-send">
                <FaPaperPlane />
                {/* <span className="mail-send-btn">send mail</span> */}
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </main>
    );
};



export default Mail;