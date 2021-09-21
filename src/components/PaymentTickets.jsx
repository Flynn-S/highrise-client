import React, { useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      //   iconColor: "#ffc7ee",
      //   color: "#ffc7ee",
      iconColor: "#000",
      color: "#000",
    },
  },
};

export default function PaymentTickets(props) {
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [] = useState();
  const stripe = useStripe();
  const elements = useElements();

  //   console.log(watch("example")); // watch input value by passing the name of it

  const handleStripeSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setProcessing(false);
          setSucceeded(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    setDisabled = event.empty;
    setError = event.error ? event.error.message : "";
  };

  return (
    <section className="ticketpage-payment">
      <div className="ticket-button-list">
        <h2>Select a ticket</h2>
        <button type="button" disabled>
          <div className="ticket-labels">
            <h3>Early Bird 1st Release</h3>
            <p>
              {props.eventDetails.ticketsAvailable === 0
                ? "SOLD OUT"
                : "TICKETS AVAILABLE"}
            </p>
          </div>
          <div className="ticket-labels">
            <h2>{`£${props.ticketDetails.tickets[0].price}`}</h2>
          </div>
        </button>
        <button type="button" onClick={props.handleClickOpen}>
          <div className="ticket-labels">
            <h3>Final Release</h3>
            <p>
              {props.eventDetails.ticketsAvailable === 0
                ? "SOLD OUT"
                : "TICKETS AVAILABLE"}
            </p>
          </div>
          <div className="ticket-labels">
            <h2>{`£${props.ticketDetails.tickets[0].price}`}</h2>
          </div>
        </button>
      </div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Purchase Tickets</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your card details to complete purchase of your tickets.
          </DialogContentText>
          <form onSubmit={handleStripeSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            {/* <button>Pay Now</button> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            disabled={processing || disabled || succeeded}
            onClick={handleStripeSubmit}
            color="primary"
          >
            <span>{processing ? <p>Processing</p> : "Pay Now"}</span>
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}
