import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
// import Alert from '@mui/material/Alert';
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import Notification from "./Notification";
import PaymentModal from "./PaymentModal";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

// import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function TicketSection(props) {
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const [] = useState();
  const stripe = useStripe();
  const elements = useElements();

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
    setErrorOpen(false);
  };

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
        const response = await axios.post(
          `http://localhost:5000/events/6137d9de5df4376b27a3b92a/checkout`,
          {
            withCredentials: true,
            amount: 1000,
            id,
          }
        );

        if (response.data.success) {
          console.log("Successful payment");
          setProcessing(false);
          setSucceeded(true);
          setSuccessOpen(true);
        }
      } catch (error) {
        console.log("Error", error);
        setErrorOpen(true);
      }
    } else {
      console.log(error.message);
      setErrorOpen(true);
    }
  };

  return (
    <section className="ticketpage-payment container">
      <div className="ticket-button-list">
        <h2 className="event-details-h2">Select a ticket</h2>
        <div className="ticket-button-container">
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
      </div>
      <PaymentModal
        handleClickOpen={props.handleClickOpen}
        handleClose={props.handleClose}
        open={props.open}
        handleStripeSubmit={handleStripeSubmit}
      />
    </section>
  );
}

{
  /* <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert> */
}

// <Stack spacing={2} sx={{ width: "100%" }}>
{
  /* <Snackbar
            open={successOpen}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              severity="success"
              onClose={handleClose}
              sx={{ width: "100%" }}
            >
              <AlertTitle>Success</AlertTitle>
              This is a success alert — <strong>check it out!</strong>
            </Alert>
          </Snackbar>
          <Snackbar
            open={errorOpen}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              severity="error"
              onClose={handleClose}
              sx={{ width: "100%" }}
            >
              <AlertTitle>Error</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
          </Snackbar>
        </Stack> */
}

/* <Dialog 
        fullWidth={true}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="payment-modal">
          Purchase Tickets
        </DialogTitle>
        <DialogContent className="payment-modal">
          <DialogContentText>
            Please enter your card details to complete purchase of your tickets.
          </DialogContentText>
          <form onSubmit={handleStripeSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} hidePostalCode={true} />
              </div>
            </fieldset>
            {/* <button>Pay Now</button> */

//     </form>
//   </DialogContent>
//   <DialogActions className="payment-modal">
//     <Button onClick={props.handleClose} color="primary">
//       Cancel
//     </Button>
//     <Button
//       // disabled={processing || disabled || succeeded}
//       onClick={handleStripeSubmit}
//       color="primary"
//     >
//       {/* <span>{processing ? <p>Processing</p> : "Pay Now"}</span> */}
//       Pay Now
//     </Button>
//   </DialogActions>
// </Dialog>
