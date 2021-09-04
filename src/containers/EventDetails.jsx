import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "../index.css";
import reggaeSundays from "../images/reggaeSundays.jpeg";

import EventHeader from "../components/EventHeader";
import { getEvent } from "../services/events";

const EventDetails = (history, location, match) => {
  useEffect(() => {
    getEvent();
  });
  return (
    <div className="ticketpage-wrapper">
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

      <section class="ticketpage-footer">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fugit aspernatur voluptatibus animi ipsa ipsam quia laboriosam ut
          soluta eveniet repudiandae deserunt perspiciatis atque fuga dolores
          officia amet fugiat, quas dolore minus! Sapiente nesciunt ex
          perferendis! Perspiciatis, autem. Iste facilis voluptate dolore
          obcaecati facere, dignissimos fugiat officiis, numquam pariatur
          suscipit aspernatur temporibus molestias omnis, adipisci debitis
          architecto sunt illum soluta commodi corporis. Ea perspiciatis, minima
          porro earum saepe suscipit voluptatibus, amet ex repellat molestiae
          ratione placeat eos. Error, laboriosam natus. Incidunt suscipit, animi
          voluptates rerum vitae numquam beatae libero nobis! Eligendi earum
          itaque tempora ipsa nemo voluptates cumque consectetur officiis.
        </p>
      </section>
    </div>
  );
};

export default withRouter(EventDetails);
