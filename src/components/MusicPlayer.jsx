import React, { Component, useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Navbar";

import IconButton from "@material-ui/core/IconButton";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import "../index.css";

export default function MusicPlayer() {
  return (
    <Navbar
      className="music-player container-fluid d-flex justify-content-center"
      fixed="bottom"
    >
      <Row>
        <Col xs={1} sm={4}>
          <IconButton>
            <PlayCircleOutlineIcon style={{ width: "200px" }} />
          </IconButton>
        </Col>
        <Col xs={1} sm={4}></Col>
        <Col xs={1} sm={4}></Col>
      </Row>
    </Navbar>

    // <div ClassName="footer fixed-bottom">
    //   <div ClassName="container-fluid">
    //     <div ClassName="row d-flex flex-row justify-content-sm-between">
    //       <div ClassName="col-12 col-md-3 d-flex justify-content-center justify-content-md-start align-items-center m-0">
    //         <img
    //           ClassName="img-fluid"
    //           src="https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Queen_II_%28album_cover%29.jpg/220px-Queen_II_%28album_cover%29.jpg"
    //           alt=""
    //           style="width: 50px; height: 50px"
    //         />
    //         <p>
    //           <a href="#">Procession - Remastered 2011</a>
    //           <span ClassName="text-muted">
    //             <br />
    //             <a href="#"> Qween</a>
    //           </span>
    //         </p>
    //         <Button ClassName="bg-transparent border-0">
    //           <i ClassName="far fa-heart p-2 text-muted"></i>
    //         </Button>
    //         <Button ClassName="bg-transparent border-0">
    //           <svg
    //             ClassName="text-muted"
    //             xlink="http://www.w3.org/1999/xlink"
    //             width="16"
    //             height="16"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <g fill="#B3B3B3" fill-rule="evenodd">
    //               <path
    //                 d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
    //                 fill-rule="nonzero"
    //                 fill="#B3B3B3"
    //               ></path>
    //               <path d="M10 8h4v3h-4z" fill="#B3B3B3"></path>
    //             </g>
    //           </svg>
    //         </Button>
    //       </div>
    //       <div ClassName="col-12 col-md-6">
    //         <div ClassName="d-flex flex-row justify-content-center justify-content-md-center w-100 mb-1">
    //           <Button ClassName="bg-transparent border-0 m-2">
    //             <svg
    //               xlink="http://www.w3.org/1999/xlink"
    //               xmlns="http://www.w3.org/2000/svg"
    //               role="img"
    //               height="16"
    //               width="16"
    //               viewBox="0 0 16 16"
    //               ClassName="Svg-ulyrgf-0 hJgLcF"
    //             >
    //               <path
    //                 d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
    //                 fill="#B3B3B3"
    //               />
    //               <path
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
    //                 fill="#B3B3B3"
    //               />
    //             </svg>
    //           </Button>

    //           <Button ClassName="bg-transparent border-0 m-2">
    //             <svg
    //               xlink="http://www.w3.org/1999/xlink"
    //               xmlns="http://www.w3.org/2000/svg"
    //               role="img"
    //               height="16"
    //               width="16"
    //               viewBox="0 0 16 16"
    //               ClassName="Svg-ulyrgf-0 hJgLcF"
    //             >
    //               <path
    //                 d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"
    //                 fill="#B3B3B3"
    //               ></path>
    //             </svg>
    //           </Button>

    //           <Button ClassName="rounded-circle border-0 p-2 m-2">
    //             <svg
    //               role="img"
    //               height="16"
    //               width="16"
    //               viewBox="0 0 16 16"
    //               ClassName="Svg-ulyrgf-0 hJgLcF"
    //             >
    //               <path d="M4.018 14L14.41 8 4.018 2z"></path>
    //             </svg>
    //           </Button>

    //           <Button ClassName="bg-transparent border-0 m-2">
    //             <svg
    //               xLink="http://www.w3.org/1999/xlink"
    //               xmlns="http://www.w3.org/2000/svg"
    //               role="img"
    //               height="16"
    //               width="16"
    //               viewBox="0 0 16 16"
    //               ClassName="Svg-ulyrgf-0 hJgLcF"
    //             >
    //               <path
    //                 d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"
    //                 fill="#B3B3B3"
    //               ></path>
    //             </svg>
    //           </Button>

    //           <Button ClassName="bg-transparent border-0 m-2">
    //             <svg
    //               xLink="http://www.w3.org/1999/xlink"
    //               xmlns="http://www.w3.org/2000/svg"
    //               role="img"
    //               height="16"
    //               width="16"
    //               viewBox="0 0 16 16"
    //               ClassName="Svg-ulyrgf-0 hJgLcF"
    //             >
    //               <path
    //                 d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
    //                 fill="#B3B3B3"
    //               ></path>
    //             </svg>
    //           </Button>
    //         </div>
    //         <div ClassName="d-flex justify-content-center justify-content-md-center align-items-center w-100">
    //           <div ClassName="form-group text-muted w-100">
    //             <div ClassName="track-time-box d-flex justify-content-center align-items-center w-100">
    //               <span ClassName="px-2">0:00</span>
    //               <input
    //                 type="range"
    //                 id="track-time"
    //                 name="track-time"
    //                 oninput="onRangeInput(this.value, this)"
    //                 onchange="onRangeInput1(this.value, this)"
    //               />
    //               <span ClassName="px-2">1:13</span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div ClassName="col-12 col-md-3 d-flex justify-content-center justify-content-md-end align-items-center pb-2">
    //         <div ClassName="d-flex align-items-center">
    //           <Button ClassName="bg-transparent border-0 mr-2">
    //             <i class="fas fa-bars text-muted"></i>
    //           </Button>
    //           <Button class="bg-transparent border-0 mr-2">
    //             <i class="fas fa-desktop text-muted"></i>
    //           </Button>
    //           <Button class="bg-transparent border-0 mr-2">
    //             <svg
    //               xLink="http://www.w3.org/1999/xlink"
    //               xmlns="http://www.w3.org/2000/svg"
    //               role="img"
    //               height="16"
    //               width="16"
    //               viewBox="0 0 16 16"
    //               class="Svg-ulyrgf-0 hJgLcF"
    //             >
    //               <path
    //                 d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
    //                 fill="#B3B3B3"
    //               />
    //             </svg>
    //             <path
    //               xmlns="http://www.w3.org/2000/svg"
    //               d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
    //               fill="#B3B3B3"
    //             />
    //           </Button>
    //         </div>

    //         <div class="form-group mb-0">
    //           <input
    //             type="range"
    //             class="form-control-range"
    //             id="volume"
    //             oninput="onRangeInput(this.value, this)"
    //             onchange="onRangeInput1(this.value, this)"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
