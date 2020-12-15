import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

import { rhythm } from '../utils/design';

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata;

      return (
        <div
          css={css`
            display: flex;
            margin-bottom: ${rhythm(2.5)};
          `}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            css={css`
              margin-right: ${rhythm(1 / 2)};
              margin-bottom: 0;
              min-width: 50px;
              border-radius: 100%;
            `}
          />
          <p
            css={css`
              margin: 0;
              padding: 0;
            `}
          >
            Written by <strong>{author}</strong>, a general purpose software nerd, living
            and working in London.
            {' '}
            <a href={`https://twitter.com/${social.twitter}`}>
              You can follow me on Twitter
            </a>
          </p>
        </div>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
