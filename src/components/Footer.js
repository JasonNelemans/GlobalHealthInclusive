import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © 2020 Global Health Inclusive |{" "}
        <Link to="/disclaimer/">Disclaimer</Link>
      </p>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  text-align: center;
  padding-bottom: 30px;
  padding-top: 20px;
  background-color: #c4c4b3;
  color: #fff;
  font-weight: 100px;
`

export default Footer
