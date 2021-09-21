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
import PaymentTickets from "../components/PaymentTickets";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { compareAsc, format } from "date-fns";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51JajpeClTnrRJ7z4XrM9IlUhIgJEk70xAm1YNxWAgIMXD8dogKPfKBrpMMeKpNBrQXvF1kChJ0bDGDUbW2LQQiqE00hfShWbjz"
);

const EventDetails = (props) => {
  // const [eventDetails, setEventDetails] = useState(null);
  const [gitData, setGitData] = useState(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // modal open/close functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(props);

    const fetchData = async () => {
      try {
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
                      {" "}
                      {format(new Date(gitData.eventDetails.eventDate), "PPPP")}
                    </date>
                    <p>{gitData.eventDetails.location}</p>
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
            <Elements stripe={stripePromise}>
              <PaymentTickets
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                eventDetails={gitData.eventDetails}
                ticketDetails={gitData.ticketDetails}
              />
            </Elements>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(EventDetails);
