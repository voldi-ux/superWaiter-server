/** @format */

import React, { useState } from "react";
import { getFormatedTime } from "../../timeUtils";
import "./list.css";

const ListItem = ({ item, setItem }) => {
 //formating the date object
const [time, setTime] = useState(getFormatedTime(item.date));
    
//this function ensures that the date get formated every second.
  getFormatedTime(item.date, setTime, 1000);

  const handleClick = (event, item) => {
    const doc = document.querySelector(".list-item.active");
    if (doc) {
      doc.classList.remove("active");
    }
    event.currentTarget.classList.add("active");
    setItem(item);
  };

  return (
    <div onClick={(e) => handleClick(e, item)} className="list-item" key={item._id}>
      <h2>#{item.orderNo}</h2>
      <h3>Time : {time}</h3>
    </div>
  );
};

export default ListItem;
