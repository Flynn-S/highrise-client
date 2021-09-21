import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";

// #f44336

import "../index.css";

export default function Navbar({ links }) {
  const [isOpen, setOpen] = useState(false);
  // const [showNav, setChecked] = useState(false)
  return (
    <div className="nav-container">
      <nav className="menu-wrapper">
        <div className="brand-logo">
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

        <ul className={`menu ${isOpen ? "showNav" : ""}`}>
          {links.map((link) => (
            <li>
              <Link key={link} to={"/" + link}>
                {link === "line-up" ? "LINE UP" : link}
              </Link>
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
                background: "#ffe415",
                border: "1px solid black",
              }}
            >
              <span id="cart-label">Cart</span>
            </Button>
          </li>
        </ul>

        <input
          type="checkbox"
          className="menu-toggle"
          onClick={() => setOpen(!isOpen)}
        />
        <div className="hamburger">
          <div></div>
        </div>
      </nav>
    </div>
  );
}
