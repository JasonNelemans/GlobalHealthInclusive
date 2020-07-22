import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

export default function About({ data }) {
  return (
    <Layout>
      <h1>This is the about page.</h1>
    </Layout>
  )
}
