import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import "../index.css";

import CircularProgress from "@material-ui/core/CircularProgress";

import MapContainer from "./MapContainer";
import Payment from "./StripePayment/Payment";
import TicketSection from "../components/TicketSection";
import UserForm from "../components/UserForm";

import { format } from "date-fns";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// import Scroll from "react-scroll";
import { Link, Element } from "react-scroll";

// const ScrollLink = Scroll.ScrollLink;
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
    const fetchData = async () => {
      try {
        const eventData = await axios(
          `${process.env.REACT_APP_API_URL}/events/${props.match.params.eventId}`,
          { withCredentials: true }
        );
        const ticketData = await axios(
          `${process.env.REACT_APP_API_URL}/tickets`,
          { withCredentials: true }
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

            <section className="ticketpage-content d-flex flex-column">
              <div class="ticketpage-description">
                <p>{gitData.eventDetails.description}</p>
              </div>
            </section>
            <section className="ticketpage-map container">
              <h2>Location</h2>
              <MapContainer location={`${gitData.eventDetails.location}`} />
            </section>

            <Elements
              stripe={stripePromise}
              id="payment-container"
              name="payment-container"
            >
              {/* // Elements wrap from Stripe */}
              {/* <UserForm
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                eventDetails={gitData.eventDetails}
                ticketDetails={gitData.ticketDetails}
              /> */}
              <TicketSection
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                eventDetails={gitData.eventDetails}
                ticketDetails={gitData.ticketDetails}
              />
            </Elements>
          </div>
          <div className="buy-tickets-container">
            <a href="#payment-container" className="buy-tickets-link">
              BOOK TICKETS
            </a>

            {/* <ScrollLink
              to="#payment-container"
              spy={true}
              smooth={true}
              duration={500}
              className="buy-tickets-link"
              activeClass="some-active-class"
            >
              BOOK TICKETS
            </ScrollLink> */}

            {/* <Link
              activeClass="active"
              className="buy-tickets-link"
              to="#payment-container"
              spy={true}
              smooth={true}
              duration={500}
            >
              BOOK TICKETS
            </Link> */}
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(EventDetails);
