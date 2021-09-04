import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

import "../index.css";

import EventHeader from "../components/EventHeader";
import { getEvents } from "../services/events";

const EventList = (history, location, match) => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const events = getEvents();
    console.log(events);
    setEvents(events);
  });
  console.log(events);
  return (
    <div className="ticketpage-wrapper">
      <EventHeader eventDetails={events} />
    </div>
  );
};

export default withRouter(EventList);
