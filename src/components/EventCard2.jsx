import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Tilt from "react-parallax-tilt";

export default function EventCard2(props) {
  return (
    <div className="event-seperator">
      <Tilt
        perspective={1000}
        transitionSpeed="200"
        tiltReverse={true}
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareBorderRadius="20px"
        glarePosition="all"
        className="tilt d-flex "
      >
        <Row className="eventpage-row" noGutters>
          <Col xs={12} md={6} className="eventpage-col-left">
            <div className="event1-info-div">
              <p className="event-date">
                {format(new Date(props.eventData.eventDate), "dd-MM-yyyy")}
              </p>
              <h5 className="event-name">
                {props.eventData.name.toUpperCase()}
              </h5>
              <p className="event-description">{props.eventData.description}</p>
              <Link
                id="event-details-link"
                to={`/events/${props.eventData._id}`}
              >
                <span>Details</span>
                <img src="/images/arrow-right.svg" className="event-arrow" />
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="eventpage-col-right">
            <img
              className="event-image"
              src={
                props.eventData.image
                  ? props.eventData.image
                  : "https://fakeimg.pl/800x400/?text=No+image+found"
              }
              alt="event artwork"
            />
          </Col>
        </Row>
      </Tilt>
    </div>
  );
}
