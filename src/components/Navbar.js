import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

// Images
import logo from "../images/website_logo_transparent_background.png"

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width="137.5"
          height="125"
          className="logo"
        />{" "}
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about/" activeClassName="active">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact/" activeClassName="active">
            CONTACT
          </Link>
        </li>
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;

  img {
    margin: 0 10px;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
  }

  li {
    margin: 0 15px;
  }
`

export default Navbar
