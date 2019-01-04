import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={data => (
      <aside>
        <h3>Archive</h3>
        <ul>
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.path}>
              <Link to={`/posts${edge.node.frontmatter.path}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    )}
  />
);

export default Archive;
