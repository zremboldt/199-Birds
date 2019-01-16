import { Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import gatsbyLogo from '../images/gatsby-icon.png';

const Header = ({ siteTitle }) => (
  <HeaderCtr>
    <HeaderWrap>
      <Link to="/">
        <img src={gatsbyLogo} alt="" />
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </Link>
    </HeaderWrap>
  </HeaderCtr>
);

export default Header;

// --------
// Proptypes
// --------
Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

// --------
// Styles
// --------
const HeaderCtr = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  img {
    width: 80px;
    margin-bottom: 0;
  }
`;

const HeaderWrap = styled.div`
  max-width: 90%;
  margin: 0 auto 6rem;
  padding: 1rem 0;
  a {
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
