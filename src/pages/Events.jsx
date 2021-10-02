import React from "react";

import EventList from "../containers/EventList";

export default function Events() {
  return (
    <>
      <div className="events-container">
        <div className="eventpage-wrapper">
          <EventList />
        </div>
      </div>
    </>
  );
}
