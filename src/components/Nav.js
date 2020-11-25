import React from 'react'
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <h1 id="logo">Metro</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height:10vh;
  display:flex;
  margin:auto;
  justify-content:space-between;
  align-items:center;
  padding: 1rem 10rem;
  background-color:#282828;
  ul{
    display:flex;
  }
  #logo{
    font-size:3rem;
    font-family:"Lobster",cursive;
    font-weight:lighter;
  }
  li{
    padding-left:10rem;
    position: relative;
  }

`

export default Nav
