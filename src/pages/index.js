import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
        <h1>This will be the body.</h1>
        <p>This is some text.</p>
      </Layout>
    </div>
  )
}
