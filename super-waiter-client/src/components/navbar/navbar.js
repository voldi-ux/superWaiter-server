/** @format */
import React,{useContext} from "react";
import './navbar.css';
import {IconContext} from 'react-icons'
import { FaUserAlt } from "react-icons/fa";
import { AppContext } from "../../context/appContext";
const Navbar = () => {
  const {signOut,user} = useContext(AppContext)
    return (
      <nav className="top-nav shadow-1">
        <div className="logo-container ">
          <img src={require("../../assets/images/logo.png")} alt="super waiter logo" className="logo" />
        </div>
        <div className="login-details">
          <IconContext.Provider value={{size:20, color:'#fff'}}>
                <FaUserAlt/>
          </IconContext.Provider>
          <h2>logged in as {user.type}</h2>
          <button className="nav-logout-btn " onClick={signOut}>sign out</button>
        </div>
      </nav>
    );
};


export default Navbar;