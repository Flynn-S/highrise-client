import React from "react";
import { withRouter } from "react-router-dom";

const Lineup = (props) => {
  return (
    <div className="lineup-container">
      <ul className="lineup-list">
        <li>Mungo's Hi Fi</li>
        <li>Break</li>
        <li>
          Channel One <span>Sound System</span>
        </li>
        <li>Workforce</li>
        <li>Jacky Murda</li>
        <li>
          Maasai Warrior <span>Sound System</span>
        </li>
        <li>The Undercover Hippy</li>
        <li>
          Hold Tight Records <span>Sound System</span>
          <br />
          Redders, Lionpulse, JMAN &amp; WHO KNEW
        </li>
        <li>
          Gardna &middot; <span>Live PA with Tailored Sound</span>
        </li>
        <li>
          Dub Princess &amp; Hotsteppeas <span>Full Live Band</span>
        </li>
        <li>
          The Midnight Zu <span>Full Live Band</span>
        </li>
        <li>Dr. DUplate / HollieMay / AfroAlpha </li>
        <li>Drify / Hurrel / Roomtone Takeover </li>
        <li>Ross / Sudley / Panix / Kesh / Kalum / Tropigwana / Bush Bby</li>
      </ul>
    </div>
  );
};

export default withRouter(Lineup);
