import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import nilland from "../fonts/Nilland.ttf"

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
      <GlobalStyles nilland={nilland} />
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

export const GlobalStyles = createGlobalStyle`

  html {
    height: 100%;
    font-family: "Raleway", open sans;

    @font-face {
      font-family: 'nilland';
      src: ${props => `url(${props.nilland})`});
   }

   h1, h2, h3 {
     font-family: 'nilland';
     color: #219cbd;
   }

  }

  body {
    margin: 0;
  }

  p {
    font-family: 'Roboto', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: black;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #1cbbd3;
  }

  .active {
    color: #1cbbd3;
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
