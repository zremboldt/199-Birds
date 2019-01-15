import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

// Static Query
// Can be used anywhere but does not accept a variable.

// Page Query
// Must be used on pages, does accept variables.

const postLayout = props => {
  const { markdownRemark } = props.data;
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  );
};

export default postLayout;

// There's a bit of Gatsby magic going on here.
// There's no explicit hookup between the component above and the query below but
// the data will come into the component above none-the-less.
// For this to work though you have to use a named export and call it query here below.

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        path
      }
    }
  }
`;
