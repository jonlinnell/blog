/* eslint-disable react/display-name */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';

import Code from './src/components/code';

const Paragraph = (props) => (
  <p
    {...props}
  />
);

const components = {
  p: Paragraph,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);

    return props
      ? <Code {...props} /> // Highlight the <pre />
      : <pre {...preProps} />; // Just render the <pre />
  },
};

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    {element}
  </MDXProvider>
);

export default wrapRootElement;
