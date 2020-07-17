import React from "react"
import styled, { createGlobalStyle } from "styled-components"

// Components
import Header from "./Header"
import Footer from "./Footer"

const Layout = props => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <GlobalStyles />
      <Wrapper>
        <Content>
          <Header />
          {props.children}
        </Content>
        <Footer />
      </Wrapper>
    </>
  )
}

const GlobalStyles = createGlobalStyle`

  html {
    height: 100%;
  }

  body {
    margin: 0;
  }

  h1, h2, h3 {
    font-family: 'Open Sans', sans-serif;
  }

  p {
    font-family: 'Roboto', sans-serif;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

export default Layout
