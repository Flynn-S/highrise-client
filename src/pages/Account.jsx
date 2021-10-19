import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserProfile from "../containers/UserProfile";

export default function Account() {
  return (
    <>
      <Container fluid className="account-wrapper">
        <UserProfile />
      </Container>
    </>
  );
}
