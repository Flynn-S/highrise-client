import React, { useState, useEffect } from "react";

import { withRouter } from "react-router-dom";

import "../index.css";

import EventCard from "../components/EventCard";
import EventCard2 from "../components/EventCard2";
import EventCard2left from "../components/EventCard2left";

import CircularProgress from "@material-ui/core/CircularProgress";

const EventList = (history, location, match) => {
  const [eventsData, setEventsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // const events = getEvents();
    // console.log(events);
    // setEvents(events);
    fetch(`${process.env.REACT_APP_API_URL}/events`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEventsData(data);
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
      {isLoading && (
        <div id="loading-icon">
          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />
        </div>
      )}
      {/* {events &&
        events.events.map((event) => {
          return <EventCard eventData={event} />;
        })} */}
      {/* <div className="container"> */}

      <div className="container py-5">
        {eventsData &&
          eventsData.events
            .sort((a, b) => {
              return new Date(a.eventDate) - new Date(b.eventDate); //sort events by date happening soonest
            })
            .map((event, index) => {
              if (index % 2 === 0) {
                return <EventCard2 eventData={event} />;
              } else {
                return <EventCard2left eventData={event} />;
              }
            })}
        {/* </div> */}
      </div>
    </>
  );
};

export default withRouter(EventList);
