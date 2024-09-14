import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";

const NotFoundPage = ({ data }) => (
    <Layout>
      <h1>Page not found</h1>
      <p>{data.site.siteMetadata?.title || "Site Title"}</p>
    </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default NotFoundPage;
