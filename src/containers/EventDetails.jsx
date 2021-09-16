import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "../index.css";
import reggaeSundays from "../images/reggaeSundays.jpeg";

import EventCard from "../components/EventCard";
import RollerSpinner from "../components/RollerSpinner";
import { getEvent } from "../services/events";

const EventDetails = (props) => {
  const [eventDetails, setEventDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(props);
    fetch(`http://localhost:5000/events/${props.match.params.eventId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEventDetails(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  //   // const setBackgroundImage() => {
  //   const backgroundImageStyle = {
  //   backgroundImage: `url(${eventDetails.image})`,

  // };

  return (
    <>
      {isLoading && <RollerSpinner />}
      {eventDetails && (
        <div className="ticketpage-wrapper">
          <header className="ticketpage-header">
            <section id="hero-wrapper">
              <div
                id="hero-container"
                // style={{ backgroundImage: "url(" + `${eventDetails.image})` }}
              >
                <img className="bg-image" src={`../${eventDetails.image}`} />
                <div className="bg-filter"></div>
                <img
                  id="hero-image"
                  src={`../${eventDetails.image}`}
                  alt="Reggae Sundays event artwork"
                />
                <div className="hero-text">
                  <h1>{eventDetails.name}</h1>
                  <date>
                    Friday 13th - Sunday the 15th August{" "}
                    {eventDetails.eventDate}
                  </date>
                  <p>Location, TBA {eventDetails.location}</p>
                </div>
              </div>
            </section>
          </header>

          <section className="ticketpage-content">
            <p>{eventDetails.description}</p>
          </section>
        </div>
      )}
    </>
  );
};

export default withRouter(EventDetails);
