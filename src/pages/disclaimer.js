import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import Head from "../components/Head"

export default function Disclaimer({ data }) {
  return (
    <Layout>
      <Head title="Disclaimer" />
      <DisclaimerContainer>
        <div className="disclaimer-text">
          {documentToReactComponents(
            data.allContentfulDisclaimerPage.edges[0].node.content.json
          )}
        </div>
      </DisclaimerContainer>
    </Layout>
  )
}

const DisclaimerContainer = styled.div`
  background-color: #f7f7f7;
  line-height: 1.85714285714286;
  padding: 50px 50px 65px;

  .disclaimer-text {
    padding: 3em 6.67em;
    background-color: white;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 900px) {
      padding: 20px;
    }
  }

  h1 {
    color: #31419d;
  }

  p {
    color: #a1a5a9;
  }

  b {
    color: black;
  }

  @media (max-width: 900px) {
    padding: 40px;
  }
`

export const data = graphql`
  query {
    allContentfulDisclaimerPage {
      edges {
        node {
          title
          content {
            json
          }
        }
      }
    }
  }
`
