import React, { useState, useEffect } from "react";

import EventCard2 from "./EventCard2";
import EventCard2left from "./EventCard2left";
import CircularProgress from "@material-ui/core/CircularProgress";

const Events = ({
  eventsData,
  isLoading,
  indexOfFirstEvent,
  indexOfLastEvent,
}) => {
  const paginatedEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);
  if (isLoading) {
    return (
      <div id="loading-icon">
        <CircularProgress style={{ margin: "0% 1%" }} />

        <CircularProgress style={{ margin: "0% 1%" }} />

        <CircularProgress style={{ margin: "0% 1%" }} />
      </div>
    );
  } else {
    return paginatedEvents
      .sort((a, b) => {
        return new Date(a.eventDate) - new Date(b.eventDate); //sort events by date happening soonest
      })
      .map((event, index) => {
        if (index % 2 === 0) {
          return <EventCard2 eventData={event} key={index} />;
        } else {
          return <EventCard2left eventData={event} key={index} />;
        }
      });
  }
};

export default Events;
