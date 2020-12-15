import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Global, css } from '@emotion/core';

import { rhythm, TOKENS } from '../utils/design';
import themeContext from '../utils/theme';
import globalStyles from '../utils/global-styles';
import { MIN_TABLET_MEDIA_QUERY } from '../utils/breakpoints';

const things = [
  '🧀',
  '🥖',
  '☕️',
  '🍌',
  '🥃',
  '🍻',
];

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  const { theme, toggleTheme } = useContext(themeContext);

  let header = location.pathname === rootPath
    ?
      <h1
        css={css`
          font-size: 3rem;
          margin-bottom: ${rhythm(1.5)};
          margin-top: 0;
          font-weight: 100;

          ${MIN_TABLET_MEDIA_QUERY} {
            font-size: 4rem;
          }
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: inherit;
          `}
          to={'/'}
        >
          {title}
        </Link>
      </h1>
    :
      <h3
        css={css`
          font-family: ${TOKENS.FONT_FACE_SANS_SERIF}, sans-serif;
          margin-top: 0;
          margin-bottom: ${rhythm(-1)};
        `}
      >
        <Link
          css={css`
            font-size: 1.66rem;
            font-weight: 200;
            box-shadow: none;
            text-decoration: none;
            color: inherit;
          `}
          to={'/'}
        >
          {title}
        </Link>
      </h3>;

  return (
    <>
      <Global styles={globalStyles} />
      <main
        css={css`
          margin-left: auto;
          margin-right: auto;
          max-width: ${rhythm(28)};
          padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
        `}
      >
        <header>{header}</header>
        {/* <div css={
          css`
            padding: 1em;
            outline: 1px solid #888;
          `}
        >
          <input type="checkbox" checked={theme === 'DARK'} onChange={() => toggleTheme()} />
          <span>{ theme }</span>
        </div> */}
        {children}
        <footer
          css={css`
            font-size: 0.8rem;
          `}
        >
          &copy; {new Date().getFullYear()}, Built with{' '}
          {things[Math.floor(Math.random() * things.length)]}
          in London.
        </footer>
      </main>
    </>
  );
};

export default Layout;
