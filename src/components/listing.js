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
        <Post key={edge.node.frontmatter.slug}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p class="date">{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`/posts${edge.node.frontmatter.path}`}>Read More</Link>
        </Post>
      ))
    }
  />
);

export default Listing;

// --------
// Styles
// --------

const Post = styled.article`
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.15);
  padding: 2rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  h2 {
    margin-bottom: 6px;
    font-size: 2.2rem;
  }
  .date {
    margin-bottom: 2rem;
    color: #999;
  }
  p:last-of-type {
    margin-bottom: 1rem;
  }
  a {
    color: #222;
    font-family: sans-serif;
    font-size: 0.9rem;
  }
`;
