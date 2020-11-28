import { createGlobalStyle } from "styled-components/macro"

const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size:10px;
    
  }

  body {
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
  }
  button{
    font-weight:bold;
    font-size:2rem;
    font-family: "Inter", sans-serif;
    cursor:pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    color:white;
    transition:all 0.5s ease;
    &:hover{
      background-color:#23d997;
      color:white;
    }

  }
  h2{
    font-weight:lighter;
    font-size:3.2rem;
  }
  h3{
    color:white;
    font-size:2rem;
  }
  h4{
    font-weight:bold;
    font-size:2rem;
  }
  span{
    font-weight:bold;
    color:#23d997;
  }
  a{
    font-size:1.1rem;
    color:white;
    text-decoration:none;
  }
  ul{
    list-style:none;
  }
  p{
    padding:3rem 0;
    color:#ccc;
    font-size:2rem;
    line-height:150%;
  }

`;

export default GlobalStyles