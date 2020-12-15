import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { rhythm, scale } from '../utils/design';

const BlogPostTemplate = ({ location, data, pageContext }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <article>
        <h1
          css={css`
            font-size: 2.8rem;
            font-weight: 200;
            line-height: 3rem;
          `}
        >{post.frontmatter.title}</h1>
        <p
          css={
            css`
              font-size: 0.93rem;
              display: block;
              margin-bottom: ${rhythm(1)};
              margin-top: ${rhythm(-1)};
            `}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>

      <hr
        css={
          css`
            margin-bottom: ${rhythm(1)};
          `}
      />
      <Bio />

      <ul
        css={
          css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            list-style: none;
            padding: 0;
          `}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
