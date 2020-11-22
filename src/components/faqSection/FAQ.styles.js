import styled from "styled-components/macro";
import { StyledAbout, StyledDescription as AboutStyledDescription, StyledHide, StyledImage as AboutStyledImage } from "../aboutSection/AboutSection.styles";

export const StyledFaq = styled(StyledAbout)`
  display:block;
  span{
    display:block;
  }
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background:#ccc;
    height:0.2rem;
    margin: 2rem 0;
    width:100%;
  }
  .question{
    padding:3rem 0;
    cursor:pointer;
  }
  .answer{
    padding:2rem 0;

    p{
      padding:1rem 0;
    }
  }
`;