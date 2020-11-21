import Home1 from "../../img/home1.png"
import { StyledAbout, StyledDescription, StyledHide, StyledImage } from "./AboutSection.styles"

const AboutSection = () => {
  return (
    <StyledAbout className="about">
      <StyledDescription className="description">
        <div className="title">
          <StyledHide className="hide">
            <h2>We Work To Make</h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>Your <span>dreams</span> come</h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>Contact Us For any photography or videography ideas tha you have. We have professionals with amazing skills</p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage className="image">
        <img src={Home1} alt="Home1 - a guy with camera" />
      </StyledImage>
    </StyledAbout>
  )
}

export default AboutSection
