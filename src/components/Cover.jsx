import React, { Component, useState, useEffect } from "react";

import { gsap, Power3, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styled from "styled-components";
// import "./index.css";
import "../index.css";

// import coverBg from "../../images/coverBg.png";
// import coverSkyBg from "../../images/coverSkyBg.png";
// import highriseLogo from "../../images/highriseLogo.png";
// import leftStack from "../../images/leftStack.png";
// import rightStack from "../../images/rightStack.png";
// import towerblocksMg from "../../images/towerblocksMg.png";
// import trumpetFg from "../../images/trumpetFg.png";

gsap.registerPlugin(ScrollTrigger);

// gsap.to("#bg", {
//   ScrollTrigger: {
//     scrub: 1,
//   },
//   scale: 1.5,
// });

// gsap.to("#sky-bg", {
//   scrollTrigger: {
//     scrub: 1,
//   },
//   scale: 1.5,
// });

export default function Cover() {
  // gsap.to("#bg", { duration: 2, x: 100 });

  const t1 = gsap.timeline();

  useEffect(() => {
    // t1.from(
    //   "#bg",
    //   { y: 500, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
    //   "Start"
    // );
    t1.from(
      "#LS",
      { x: -500, opacity: 0, ease: Power3.easeOut, delay: 0.2 },
      "Start"
    );
    t1.from(
      "#RS",
      {
        x: 500,
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 1,
      },
      "<"
    );
    t1.from("#mg", { opacity: 0, ease: Power1.easeOut, duration: 1.5 }, "<");
    t1.from(
      "#fg",
      {
        y: 500,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      "<"
    );
    t1.from(
      "#logo",
      {
        y: -500,
        opacity: 0,
        ease: Power3.easeOut,
        delay: 0.2,
      },
      ">"
    );
    t1.from(".festival", {
      scale: [5, 1],
      y: 1300,
      opacity: 0,
      easing: "easeOutCirc",
      duration: 0.9,
    });
  });

  //gsap scroll trigger example

  //   gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
  //   gsap.set('.scrollDist', {width:'100%', height:'200%'})
  //   gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
  //     .fromTo('.sky', {y:0},{y:-200}, 0)
  //     .fromTo('.cloud1', {y:100},{y:-800}, 0)
  //     .fromTo('.cloud2', {y:-150},{y:-500}, 0)
  //     .fromTo('.cloud3', {y:-50},{y:-650}, 0)
  //     .fromTo('.mountBg', {y:-10},{y:-100}, 0)
  //     .fromTo('.mountMg', {y:-30},{y:-250}, 0)
  //     .fromTo('.mountFg', {y:-50},{y:-600}, 0)

  // $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
  // $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
  // $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)

  return (
    <section className="imgBox">
      {/* <img src={coverBg} id="bg" alt="bg1"></img>
        <img src={coverSkyBg} id="sky-bg" alt="bg2"></img>
        <img src={leftStack} id="LS" alt="left speaker stack"></img>
        <img src={rightStack} id="RS" alt="right speaker stack"></img>
        <img src={towerblocksMg} id="mg" alt="towerblocks"></img>
        <img src={trumpetFg} id="fg" alt="trumpet and record player"></img>
        <img src={highriseLogo} id="logo" alt="highrise logo"></img> */}

      <img src="/images/coverSkyBg.png" id="sky-bg" alt="background2" />
      <img src="/images/coverBg.png" id="bg" alt="background1" />
      <img src="/images/leftStack.png" id="LS" alt="left speaker stack" />
      <img src="/images/rightStack.png" id="RS" alt="right speaker stack" />
      <img src="/images/towerblocksMg.png" id="mg" alt="towerblocks" />
      <img src="/images/trumpetFg.png" id="fg" alt="trumpet foreground" />
      <img src="/images/highriseLogo.png" id="logo" alt="highrise logo" />
      <h2 className="festival">Festival</h2>
    </section>
  );
}

// const ImageContainer = styled.section`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &::before {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 200px;
//     background: linear-gradient(to top, #fff, transparent);
//     z-index: 10000;
//   }

//   img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;
