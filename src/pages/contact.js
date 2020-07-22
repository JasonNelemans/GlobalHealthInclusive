import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

export default function Contact({ data }) {
  console.log("data: ", data)
  return (
    <Layout>
      <ContactContainer>
        <div className="contact-text">
          {documentToReactComponents(
            data.allContentfulContact.edges[0].node.content.content.json
          )}
        </div>
        <img
          src={data.allContentfulContact.edges[0].node.content.image.file.url}
          alt={data.allContentfulContact.edges[0].node.content.image.file.url}
        />
      </ContactContainer>
    </Layout>
  )
}

const ContactContainer = styled.div`
  display: flex;
  margin: 65px auto;
  line-height: 2.1em;
  color: #7a7979;
  max-width: 1140px;

  .contact-text {
    margin-right: 30px;
  }

  img {
    object-fit: scale-down;
    height: auto;
    width: auto;
    max-width: 500px;
    max-height: 500px;
  }

  p {
    margin-top: 0;
  }

  a {
    text-decoration: underline;
  }
`

export const data = graphql`
  query {
    allContentfulContact {
      edges {
        node {
          content {
            title
            content {
              json
            }
            image {
              file {
                url
              }
              title
            }
          }
        }
      }
    }
  }
`
