import React from "react";
import "../index.css";

import { Row, Col } from "react-bootstrap";
// import highriseCrowd from "../images/highrise-crowd.jpeg";
// import highriseFirebreather from "../images";
// import highriseLasers from "../images/highrise-lazers.jpeg";
// import highriseLight from "../images/highrise-light-machine.jpeg";
import { GiDrum } from "react-icons/gi";
import { Divider } from "@material-ui/core";
import { GiMushroomHouse } from "react-icons/gi";
import { GiSun } from "react-icons/gi";

export default function Section2() {
  //   const getBackgroundMove = e => {
  //     let galleryContainer  = document.querySelector(".gallery-container");
  //     // galleryContainer.mousemove((e) => {
  //       let moveX = (e.pageX * -1 / 15)
  //       let moveY = (e.pageY * -1 / 15)
  //       galleryContainer.style.backgroundPosition = (moveX + 'px') + (moveY + 'px')
  //       console.log(galleryContainer.style.backgroundPosition, moveX, moveY)
  //   // })
  // }

  return (
    <section className="homepage-content container-fluid">
      <Row className="gallery-row" noGutters>
        <Col xs={12} className="about-section">
          <h2>
            4 SOUND SYSTEMS - 4 LIVE BANDS - 50+ ARTISTS - WALKABOUT PERFORMERS
            - IMMERSIVE VISUALS - LIGHT ART - HALLOWEEN GAMES - STREET FOOD -
            DRAUGHT BEER - COCKTAILS
          </h2>
        </Col>

        <Col sm={12} md={6} className="gallery-col">
          <GiDrum size="6em" className="drum-svg" />
          <p className="homepage-text">
            After a year of UK leading socially distanced events and then a huge
            3 day festival with Teachings in Dub, HighRise returns to Bristol
            for our annual Halloween festival. This year we have re-designed our
            site and are stepping up our production levels to make this our best
            event yet. To kick things off we are offering away the first tickets
            for just £50 to say thank you for all the support we have had at
            HighRise Hub this year.
          </p>
        </Col>
        <Col sm={12} md={6} className="gallery-col">
          <img
            src="../images/highrise-light-machine2.jpeg"
            alt="highrise-light-machine"
          />
        </Col>
      </Row>
      <Row className="gallery-row" noGutters>
        <Col sm={12} md={6} className="gallery-col">
          {/* <div className="gallery-image image-2"></div> */}
          <img src="./images/highrise-crowd2.jpeg" alt="highrise-crowd" />
        </Col>
        <Col sm={12} md={6} className="gallery-col">
          <GiMushroomHouse size="6em" className="mushroom-svg" />
          <p className="homepage-text">
            Now on the 23rd, 24th & 25th of July! HighRise & Teachings In Dub
            meet this summer for a huge weekender to celebrate the return of
            sound system dances. We are opening up all 5 stages of the Boxing
            gym venue for a huge weekend of sound system pressure.
          </p>
        </Col>
      </Row>
      <Row className="gallery-row" noGutters>
        <Col xs={12}>
          <Divider className="gallery-divider" />
          <p className="bass-heading">
            Underground bass music and sound system culture.
          </p>

          <Divider className="gallery-divider" />
        </Col>
      </Row>
      <Row className="gallery-row">
        <Col sm={12} md={6} className="gallery-col">
          <GiSun size="6em" className="sun-svg" />
          <p className="homepage-text">
            We've got a huge range of shows coming to HighRise Hub in the coming
            months including some new ones like Metalheadz, Rupture, Overview
            and some of our favourites brands including Gutterfunk, Croydub,
            Exit Records.
          </p>
        </Col>
        <Col sm={12} md={6} className="gallery-col">
          <img src="./images/highrise-lazers2.jpeg" alt="highrise-lasers" />
        </Col>
      </Row>
    </section>
  );
}

// const ContentSection = styled.div`
//   position: relative;
//   padding: 100px;
//   h2 {
//     font-size: 3.5rem;
//     margin-bottom: 10px;
//     color: #20496a;
//   }
//   p {
//     font-size: 1.2rem;
//     color: #20496a;
//   }
// `;
