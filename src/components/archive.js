import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from '@emotion/styled';

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 10
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
        <h3 style={{ color: '#f012be' }}>Archive</h3>
        <ArchiveList>
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.path}>
              <Link to={`/posts${edge.node.frontmatter.path}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    )}
  />
);

export default Archive;

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: sans-serif;
  a {
    color: #222;
  }
`;
