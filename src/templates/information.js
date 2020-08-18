import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String!) {
    contentfulInformationPosts(slug: { eq: $slug }) {
      title
      slug
      content {
        json
      }
    }
  }
`

export default function Information(props) {
  return (
    <Layout>
      <h1>{props.data.contentfulInformationPosts.title}</h1>
      {documentToReactComponents(
        props.data.contentfulInformationPosts.content.json
      )}
    </Layout>
  )
}
