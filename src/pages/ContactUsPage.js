import React from 'react'
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../Animations";
import styled from "styled-components/macro"

const ContactUsPage = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2
            variants={titleAnimation}
          >Get in touch.</motion.h2>
        </Hide>
      </StyledTitle>
      <div>
        <Hide>
        <StyledSocial variants={titleAnimation}>
           <StyledCircle />
          <h2>Send Us A Message</h2>
        </StyledSocial>
        </Hide>
        <Hide>
        <StyledSocial variants={titleAnimation}>
           <StyledCircle />
          <h2>Send An Email</h2>
        </StyledSocial>
        </Hide>
        <Hide>
        <StyledSocial variants={titleAnimation}>
           <StyledCircle />
          <h2>Social Media</h2>
        </StyledSocial>
        </Hide>
      </div>
    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  font-weight: 900;
  color: black;
`;

const Hide = styled.div`
  overflow:hidden;
`
const StyledCircle = styled.div`
  border-radius:50%;
  width:3rem;
  height:3rem;
  background-color: #353535;
`
const StyledSocial = styled(motion.div)`
  display:flex;
  align-items:center;
  h2{
    margin: 2rem;
  }
`

export default ContactUsPage
