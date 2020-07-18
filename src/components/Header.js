import React from "react"
import styled from "styled-components"

// Components
import Navbar from "./Navbar"

const Header = () => {
  return (
    <StyledHeader>
      <Navbar />
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  border-bottom: 1px solid;
`

export default Header
