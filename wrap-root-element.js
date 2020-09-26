import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code } from './src/components/code';
import { preToCodeBlock } from 'mdx-utils';

const components = {
  // eslint-disable-next-line react/display-name
  pre: preProps => {
    const props = preToCodeBlock(preProps);

    return props
      ? <Code {...props} />     // Highlight the <pre />
      : <pre {...preProps} />;  // Just render the <pre />
  }
};

export const wrapRootElement = ({ element }) =>
  <MDXProvider components={components}>{element}</MDXProvider>;
