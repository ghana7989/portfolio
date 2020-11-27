import React from 'react'
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { sliderContainer, fade, photoAnimation, pageAnimation, lineAnimation, slider } from "../Animations";

// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'



const OurWorkPage = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledMovie>
        <motion.h2
          variants={fade}
        >The Athlete</motion.h2>
        <motion.div
          variants={lineAnimation}
          className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img
              variants={photoAnimation}
              src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovie>
    </StyledWork>
  )
}

const StyledWork = styled(motion.div)`
  min-height:98vh;
  overflow:hidden;
  padding: 5rem 10rem;
  h2{
    padding:1rem 0;
  }
`;

const StyledMovie = styled.div`
  padding-bottom:10rem;
  .line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem
  }
  img{
    width: 100%;
    height: 70vh;
    scale:-.8;
    object-fit:cover;
  }
`;

const StyledHide = styled.div`
  overflow:hidden;
`
const Frame1 = styled(motion.div)`
  position:fixed;
  left:0;
  top:10%;
  width:100%;
  height:100vh;
  background:#fffebf;
  z-index:3;
`
const Frame2 = styled(Frame1)`
  background:#ff8efb
`
const Frame3 = styled(Frame1)`
  background:#8eb2ff
`
const Frame4 = styled(Frame1)`
  background:#8effa0
`

export default OurWorkPage
