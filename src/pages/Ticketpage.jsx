import React from "react";
import { withRouter } from "react-router-dom";

import "../index.css";

const Ticketpage = (history, location, match) => {
  return (
    <div class="wrapper">
      <header class="headerJumbo">
        <section>
          <h1>Highrise Festival - 3 Day festival</h1>
          <date>Friday 13th - Sunday the 15th August</date>
          <p>Location, TBA</p>
        </section>
      </header>
      <div class="content">CONTENT</div>
      <div class="footer">FOOTER</div>
    </div>
  );
};

export default withRouter(Ticketpage);
