import styled from "styled-components/macro"
import { Link } from "react-router-dom"

// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'



const OurWorkPage = () => {
  return (
    <StyledWork>
      <StyledMovie>
        <h2>The Athlete</h2>
      </StyledMovie>
    </StyledWork>
  )
}

const StyledWork = styled.div`
  min-height:98vh;
`;

const StyledMovie = styled.div`
  padding-left:10rem
`;

export default OurWorkPage
