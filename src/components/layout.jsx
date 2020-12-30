import React from 'react';
import { Link } from 'gatsby';
import { Global } from '@emotion/core';

import globalStyles from '../utils/global-styles';

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

  const header = location.pathname === rootPath
    ? (
      <h1>
        <Link
          to="/"
        >
          {title}
        </Link>
      </h1>
    )
    : (
      <h3>
        <Link
          to="/"
        >
          {title}
        </Link>
      </h3>
    );

  return (
    <>
      <Global styles={globalStyles} />
      <main>
        <header>{header}</header>
        {children}
        <footer>
          &copy;
          {' '}
          {new Date().getFullYear()}
          , Built with
          {' '}
          {things[Math.floor(Math.random() * things.length)]}
          in London.
        </footer>
      </main>
    </>
  );
};

export default Layout;
