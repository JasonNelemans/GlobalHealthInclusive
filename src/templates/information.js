import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";

import Layout from "../components/Layout";
import Head from "../components/Head";

export const query = graphql`
  query($slug: String!) {
    contentfulInformationPosts(slug: { eq: $slug }) {
      title
      slug
      header {
        json
      }
      content {
        json
      }
    }
  }
`;

export default function Information(props) {
  return (
    <Layout>
      <Head title={props.data.contentfulInformationPosts.title} />
      <InformationContainer>
        <InformationText>
          <ReturnButton onClick={() => window.history.back()}>
            Return
          </ReturnButton>
          <div className="information-header">
            <em>
              {documentToReactComponents(
                props.data.contentfulInformationPosts.header.json
              )}
            </em>
          </div>
          {documentToReactComponents(
            props.data.contentfulInformationPosts.content.json
          )}
        </InformationText>
      </InformationContainer>
    </Layout>
  );
}

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const InformationText = styled.div`
  margin: 15px;
  max-width: 900px;
  line-height: 1.5;

  .information-header {
    margin: 30px 0;
  }
`;

const ReturnButton = styled.div`
  border: 2px solid #219cbd;
  color: #fff;
  border-radius: 5px;
  display: inline-block;
  padding: 3px;
  background-color: #219cbd;
  cursor: pointer;
`;
