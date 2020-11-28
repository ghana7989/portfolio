import styled from "styled-components/macro";
import { StyledAbout, StyledDescription as AboutStyledDescription, StyledHide, StyledImage as AboutStyledImage } from "../aboutSection/AboutSection.styles";

export const StyledServices = styled(StyledAbout)`
  
  h2{
    padding-bottom: 5rem;
  }
  p{
    width:90%;
    padding: 2rem 0 4rem 0;
  }
`
export const StyledDescription = styled(AboutStyledDescription)`
  margin-right:auto;
`;

export const StyledImage = styled(AboutStyledImage)``;

export const StyledCards = styled.div`
  display:flex;
  flex-wrap:wrap;

`;

export const StyledCard = styled.div`
  flex-basis:20rem;
  .icon{
    display:flex;
    align-items:center;
  }
  img{
    margin-right:5px;
  }
  h3{
    margin-top:5px;
    margin-left:1rem;
    background:white;
    color:black;
    padding:1rem;
  }
`

