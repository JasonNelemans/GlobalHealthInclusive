import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import Slider from "../components/Slider"

export default function About({ data }) {
  console.log("data: ", data)
  return (
    <Layout>
      <AboutContainer>
        <div className="margin-maker">
          <div className="info-container">
            <div className="about-text">
              <h3>
                {data.allContentfulAbout.edges[0].node.aboutContent.title}
              </h3>
              {documentToReactComponents(
                data.allContentfulAbout.edges[0].node.aboutContent.content.json
              )}
            </div>
          </div>
          <div className="about-divider" />
          <Slider />
        </div>
      </AboutContainer>
    </Layout>
  )
}

const AboutContainer = styled.div`
  margin: 35px auto 70px;

  .margin-maker {
    margin: 10px;
  }

  .info-container {
    display: flex;
    justify-content: center;
  }

  .about-text {
    max-width: 1000px;
  }

  .about-divider {
    margin: 25px auto 0;
    border-top: 1px solid #31419d;
    max-width: 1000px;
  }

  h3 {
    font-size: 30px;
    color: #31419d;
    letter-spacing: 1.5px;
  }

  p {
    color: #a1a5a9;
  }

  b {
    color: black;
  }
`

export const data = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          aboutContent {
            title
            content {
              json
            }
          }
          testimonials {
            name
            credentials
            image {
              title
              file {
                url
              }
            }
            content {
              json
            }
          }
        }
      }
    }
  }
`
