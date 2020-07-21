import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomepage {
        edges {
          node {
            homepageBoxes {
              slug
              title
              subTitle
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
            bottomBanner {
              title
              quote
              name
            }
            topBanner {
              title
              cover {
                title
                file {
                  url
                }
              }
              logo {
                title
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log("data: ", data)
  return (
    <div>
      <Layout></Layout>
    </div>
  )
}
