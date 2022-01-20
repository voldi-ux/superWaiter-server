/** @format */

import React from "react";
import BgOverlay from "../bgOverlay/bgOverlay";
import ButtonPrimary from "../buttons/buttonPrimary";
import List from "../listComponent/list";
import "./logs.css";

const Logs = () => {
  const handleButtonClick = (e) => {
    const doc = document.querySelector(".btn-clicked");
    if (doc) {
      doc.classList.remove("btn-clicked");
    }
    e.target.classList.add("btn-clicked");
  };
  return (
    <div className="logs-container">
      <List />
      <main>
        <section className="logs-details logs-details-left">
          <h1>Details</h1>
          <h2>Ip address: 127.0.0.1</h2>
          <h2>Attempted passcodes:1345,3245,1235,</h2>
          <h2>Attempted pins: 1345,3456,23423</h2>
          <h2>Time: Fri Jan 14 2022 02:42:21</h2>
          <h2>Coutnry: south Africa</h2>
          <h2>City: Johannesburg</h2>
        </section>
        <div className="logs-btn">
          <ButtonPrimary title={"delete"} style={{ backgroundColor: "#f7421d", color: "#ffff", border: "none" }} />
        </div>
      </main>
    </div>
  );
};

export default Logs;
