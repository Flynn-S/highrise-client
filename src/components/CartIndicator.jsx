import React from "react";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withRouter } from "react-router-dom";

const CartIndicator = ({ history }) => {
  return (
    <Button
      variant="contained"
      className="cart-btn"
      startIcon={<ShoppingCartIcon />}
      onClick={() => history.push("/cart")}
      style={{
        fontFamily: "nove",
        color: "black",
        background: "#ffe415",
        border: "1px solid black",
      }}
    >
      <span id="cart-label">Cart</span>
    </Button>
  );
};

export default withRouter(CartIndicator);
