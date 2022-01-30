import React,{memo, useContext} from "react";
import { IconContext } from "react-icons";
import './sidebar.css';
import { BiFoodMenu } from 'react-icons/bi';
import { MdFastfood, MdAddCircle } from "react-icons/md";
import {BsGraphUp} from 'react-icons/bs'
import { HiUsers, HiOutlineNewspaper } from "react-icons/hi";
import { RiMailAddFill } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
import Count from "../notificationCount/count";
import { AppContext } from "../../context/appContext";
import { countNewOrders } from "./util";

const Sidebar = ({ setActiveComponent }) => {
  const { orders } = useContext(AppContext)
  const count = countNewOrders(orders)
  

  const handleClick = (e, activeComponentName) => {
    const doc = document.querySelector(".sidebar-link.active");
    if (doc) {
      doc.classList.remove("active");
    }
    e.target.classList.add("active");
    setActiveComponent(activeComponentName);
  };

  return (
    <nav className="sidebar">
      <IconContext.Provider value={{ size: 20, color: "#fff", style: { marginRight: 10 } }}>
        <ul className="sidebar-links">
          <li
            className="sidebar-link active"
            onClick={(e) => {
              handleClick(e, "products");
            }}
          >
            <MdFastfood /> products
          </li>
          <li
            className="sidebar-link"
            onClick={(e) => {
              handleClick(e, "orders");
            }}
          >
            <BiFoodMenu /> Orders {count > 0 ? <Count count={count} /> : null}
          </li>
          <li
            className="sidebar-link"
            onClick={(e) => {
              handleClick(e, "stats");
            }}
          >
            <BsGraphUp /> statistics
          </li>

          <li
            className="sidebar-link"
            onClick={(e) => {
              // handleClick(e,'products')
            }}
          >
            <MdAddCircle /> add product
          </li>
          <li
            className="sidebar-link"
            onClick={(e) => {
              // handleClick(e,'user')
            }}
          >
            <HiUsers /> users
          </li>
          <li
            className="sidebar-link"
            onClick={(e) => {
              handleClick(e, "mail");
            }}
          >
            <RiMailAddFill /> mail
          </li>
          <li
            className="sidebar-link"
            onClick={(e) => {
              handleClick(e, "issues");
            }}
          >
            <GoIssueOpened /> issues
          </li>
          <li
            className="sidebar-link"
            onClick={(e) => {
              handleClick(e, "logs");
            }}
          >
            <HiOutlineNewspaper /> logs
          </li>
        </ul>
      </IconContext.Provider>
    </nav>
  );
};


export default memo(Sidebar);