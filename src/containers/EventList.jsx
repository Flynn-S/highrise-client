import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputGroup, FormControl, Button } from "react-bootstrap";

import { withRouter } from "react-router-dom";

import "../index.css";

import Events from "../components/Events";
import EventCard from "../components/EventCard";
import EventCard2 from "../components/EventCard2";
import EventCard2left from "../components/EventCard2left";
import Pagination from "../components/Pagination";

import CircularProgress from "@material-ui/core/CircularProgress";

const EventList = (props) => {
  const [eventsData, setEventsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [eventsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const events = await axios(`${process.env.REACT_APP_API_URL}/events`, {
        withCredentials: true,
        params: {
          name: query,
          eventsPerPage: eventsPerPage,
          currentPage: currentPage,
        },
      });
      setEventsData(events.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_URL}/events/?${query}`, {
    //   credentials: "include",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setEventsData(data);
    //     setIsLoading(false);
    //   });
    fetchEvents();
    console.log(eventsData);
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  console.log(indexOfLastEvent);

  // if (eventsData) {
  //   const currentEvents = eventsData.slice(indexOfFirstEvent, indexOfLastEvent);
  // }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* {isLoading && (
        <div id="loading-icon">
          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />
        </div>
      )} */}
      {/* {events &&
        events.events.map((event) => {
          return <EventCard eventData={event} />;
        })} */}
      {/* <div className="container"> */}

      <div className="container py-5 d-flex flex-column align-items-center justify-content-center">
        <div className="w-75 d-flex justify-content-center">
          <InputGroup className="event-search-group mb-3 mx-5 w-100">
            <FormControl
              placeholder="Search events"
              aria-label="Search bar"
              aria-describedby="basic-addon2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <InputGroup.Append>
              <Button variant="primary" type="submit" onSubmit={fetchEvents}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        {eventsData && (
          <>
            <Events
              eventsData={eventsData.events}
              isLoading={isLoading}
              indexOfFirstEvent={indexOfFirstEvent}
              indexOfLastEvent={indexOfLastEvent}
            />
            <Pagination
              eventsPerPage={eventsPerPage}
              totalEvents={eventsData.events.length}
              paginate={paginate}
            />
          </>
        )}
        {/* {eventsData &&
          currentEvents.events
            .sort((a, b) => {
              return new Date(a.eventDate) - new Date(b.eventDate); //sort events by date happening soonest
            })
            .map((event, index) => {
              if (index % 2 === 0) {
                return <EventCard2 eventData={event} key={index} />;
              } else {
                return <EventCard2left eventData={event} key={index} />;
              }
            })} */}

        {/* </div> */}
      </div>
    </>
  );
};

export default withRouter(EventList);
