import React from "react"
import styled from "styled-components"

export default function TextContainer({ text }) {
  return <StyledTextContainer>{text}</StyledTextContainer>
}

const StyledTextContainer = styled.div`
  margin: 50px;
`
