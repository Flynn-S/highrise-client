import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { CardElement } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#ea6d7c" },
      "::placeholder": { color: "#ea6d7c" },
    },
    invalid: {
      iconColor: "#ea6d7c",
      color: "#ea6d7c",
    },
  },
};

export default function PaymentModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth={true}
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" className="payment-modal">
        Purchase Tickets
      </DialogTitle>
      <DialogContent className="payment-modal">
        <DialogContentText>
          Please enter your card details to complete purchase of your tickets.
        </DialogContentText>
        <form onSubmit={props.handleStripeSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={props.CARD_OPTIONS} />
            </div>
          </fieldset>
          {/* <button>Pay Now</button> */}
        </form>
      </DialogContent>
      <DialogActions className="payment-modal">
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          // disabled={processing || disabled || succeeded}
          onClick={props.handleStripeSubmit}
          color="primary"
        >
          {/* <span>{processing ? <p>Processing</p> : "Pay Now"}</span> */}
          Pay Now
        </Button>
      </DialogActions>
    </Dialog>
  );
}
