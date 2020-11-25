import React from 'react'
import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";

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
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
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
    background: #ccc;
    margin-bottom: 3rem
  }
  img{
    width: 100%;
    height: 70vh;
    scale:-.8;
    object-fit:cover;
  }
`;

export default OurWorkPage
