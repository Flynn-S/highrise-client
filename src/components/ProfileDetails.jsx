import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import EditDetailsModal from "./EditDetailsModal";

class PersonalDetails extends React.Component {
  constructor(props) {
    super(props);
    this.fileField = React.createRef();
    this.state = {
      profilePic: null,
      isLoading: false,
    };
  }

  replaceBrokenImg = (e) => {
    console.log("img src not fount, dont worrie, got a fallback :)");
    e.target.src = `https://picsum.photos/100/100?random=${Math.ceil(
      Math.random() * 1000
    )}`;
  };
  handleChangePofPic = () => {
    this.fileField.current.click();
  };

  uploadFile = async () => {
    this.setState({ isLoading: true });
    const formData = new FormData();
    formData.append(
      "picture",
      this.state.profilePic,
      this.state.profilePic.name
    );
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/users/uploadPhoto`,
      {
        method: "POST",

        body: formData,
      }
    );
    console.log(resp);
    const body = await resp.json();
    console.log(body);
    await this.props.fetchUser("me");
    this.setState({ isLoading: false });
  };

  fileSelectHandler = (e) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    this.setState({ profilePic: selectedFile });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.profilePic !== this.state.profilePic) {
      this.uploadFile();
    }
  };

  render() {
    return <div className="account"></div>;
  }
}
