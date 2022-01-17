import React from "react";
import { IconContext } from "react-icons";
import './sidebar.css';
import { BiFoodMenu } from 'react-icons/bi';
import {BsGraphUp} from 'react-icons/bs'
import { HiUsers, HiOutlineNewspaper } from "react-icons/hi";
import { IoFastFood, IoNewspaper, IoIosAdd } from "react-icons/io";
import { RiMailAddFill } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
import { MdFastfood, MdAddCircle } from "react-icons/md";

const Sidebar = () => {
 

    return (
      <nav className="sidebar">
        <IconContext.Provider value={{ size: 20, color: "#fff" ,style:{marginRight:10}}} >
          <ul className="sidebar-links">
            <li className="active">
              <BiFoodMenu /> Orders
            </li>
            <li>
              <BsGraphUp /> statistics
            </li>
            <li>
              <MdFastfood /> products
            </li>
            <li>
              <MdAddCircle /> add products
            </li>
            <li>
              <HiUsers /> users
            </li>
            <li>
              <RiMailAddFill /> mail
            </li>
            <li>
              <GoIssueOpened /> issues
            </li>
            <li><HiOutlineNewspaper/> logs</li>
          </ul>
        </IconContext.Provider>
      </nav>
    );
}


export default Sidebar;