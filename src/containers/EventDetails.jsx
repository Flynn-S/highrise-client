import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "../index.css";
import reggaeSundays from "../images/reggaeSundays.jpeg";

import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import EventCard from "../components/EventCard";
import RollerSpinner from "../components/RollerSpinner";
import { getEvent } from "../services/events";
import MapContainer from "./MapContainer";
import Payment from "./StripePayment/Payment";
import GenPay from "./StripePayment/GenPay";
import { add } from "date-fns";

const EventDetails = (props) => {
  const [eventDetails, setEventDetails] = useState(null);
  const [gitData, setGitData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(props);

    //   useEffect(() => {
    //     const drinksPromises = id.map(obj =>
    //         fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${obj.idDrink}`)
    //             .then(res => res.json())
    //     );
    //     Promise.all(drinksPromises).then(data => { setDrinkCard(data) })
    // }, [id])
    const fetchData = async () => {
      try {
        // const [eventDetails, ticketData] = await Promise.all([
        //   axios(
        //     `${process.env.REACT_APP_API_URL}/events/${props.match.params.eventId}`
        //   ),
        // ]);
        const eventData = await axios(
          `${process.env.REACT_APP_API_URL}/events/${props.match.params.eventId}`
        );
        const ticketData = await axios(
          `${process.env.REACT_APP_API_URL}/tickets`
        );
        setGitData({
          eventDetails: eventData.data,
          ticketDetails: ticketData.data,
        });
        setIsLoading(false);
        console.log(gitData.ticketDetails);
        console.log(gitData.eventDetails.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(gitData);
    // fetch(
    //   `${process.env.REACT_APP_API_URL}/events/${props.match.params.eventId}`
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setEventDetails(data);
    //     console.log(data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {isLoading && (
        <div id="loading-icon">
          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />
        </div>
      )}
      {gitData && (
        <div className="eventDetails-wrapper">
          <div className="ticketpage-wrapper">
            <header className="ticketpage-header">
              <section id="hero-wrapper">
                <div id="hero-container">
                  <img
                    className="bg-image"
                    src={`../${gitData.eventDetails.image}`}
                  />
                  <div className="bg-filter"></div>
                  <img
                    id="hero-image"
                    src={`../${gitData.eventDetails.image}`}
                    alt="Reggae Sundays event artwork"
                  />
                  <div className="hero-text">
                    <h1>{gitData.eventDetails.name}</h1>
                    <date>
                      Friday 13th - Sunday the 15th August{" "}
                      {gitData.eventDetails.eventDate}
                    </date>
                    <p>Location, TBA {gitData.eventDetails.location}</p>
                  </div>
                </div>
              </section>
            </header>

            <section className="ticketpage-content">
              <div class="ticketpage-description">
                <p>{gitData.eventDetails.description}</p>
              </div>
            </section>
            <section className="ticketpage-map">
              <MapContainer location={`${gitData.eventDetails.location}`} />
            </section>
            <section className="ticketpage-payment">
              <div className="ticket-button-list">
                <button
                  type="submit"
                  disabled
                  className={
                    gitData.eventDetails.ticketsAvailable === 0
                      ? "sold-out"
                      : ""
                  }
                >
                  <div className="ticket-labels">
                    <h3>Early Bird 1st Release</h3>
                    <p>
                      {gitData.eventDetails.ticketsAvailable === 0
                        ? "SOLD OUT"
                        : "TICKETS AVAILABLE"}
                    </p>
                  </div>
                  <div className="ticket-labels">
                    <h2>{`£${gitData.ticketDetails.tickets[0].price}`}</h2>
                  </div>
                </button>
                <button type="submit">
                  <div className="ticket-labels">
                    <h3>Final Release</h3>
                    <p>
                      {gitData.eventDetails.ticketsAvailable === 0
                        ? "SOLD OUT"
                        : "TICKETS AVAILABLE"}
                    </p>
                  </div>
                  <div className="ticket-labels">
                    <h2>{`£${gitData.ticketDetails.tickets[0].price}`}</h2>
                  </div>
                </button>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(EventDetails);
