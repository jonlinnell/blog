import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

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

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { author, social } = data.site.siteMetadata;

      return (
        <div>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            className="rounded-full"
          />
          <p className="font-mono">
            Written by
            {' '}
            <strong className="">{author}</strong>
            , a general purpose software nerd, living
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

export default Bio;
