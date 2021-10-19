import React, { useState } from "react";

import Button from "@material-ui/core/Button";

import { withRouter, Link } from "react-router-dom";

// #f44336

import "../index.css";

const Navbar = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await resp.json();
      console.log(data);
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedin(localStorage.getItem("isLoggedIn"));
      setLoading(false);
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nav-container">
      <nav className="menu-wrapper">
        <div className="brand-logo">
          <a href="#">
            <img
              src="/images/logo(cropped).png"
              className="highrise-logo"
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
          {props.links.map((link) => (
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
              style={{
                fontFamily: "nove",
                color: "black",
                background: "#ffe415",
                border: "1px solid black",
              }}
              type="submit"
              onClick={isLoggedIn ? handleLogOut : props.history.push("/")}
            >
              <span id="cart-label"></span>
              {isLoggedIn ? "Sign Out" : "Sign In"}
            </Button>

            {/* <Link to={!user && "/login"} className="login-link-button">
              <div onClick={handleAuthenticaton}>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link> */}
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
};

export default withRouter(Navbar);
