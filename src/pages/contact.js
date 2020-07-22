import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"

export default function Contact({ data }) {
  return <Layout>This is the Contact page.</Layout>
}
