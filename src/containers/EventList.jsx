import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

import "../index.css";

import EventCard from "../components/EventCard";
import { getEvents } from "../services/events";

const EventList = (history, location, match) => {
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const events = getEvents();
    // console.log(events);
    // setEvents(events);
    fetch("http://localhost:5000/events")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   const events = getEvents();
  //   setEvents(events);
  //   setIsLoading(false);
  // }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {events &&
        events.events.map((event) => {
          return <EventCard eventData={event} />;
        })}
    </>
  );
};

export default withRouter(EventList);
