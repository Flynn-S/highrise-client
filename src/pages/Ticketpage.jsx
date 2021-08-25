import React from "react";
import { withRouter } from "react-router-dom";

import "../index.css";
import reggaeSundays from "../images/reggaeSundays.jpeg";

const Ticketpage = (history, location, match) => {
  return (
    <div class="ticketpage-wrapper">
      <header class="ticketpage-header">
        <section id="hero-wrapper">
          <div id="hero-container">
            <div class="bg-filter"></div>
            <img id="hero-image" src={reggaeSundays} />
            <div className="hero-text">
              <h1>HIGHRISE FESTIVAL: </h1>
              <date>Friday 13th - Sunday the 15th August</date>
              <p>Location, TBA</p>
            </div>
          </div>
        </section>
      </header>
      <div class="ticketpage-container">
        <section class="ticketpage-content"></section>
      </div>
      <div class="footer">FOOTER</div>
    </div>
  );
};

export default withRouter(Ticketpage);
