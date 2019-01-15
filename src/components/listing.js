import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';

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
        <article key={edge.node.frontmatter.slug}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.excerpt}</p>
          <Link to={`/posts${edge.node.frontmatter.path}`}>Read More</Link>
        </article>
      ))
    }
  />
);

export default Listing;
