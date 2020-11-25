import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import { Award } from "../components/MovieDetail/Award";
import { MovieState } from "../movieState"
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";


const MovieDetailPage = () => {

  const history = useHistory();
  const url = history.location.pathname;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const currentMovie = MovieState.filter(movie => movie.url === url)
    setMovie(currentMovie[0])
  }, [url])
  return (
    <>
      {
        movie && (
          <StyledDetails
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <StyledHeadLine>
              <h2>{movie.title}</h2>
              <img src={movie.mainImg} alt="movie" />
            </StyledHeadLine>
            <StyledAwards>
              {
                movie?.awards?.map((award, id) => (
                  <Award key={id} title={award.title} description={award.description} />
                ))
              }
            </StyledAwards>
            <StyledImageDisplay>
              <img src={movie.secondaryImg} alt="movie" />
            </StyledImageDisplay>
          </StyledDetails>
        )
      }
    </>
  )
}


const StyledDetails = styled(motion.div)`
  color:white;
`
const StyledHeadLine = styled.div`
  min-height:90vh;
  padding-top:20vh;
  position:relative;
  h2{
    position:absolute;
    top:10%;
    left:50%;
    transform: translate(-50%,-10%)
  }
  img{
    width:100%;
    height:70vh;
    object-fit:cover;
  }
`;

const StyledAwards = styled.div`
  min-height:80vh;
  display:flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content:space-around;
`;

const StyledImageDisplay = styled.div`
  min-height:50vh;
  img{
    width:100%;
    height:100vh;
    object-fit:cover;
  }
  margin-bottom:1rem;
`

export default MovieDetailPage;