import React from 'react'
// Importing Icons
import Clock from '../../img/clock.svg'
import Diaphragm from '../../img/diaphragm.svg'
import Money from '../../img/money.svg'
import Teamwork from '../../img/teamwork.svg'
import Home2 from '../../img/home2.png'
import { StyledServices, StyledDescription, StyledImage, StyledCards, StyledCard } from './Services.styles'
import useScroll from "../useScroll"
import { scrollReveal } from "../../Animations"

const ServicesSection = () => {

  const [element, controls] = useScroll()

  return (
    <StyledServices
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      className="services">
      <StyledDescription className="description">
        <h2>High <span>Quality</span> Services</h2>
        <StyledCards className="cards">
          <StyledCard className="card">
            <div className="icon">
              <img src={Clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard className="card">
            <div className="icon">
              <img src={Diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard className="card">
            <div className="icon">
              <img src={Teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard className="card">
            <div className="icon">
              <img src={Money} alt="Money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage className="image">
        <img src={Home2} alt="Home2" />
      </StyledImage>
    </StyledServices>
  )
}

export default ServicesSection
