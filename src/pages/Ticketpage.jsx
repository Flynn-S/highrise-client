import React from "react";
import { withRouter } from "react-router-dom";

import "../index.css";
import reggaeSundays from "../images/reggaeSundays.jpeg";

import Footer from "../components/Footer";

const Ticketpage = (props) => {
  return (
    <div className="ticketpage-wrapper">
      <header className="ticketpage-header">
        <section id="hero-wrapper">
          <div id="hero-container">
            <div className="bg-filter"></div>
            <img
              id="hero-image"
              src={reggaeSundays}
              alt="Reggae Sundays event artwork"
            />
            <div className="hero-text">
              <h1>HIGHRISE FESTIVAL: </h1>
              <date>Friday 13th - Sunday the 15th August</date>
              <p>Location, TBA</p>
            </div>
          </div>
        </section>
      </header>

      <section className="ticketpage-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          consectetur consequatur magnam, veniam commodi officia animi eum eius
          laudantium corrupti, odit, architecto eos quisquam culpa fugit eaque
          dicta accusantium praesentium earum deserunt deleniti fugiat. Eveniet
          nostrum consequuntur repudiandae, unde dignissimos praesentium dicta
          soluta asperiores sunt dolorem vitae vel placeat molestiae odio
          exercitationem odit tenetur veritatis est ullam quas saepe quisquam!
          Enim quos, blanditiis rerum distinctio magnam similique pariatur ipsam
          eum aspernatur exercitationem beatae, facilis eos labore placeat sed.
          Asperiores perferendis, quibusdam accusantium repellendus fuga quia,
          quaerat natus quidem illum corrupti nostrum amet dolorem quam, rem
          nemo ullam. Magnam, et ab.
        </p>
      </section>
    </div>
  );
};

export default withRouter(Ticketpage);
