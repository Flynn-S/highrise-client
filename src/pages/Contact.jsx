import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";

class Contact extends Component {
  state = { active: false };

  toggleClass = () => {
    const isActive = this.state.active;
    this.setState({ active: !isActive });
  };

  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-background">
          <div className="contact-container">
            <div class="contact-us">
              <h1>Find us on Socials </h1>
            </div>
            <div>
              <ul class="social-icons-contact">
                <li>
                  <a
                    class="facebook"
                    href="https://www.facebook.com/HighRiseEvents/"
                  >
                    <CgFacebook size="2.5em" />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <AiOutlineTwitter size="2.5em" />
                  </a>
                </li>
                <li>
                  <a
                    class="instagram"
                    href="https://www.instagram.com/highrise.uk/?hl=en"
                  >
                    <IoLogoInstagram size="2.5em" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="contact-us">
              <h2>or get in touch</h2>
            </div>
            <form class="contact-form">
              <input
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                maxlength="250"
              />
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                maxlength="250"
              />
              <textarea placeholder="Your message"></textarea>
              {/* <button type="submit">Send</button> */}
              <button className="contact-button" onClick={this.toggleClass}>
                <p>Send</p>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                >
                  <path
                    id="paper-plane-icon"
                    d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"
                  ></path>
                </svg>
              </button>
            </form>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);
