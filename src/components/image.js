import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// Struggled to find a good solution for dynamically grabbing lots of images at once.
// Found this solution here:
// https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05?m=MTU1MjY0MTA1NTE3Ng==

const Image = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      );
      if (!image) {
        return null;
      }
      return <Img fluid={image.node.fluid} />;
    }}
  />
);

export default Image;
