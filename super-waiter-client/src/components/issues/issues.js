/** @format */

import React from "react";
import BgOverlay from "../bgOverlay/bgOverlay";
import ButtonPrimary from "../buttons/buttonPrimary";
import List from "../listComponent/list";
import "./issues.css";

const Issues = () => {
  const handleButtonClick = (e) => {
    const doc = document.querySelector(".btn-clicked");
    if (doc) {
      doc.classList.remove("btn-clicked");
    }
    e.target.classList.add("btn-clicked");
  };
  return (
    <div className="issues-container">
      <List />

      <main>
        <section className="issues-details issues-details-left">
          <h1>Sent by</h1>
          <h2>voldimuyumba@gmail.com</h2>
          <h2>0638993907</h2>
          <h2>Fri Jan 14 2022 02:42:21</h2>

          <h1>description</h1>
          <p>
            "lo adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul
          </p>
        </section>
        <div className="issues-btn">
          <ButtonPrimary title={"delete"} style={{ backgroundColor: "#f7421d", color: "#ffff",border:'none' }} />
        </div>
      </main>
    </div>
  );
};

export default Issues;
