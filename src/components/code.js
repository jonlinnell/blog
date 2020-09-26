/* eslint-disable react/jsx-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from '../utils/code-theme';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Code = ({ codeString, language, ...props }) =>
  props['react-live']
    ? (
      <LiveProvider
        code={codeString}
        noInline={true}
        theme={theme}
      >
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
    : (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={codeString}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '0.5rem' }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
  );
