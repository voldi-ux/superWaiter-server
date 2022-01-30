/** @format */

import React, { useState, useEffect } from "react";
import { getFormatedTime } from "../../timeUtils";
import "./list.css";

const ListItem = ({ item, setItem }) => {
  //formating the date object
  const time = getFormatedTime(item.date);

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
      <h3>Time : {time} {item.new ? <span>new</span> : null}</h3>
    </div>
  );
};

export default ListItem;
