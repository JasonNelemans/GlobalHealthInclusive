import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Components
import Layout from "../components/Layout"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomepageBox(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            title
            createdAt
            content {
              json
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
