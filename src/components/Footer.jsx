import React from "react";
import { Row, Col } from "react-bootstrap";
import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <footer class="highrise-footer">
      <div class="container">
        <Row className="footer-columns">
          <Col xs={12} md={3}>
            <h6>Festival</h6>
            <ul class="footer-links">
              <li>
                <a href="#">Abouts</a>
              </li>
              <li>
                <a href="#">Volunteer</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>{" "}
          </Col>
          <Col xs={12} md={3}>
            <h6>Communities</h6>
            <ul class="footer-links">
              <li>
                <a href="#">For Artists</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Vendors</a>
              </li>
            </ul>{" "}
          </Col>
          <Col xs={12} md={3}>
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={3} xs={12}>
            <ul class="social-icons">
              <li>
                <a
                  class="facebook"
                  href="https://www.facebook.com/HighRiseEvents/"
                >
                  <CgFacebook />
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  class="instagram"
                  href="https://www.instagram.com/highrise.uk/?hl=en"
                >
                  <IoLogoInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <hr />
      <div class="container">
        <Row>
          <Col sm={12} md={6} xs={12}>
            <p class="copyright-text">
              Copyright &copy; 2021. All Rights Reserved by
              <a href="https://www.instagram.com/highrise.uk/?hl=en">
                {" "}
                Highrise
              </a>
              .
            </p>
          </Col>
          {/* <Col sm={12} md={6} xs={12}>
              <ul class="social-icons">
                <li><a class="facebook" href="#"><CgFacebook /></a></li>
                <li><a class="twitter" href="#"><AiOutlineTwitter /></a></li>
                <li><a class="instagram" href="#"><IoLogoInstagram /></a></li> 
              </ul>
            </Col> */}
        </Row>
      </div>
    </footer>
  );
}
