import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Tilt from "react-parallax-tilt";

import { GiDrum } from "react-icons/gi";

export default function EventCard2(props) {
  return (
    <Row className="eventpage-row" noGutters>
      <Tilt
        // --primary-color: #ea6d7c #e9929c;
        // --secondary-color: #ffe415;

        // --tertiary-color: #eb9e6e;
        perspective={1000}
        transitionSpeed="200"
        tiltReverse={true}
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareBorderRadius="20px"
        glarePosition="all"
        className="tilt d-flex"
        style={{ width: "100%" }}
      >
        <Col sm={12} md={6} className="eventpage-col px-3">
          <div className="event1-info-div">
            <p className="event-date">
              {format(new Date(props.eventData.eventDate), "dd-MM-yyyy")}
            </p>
            <h5 className="event-name">{props.eventData.name.toUpperCase()}</h5>
            <p className="event-description">{props.eventData.description}</p>
            <Link id="event-details-link" to={`/events/${props.eventData._id}`}>
              Details
            </Link>
          </div>
        </Col>
        <Col sm={12} md={6} className="eventpage-col px-3">
          <img
            className="event-image"
            src={
              props.eventData.image
                ? props.eventData.image
                : "https://fakeimg.pl/200x100/?text=No+image+found"
            }
            alt="event artwork"
          />
        </Col>
      </Tilt>
    </Row>
  );
}