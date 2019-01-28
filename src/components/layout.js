import React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from './header';
import Archive from './archive';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/markus/" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Img fluid={data.file.childImageSharp.fluid} />
        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </>
    )}
  />
);

export default Layout;

// --------
// Styles
// --------
const MainLayout = styled.main`
  max-width: 90%;
  margin: 60px auto 0;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 2rem;
`;

const Footer = styled.footer`
  max-width: 90%;
  margin: 40px auto;
  a {
    color: #f012be;
  }
`;
