import React, { Component } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { CgFacebook } from "react-icons/cg";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";

// class Contact extends Component {

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [subject, setSubject] = useState("Subject: Contact Form Submission");
  const [status, setStatus] = useState("Send");

  const EmailData = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      let response = fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        credentials: "include",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          messageContent,
        }),
      });
      setStatus("Send");

      const result = await response;
      alert(result.status);
      setMessageContent("");
      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Submit");
  //   let result = await response.json();
  //   alert(result.status);
  // };

  return (
    <div className="contact-background">
      <div className="contact-container container">
        <Row className="d-flex justifiy-content-center">
          <Col xs={12}>
            <div class="contact-us ">
              <h1>Find us on Socials </h1>
            </div>
            <div>
              <ul class="social-icons-contact">
                <li>
                  <a
                    class="facebook"
                    href="https://www.facebook.com/HighRiseEvents/"
                  >
                    <CgFacebook size="2.5em" />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                    <AiOutlineTwitter size="2.5em" />
                  </a>
                </li>
                <li>
                  <a
                    class="instagram"
                    href="https://www.instagram.com/highrise.uk/?hl=en"
                  >
                    <IoLogoInstagram size="2.5em" />
                  </a>
                </li>
              </ul>
            </div>
            <div class="contact-us">
              <h2>or get in touch by email</h2>
            </div>
            <form class="contact-form" onSubmit={EmailData}>
              <input
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="subject"
                placeholder="subject"
                value={subject}
                readOnly
              />
              <textarea
                name="messageContent"
                type="message"
                placeholder="Your message"
                value={messageContent}
                onChange={(e) => setMessageContent(e.target.value)}
              ></textarea>
              <button className="contact-button" type="submit">
                <span>{status}</span>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                >
                  <path
                    id="paper-plane-icon"
                    d="M462,54.955L355.371,437.187l-135.92-128.842L353.388,167l-179.53,124.074L50,260.973L462,54.955z M202.992,332.528v124.517l58.738-67.927L202.992,332.528z"
                  ></path>
                </svg>
              </button>
            </form>{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(Contact);

// onClick={(e) => EmailData(e)}

// import React,{useState} from ‘react’
// const Message = ()=>{
// const [name,setName] = useState(“”)
// const [email,setEmail] = useState(“”)
// const [message,setMessage] = useState(“”)
// const [subject,setSubject] = useState(“”)
// const PostData = ()=>{
// fetch(“/send”,{
// method:”post”,
// headers:{
// “Content-Type”:”application/json”
// },
// body:JSON.stringify({
// name,
// email,
// subject,
// message
// })
// }).then(res=>res.json())
// .then(data=>{
// alert(data.message)
// setMessage(‘’)
// setName(‘’)
// setSubject(‘’)
// setEmail(‘’)
// }).catch(err=>{
// console.log(err)
// })
// }
// return (
// <div style={{maxWidth: ‘60%’, display:’flex’, flexDirection: ‘column’, alignItems:’center’}} className=”mycard”>
// <div className=”card auth-card input-field”>
// <h2>Send me a Message</h2>
// <input
// type=”text”
// placeholder=”email”
// value={email}
// onChange={(e)=>setEmail(e.target.value)}
// />
// <input
// type=”text”
// placeholder=”name”
// value={name}
// onChange={(e)=>setName(e.target.value)}
// />
// <input
// type=”text”
// placeholder=”subject”
// value={subject}
// onChange={(e)=>setSubject(e.target.value)}
// />
// <textarea
// type=”text”
// placeholder=”Message”
// value={message}
// onChange={(e)=>setMessage(e.target.value)}
// />
// <button className=”btn waves-effect waves-light #64b5f6 blue darken-1"
// onClick={()=>PostData()}
// >
// Send Message
// </button>
// </div>
// </div>
// )
// }
// export default Message
