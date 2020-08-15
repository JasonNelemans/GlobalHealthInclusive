import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import Head from "../components/Head"

export default function Contact({ data }) {
  console.log("data: ", data)
  return (
    <Layout>
      <Head title="Contact" />
      <ContactContainer>
        <div className="contact-text">
          <h3>{data.allContentfulContact.edges[0].node.content.title}</h3>
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
  line-height: 1.2em;
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

  h3 {
    font-size: 30px;
    margin-top: 0px;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    .contact-text {
      margin: 10px;
    }

    img {
      display: none;
    }
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
