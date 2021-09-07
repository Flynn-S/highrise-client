import React from "react";

import EventList from "../containers/EventList";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <>
      <div className="eventpage-wrapper">
        <EventList />
      </div>
    </>
  );
}
