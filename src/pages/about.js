import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import Slider from "../components/Slider"
import Head from "../components/Head"

export default function About({ data }) {
  return (
    <Layout>
      <Head title="About" />
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
            <img
              src={
                data.allContentfulAbout.edges[0].node.aboutContent.image.file
                  .url
              }
              alt={
                data.allContentfulAbout.edges[0].node.aboutContent.image.title
              }
            />
          </div>
          <div className="about-divider" />
          <Slider
            testimonials={data.allContentfulAbout.edges[0].node.testimonials}
          />
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
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    img {
      height: 40%;
      width: 30%;
      margin-top: 30px;
    }

    @media (max-width: 700px) {
      flex-direction: column;

      img {
        width: 60%;
      }
    }
  }

  .about-text {
    margin: 20px 50px;
  }

  .about-divider {
    margin: 95px auto 0;
    border-top: 1px solid #31419d;
    max-width: 1000px;
  }

  h3 {
    font-size: 30px;
    letter-spacing: 1.5px;
  }

  p {
    color: #a1a5a9;
  }

  i {
    color: #1cbbd3;
    margin-left: 25px;
  }

  @media (max-width: 700px) {
    margin: 0px;

    .about-text {
      margin: 0px;
    }
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
            image {
              title
              file {
                url
              }
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
