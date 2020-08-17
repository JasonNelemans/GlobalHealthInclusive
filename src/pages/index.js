import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import nilland from "../fonts/Nilland.ttf"
import logo from "../images/website_logo_transparent_background.png"
import { GlobalStyles } from "../components/Layout"

export default function WelcomeScreen() {
  return (
    <StyledWelcomeScreen>
      <GlobalStyles />
      <h1>Welcome to</h1>
      <img src={logo} alt={logo} />
      <h3>
        Press{" "}
        <Link to="/home/" activeClassName="active">
          here
        </Link>{" "}
        to continue
      </h3>
    </StyledWelcomeScreen>
  )
}

const StyledWelcomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  a {
    color: #1cbbd3;
    text-decoration: underline;
  }
`
