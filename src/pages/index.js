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
      <Layout>
        <TopBanner>
          <img
            className="cover-banner"
            src={
              data.allContentfulHomepage.edges[0].node.topBanner.cover.file.url
            }
            alt={data.allContentfulHomepage.edges[0].node.topBanner.cover.title}
          />
          {/* <img
            src={
              data.allContentfulHomepage.edges[0].node.topBanner.logo.file.url
            }
            alt={data.allContentfulHomepage.edges[0].node.topBanner.logo.title}
          /> */}
        </TopBanner>
      </Layout>
    </div>
  )
}

const TopBanner = styled.div`
  display: flex;
  justify-content: center;
`
