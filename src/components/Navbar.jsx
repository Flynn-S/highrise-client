import React, { Component, useState, useEffect } from "react";

import Button from "@material-ui/core/Button";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";

// #f44336

import "../index.css";

export default function Navbar({ links, history }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <navigation>
      <nav className="menu-wrapper">
        <div class="brand-logo">
          <a href="#">
            <img
              src="/images/logo(cropped).png"
              id="nav-logo"
              alt="highrise Logo"
            />
          </a>
        </div>
        <div className="nav-mid">
          <h6 className="dateHeading">AUGUST 25TH - 27TH 2022</h6>
          <span>UNDISCLOSED LOCATION, TBA</span>
        </div>

        <ul className="menu">
          {links.map((link) => (
            <li>
              <Link to={`${link}`}>{link}</Link>
            </li>
          ))}
          <li>
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
              <span id="cart-label">Cart</span>
            </Button>
          </li>
        </ul>

        <input type="checkbox" className="menu-toggle" />
        <div class="hamburger">
          <div></div>
        </div>
      </nav>
    </navigation>
  );
}
