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
        <div>
          {data.allContentfulHomepage.edges[0].node.homepageBoxes.map(box => {
            return (
              <Box key={box.title}>
                <div className="box-text">
                  <h2>{box.title}</h2>
                  <h3>{box.subTitle}</h3>
                  {documentToReactComponents(box.content.json)}
                </div>
                <img src={box.image.file.url} alt={box.image.title} />
              </Box>
            )
          })}
        </div>
        <BottomBanner>
          <div>
            {data.allContentfulHomepage.edges[0].node.bottomBanner.quote}
          </div>
          <div>
            {data.allContentfulHomepage.edges[0].node.bottomBanner.name}
          </div>
        </BottomBanner>
      </Layout>
    </div>
  )
}

const TopBanner = styled.div`
  display: flex;
  justify-content: center;
`
const Box = styled.div`
  display: flex;
  max-width: 940px;
  margin: 15px auto;
  background-color: #ffffff;
  border: 2px solid black;
`

const BottomBanner = styled.div`
  width: auto;
  background-color: #c4c4b3;
  margin-bottom: 60px;
`
