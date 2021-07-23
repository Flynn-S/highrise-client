import React, { Component, useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";

// #f44336

import "../index.css";

export default function Navbar({ links, history }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <navigation>
      {/* <nav className="navLeft">
        <img
          src="/images/logo(cropped).png"
          id="nav-logo"
          alt="highrise Logo"
        />
      </nav> */}
      <nav className="navRight">
        <div class="brand-logo">
          <a href="#">
            <img
              src="/images/logo(cropped).png"
              id="nav-logo"
              alt="highrise Logo"
            />
          </a>
        </div>
        <div className="navMid">
          <h6 className="dateHeading">AUGUST 25TH - 27TH 2022</h6>
          <h6 className="locationHeading">UNDISCLOSED LOCATION, TBA</h6>
        </div>

        <ul>
          {links.map((link) => (
            <li>
              <Link to={`${link}`}>{link}</Link>
            </li>
          ))}
          <li>
            {/* <IconButton aria-label="add to shopping cart">
              <ShoppingCartIcon />
            </IconButton> */}
            <Button
              variant="contained"
              className="cart-btn"
              startIcon={<ShoppingCartIcon />}
              style={{
                fontFamily: "nove",
                color: "black",
                background: "#e6cd12",
                border: "1px solid black",
              }}
            >
              Cart
            </Button>
          </li>
          <div className="navbar-expand">
            <Link
              role="button"
              className={`navbar-burger burger ${isOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => setOpen(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>
        </ul>
      </nav>
    </navigation>
  );
}
