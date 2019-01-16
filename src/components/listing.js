import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <ArticlePreview key={edge.node.frontmatter.slug}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`/posts${edge.node.frontmatter.path}`}>Read More</Link>
        </ArticlePreview>
      ))
    }
  />
);

export default Listing;

// --------
// Styles
// --------

const ArticlePreview = styled.article`
  padding: 0 4rem 4rem 0;
  h2 {
    margin-bottom: 6px;
  }
  p:first-of-type {
    margin-bottom: 2rem;
    color: #aaa;
  }
  p:last-of-type {
    margin-bottom: 1rem;
  }
`;
