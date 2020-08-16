import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"
import { DisclaimerContainer } from "./disclaimer"

export default function Reviews({ data }) {
  return (
    <div>
      <Layout>
        <Head title="Reviews" />
        <DisclaimerContainer>
          <div className="disclaimer-text"></div>
        </DisclaimerContainer>
      </Layout>
    </div>
  )
}
