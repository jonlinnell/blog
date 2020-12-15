import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, TOKENS } from '../utils/design';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={['blog', 'gatsby', 'javascript', 'react']}
      />
      <Bio />

      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <div key={node.fields.slug}>
            <h3
              css={css`
                font-family: ${TOKENS.FONT_FACE_SANS_SERIF};
                font-size: 1.44rem;
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link css={css`
                box-shadow: none;
                text-decoration: none;
              `} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small
              css={css`

              `}
            >{node.frontmatter.date}</small>
            <p
              css={css`
                margin: 0;
                padding: 0;
                margin-bottom: ${rhythm(3 / 2)};
              `}
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </div>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query AllPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {frontmatter: {published: {ne: false}}}
      sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            published
            title
          }
        }
      }
    }
  }
`;
