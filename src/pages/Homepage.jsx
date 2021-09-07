import React, { Component } from "react";
import { motion } from "framer-motion";

//components
import Cover from "../components/Cover";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";

export default class Homepage extends Component {
  state = {
    loading: true,
  };

  render() {
    return (
      <>
        <Cover />
        <Section2 />
      </>
    );
  }
}

//   <motion.div
//     initial={{ scaleY: 0.95, opacity: 0 }}
//     animate={{ scaleY: 1, opacity: 1 }}
//     exit={{ scaleY: 0.95, opacity: 0 }}
//     transition={{ duraction: 0.8 }}
//   >

//  {/* </motion.div> */}
