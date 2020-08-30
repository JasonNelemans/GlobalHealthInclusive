import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import nilland from "../fonts/Nilland.ttf";

// Components
import Layout from "../components/Layout";
import Head from "../components/Head";

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <TopBanner
          src={
            data.allContentfulHomepage.edges[0].node.topBanner.cover.file.url
          }
          nilland={nilland}
        >
          <div className="banner-container">
            <img
              src={
                data.allContentfulHomepage.edges[0].node.topBanner.logo.file.url
              }
              alt={
                data.allContentfulHomepage.edges[0].node.topBanner.logo.title
              }
            />
            <h1>
              GLOBAL <br /> HEALTH <br /> INCLUSIVE
            </h1>
          </div>
        </TopBanner>
        <BoxContainer>
          {data.allContentfulHomepage.edges[0].node.homepageBoxes.map(
            (box, i) => {
              return (
                <Box key={box.title} uneven={i % 2}>
                  <div className="box-text">
                    <h3>{box.title}</h3>
                    <h3>{box.subTitle}</h3>
                    <div className="divider" />
                    {documentToReactComponents(box.content.json)}
                  </div>
                  <img
                    src={box.image.file.url}
                    alt={box.image.title}
                    width="376px"
                  />
                </Box>
              );
            }
          )}
        </BoxContainer>
        <BottomBanner>
          <div className="bb-container">
            <div className="quote">
              {documentToReactComponents(
                data.allContentfulHomepage.edges[0].node.bottomBanner.quote.json
              )}
            </div>
            <img
              src={
                data.allContentfulHomepage.edges[0].node.bottomBanner.image.file
                  .url
              }
              alt={
                data.allContentfulHomepage.edges[0].node.bottomBanner.image.file
                  .title
              }
              height="150px"
              width="20%"
            />
            <div>
              <p>
                <strong>
                  {data.allContentfulHomepage.edges[0].node.bottomBanner.name}
                </strong>
              </p>
            </div>
          </div>
        </BottomBanner>
      </Layout>
    </div>
  );
}

/*img {
  width: 100%;
  height: 300px;
  background-attachment: scroll, local;
  margin-top: 80px;
}*/

const TopBanner = styled.div`
  margin-top: 80px;
  height: 300px;
  background-image: ${props => (props.src ? `url(${props.src})` : "")};
  background-attachment: fixed;
  background-position: 30% 10%;
  background-repeat: no-repeat;
  background-size: cover;
  scroll-behavior: smooth;
  display: flex;
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: 'nilland';
    src: ${props => `url(${props.nilland})`});
 }

  .banner-container {
    display: inherit;
    width: auto;

  }

  img {
    max-height: 298px;
    object-fit: contain;
    margin-top: 15px;
  }

  h1 {
    color: white;
    font-size: 70px;
    letter-spacing: 3px;
    font-family: 'nilland';
    font-weight: 200;
    text-align: center;
  }

  @media (max-width: 700px) {
    background-attachment: scroll;

    .banner-container {
      transform: scale(0.4);
    }
  }
`;
const BoxContainer = styled.div`
  background-color: #eeeeee;
  padding-top: 50px;
  padding-bottom: 100px;
`;

const Box = styled.div`
  display: flex;
  max-width: 940px;
  margin: 35px auto;
  padding-top: 20px;
  background-color: #ffffff;
  justify-content: space-between;
  text-align: center;
  flex-direction: ${props => (props.uneven === 1 ? "row-reverse" : "row")};

  b {
    color: black;
    font-weight: 800;
  }

  img {
    margin: 0;
    object-fit: contain;
  }

  h2 {
    font-size: 30px;
    margin: 15px auto 0px;
  }

  h3 {
    margin: 10px auto 0px;
    font-size: 25px;
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    color: #1cbbd3;
  }

  .divider {
    margin: 10px auto 0px;
    border-bottom: 1px solid #eeeeee;
    max-width: 80px;
  }

  p {
    font-size: 15px;
    text-align: left;
    line-height: 1.3;
    color: #a1a5a9;
  }

  i {
    color: white;
    visibility: hidden;
  }

  .box-text {
    padding: 0 40px 10px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    margin: 15px;

    img {
      display: none;
    }
  }
`;

const BottomBanner = styled.div`
  width: auto;
  background-color: #c4c4b3;
  margin-bottom: 60px;
  padding: 20px;

  .bb-container {
    max-width: 940px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    line-height: 1.6em;
    color: #fff;

    p {
      color: #66686a;
    }
  }

  img {
    width: auto;
    border-radius: 100%;
  }
`;
export const data = graphql`
  query {
    allContentfulHomepage {
      edges {
        node {
          homepageBoxes {
            slug
            title
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
            quote {
              json
            }
            name
            image {
              title
              file {
                url
              }
            }
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
`;
