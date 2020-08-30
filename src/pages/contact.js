import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import {
  FaLinkedin,
  FaSkype,
  FaMobile,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

// Components
import Layout from "../components/Layout";
import Head from "../components/Head";

export default function Contact({ data }) {
  console.log("data: ", data);
  return (
    <Layout>
      <Head title="Contact" />
      <ContactContainer>
        <div className="contact-text">
          <h3>{data.allContentfulContact.edges[0].node.content.title}</h3>
          {documentToReactComponents(
            data.allContentfulContact.edges[0].node.content.content.json
          )}
          <br />
          <p>
            <FaMobile />{" "}
            <strong>
              {data.allContentfulContact.edges[0].node.content.mobile}
            </strong>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:info@globalhealthinclusive.com ">
              {data.allContentfulContact.edges[0].node.content.email}
            </a>
          </p>
          <p>
            <FaGlobe />{" "}
            <a href={data.allContentfulContact.edges[0].node.content.website}>
              {data.allContentfulContact.edges[0].node.content.website}
            </a>
          </p>
          <p>
            <FaLinkedin />{" "}
            <a href={data.allContentfulContact.edges[0].node.content.linkedin}>
              Christine Fenenga
            </a>
          </p>
          <p>
            <FaSkype />{" "}
            <a href="skype:christine.fenenga2?add">
              {data.allContentfulContact.edges[0].node.content.skype}
            </a>
          </p>
          <br />
          <div className="post-address">
            {documentToReactComponents(
              data.allContentfulContact.edges[0].node.content.address.json
            )}
          </div>
          <br />
          <div className="kvk-btw">
            <p>{data.allContentfulContact.edges[0].node.content.kvk}</p>
            <p>{data.allContentfulContact.edges[0].node.content.btw}</p>
          </div>
        </div>

        <img
          src={data.allContentfulContact.edges[0].node.content.image.file.url}
          alt={data.allContentfulContact.edges[0].node.content.image.file.url}
        />
      </ContactContainer>
    </Layout>
  );
}

const ContactContainer = styled.div`
  display: flex;
  margin: 65px auto;
  line-height: 1.2em;
  color: #7a7979;
  max-width: 1140px;

  .contact-text {
    margin-right: 30px;
    margin-left: 10px;
  }

  .post-address {
    p {
      margin: 0;
    }
  }

  .kvk-btw {
    p {
      margin: 0;
    }
  }

  img {
    object-fit: scale-down;
    height: auto;
    width: auto;
    max-width: 500px;
    max-height: 500px;
  }

  p {
    margin-top: 0;
  }

  a {
    text-decoration: underline;
  }

  h3 {
    font-size: 30px;
    margin-top: 0px;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    .contact-text {
      margin: 10px;
    }

    img {
      display: none;
    }
  }
`;

export const data = graphql`
  query {
    allContentfulContact {
      edges {
        node {
          content {
            title
            content {
              json
            }
            mobile
            email
            website
            linkedin
            skype
            address {
              json
            }
            kvk
            btw
            image {
              file {
                url
              }
              title
            }
          }
        }
      }
    }
  }
`;
