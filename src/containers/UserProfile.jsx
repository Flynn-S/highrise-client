import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import ProfileDetails from "../components/ProfileDetails";

import CircularProgress from "@material-ui/core/CircularProgress";

const UserProfile = () => {
  const [accountData, setAccountData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
      credentials: "include",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAccountData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div id="loading-icon">
          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />

          <CircularProgress style={{ margin: "0% 1%" }} />
        </div>
      )}
      {accountData && (
        <Row className="d-flex justify-content-between">
          <Col xs={12} className="d-flex justify-content-center">
            <img
              className="profile-img"
              src={accountData.user.image}
              alt="user profile image"
            />
          </Col>
          <Col xs={12} className="d-flex justify-content-center">
            <div className="container">
              <div className="profile-header">
                <h1 className="profile-name">
                  {accountData.user.name} {accountData.user.surname}
                </h1>
                {accountData.user.userType === "admin" ? <h3>Admin</h3> : null}
              </div>
              <div className="user-details-container">
                <h3>Account Details</h3>

                <ul>
                  {accountData.user.tickets.map((ticket) => {
                    <li>{ticket._id}</li>;
                  })}
                </ul>

                <p>hello boyo</p>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default UserProfile;
