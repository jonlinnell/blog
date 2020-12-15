/* eslint-disable react/jsx-key */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from '@emotion/styled';

import theme from '../utils/code-theme';

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  word-wrap: normal;
  overflow: scroll;
`;
 
const Line = styled.div`
  display: block;
`;
 
const LineNo = styled.span`
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;
 
const LineContent = styled.span`
  white-space: nowrap;
  display: inline-block;
`;

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
          <Pre className={className} style={{ ...style }}>
            {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      // tokens
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
            ))}
          </Pre>
        )}
      </Highlight>
  );
