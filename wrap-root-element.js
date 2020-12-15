/* eslint-disable react/display-name */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { css } from '@emotion/core';

import { Code } from './src/components/code';
import { ThemeProvider } from './src/utils/theme';

const Paragraph = (props) => <p
  css={css`
      margin: 0;
      padding: 0;
      margin-bottom: 1.66rem;

      font-weight: 300px;
      line-height: 1.85rem;
  `}
  {...props}
/>

const components = {
  p: Paragraph,
  pre: preProps => {
    const props = preToCodeBlock(preProps);

    return props
      ? <Code {...props} />     // Highlight the <pre />
      : <pre {...preProps} />;  // Just render the <pre />
  }
};

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ThemeProvider>
);
