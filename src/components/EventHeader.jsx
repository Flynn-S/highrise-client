import React, { Component, useState, useEffect } from "react";

import ListGroup from "react-bootstrap/ListGroup";

export default function EventHeader({ props, links, history }) {
  //   const [isOpen, setOpen] = useState(false);
  {
    console.log(props.eventDetails);
  }
  return (
    <header className="ticketpage-header">
      {/* <section id="hero-wrapper">
        <div id="hero-container">
          <div className="bg-filter"></div>
          <img id="hero-image" src={reggaeSundays} />
          <div className="hero-text">
            <h1>HIGHRISE FESTIVAL: {props.event.name}</h1>
            <date>Friday 13th - Sunday the 15th August</date>
            <p>Location, TBA</p>
          </div>
        </div>
      </section> */}

      <ListGroup>
        {props.eventDetails.map((event) => {
          <ListGroup.Item>
            <div className="event-detail-card">
              <h1>HIGHRISE FESTIVAL: {event.name}</h1>
              <date>Friday 13th - Sunday the 15th August{event.date}</date>
              <p>Location, TBA{event.location}</p>
            </div>
          </ListGroup.Item>;
        })}
      </ListGroup>
    </header>
  );
}
