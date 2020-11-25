import React from 'react'
import Home1 from "../../img/home1.png"
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage
} from "./AboutSection.styles"
import { motion } from "framer-motion";
import { fade, photoAnimation, titleAnimation } from '../../Animations';
import Wave from "../Wave"

const AboutSection = () => {
  return (
    <StyledAbout className="about">
      <StyledDescription className="description">
        <div className="title">
          <StyledHide className="hide">
            <motion.h2
              variants={titleAnimation}
            >We Work To Make</motion.h2>
          </StyledHide>
          <StyledHide className="hide">
            <motion.h2
              variants={titleAnimation}
            >Your <span>dreams</span> come</motion.h2>
          </StyledHide>
          <StyledHide className="hide">
            <motion.h2
              variants={titleAnimation}
            >true.</motion.h2>
          </StyledHide>
        </div>
        <motion.p variants={fade}>Contact Us For any photography or videography ideas tha you have. We have professionals with amazing skills</motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImage className="image">
        <motion.img variants={photoAnimation} src={Home1} alt="Home1 - a guy with camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  )
}

export default AboutSection
