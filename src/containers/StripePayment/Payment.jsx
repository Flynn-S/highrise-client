import React from "react";
import "./styles.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51JajpeClTnrRJ7z4XrM9IlUhIgJEk70xAm1YNxWAgIMXD8dogKPfKBrpMMeKpNBrQXvF1kChJ0bDGDUbW2LQQiqE00hfShWbjz"
);

const Payment = () => {
  return (
    // <div className="payment-wrapper">
    //   <div className="product">
    //     <div>
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Payment;
