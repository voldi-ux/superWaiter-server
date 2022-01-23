/** @format */

import React, { useState } from "react";
import "./list.css";
import ListItem from "./listItem";

const List = ({ list, setItem }) => {
  if (list) {
    const renderListItems = list.map((item) => <ListItem key={item.orderNo} item={item} setItem={setItem} />);
    return <aside className="list-container">{renderListItems}</aside>;
  }

  return (
    <aside className="list-container">
      <div className="list-item">
        <h2>#90887867655445</h2>
        <h3>Time : 10 min ago</h3>
      </div>
      <div className="list-item">
        <h2>#25687867655445</h2>
        <h3>Time : 15 min ago</h3>
      </div>
      <div className="list-item active">
        <h2>#98767867655445</h2>
        <h3>Time : 20 min ago</h3>
      </div>
      <div className="list-item">
        <h2>#90887867655445</h2>
        <h3>Time : 10 min ago</h3>
      </div>
      <div className="list-item">
        <h2>#90887867655445</h2>
        <h3>Time : 10 min ago</h3>
      </div>
      <div className="list-item">
        <h2>#90887867655445</h2>
        <h3>Time : 10 min ago</h3>
      </div>
    </aside>
  );
};

export default List;
