import { css } from '@emotion/core';
import { MIN_TABLET_MEDIA_QUERY } from './breakpoints';

import { TOKENS, fonts, rhythm } from './design';

const globalStyles = css`
  html {
    box-sizing: border-box;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }

  body {
    font-size: ${TOKENS.FONT_SIZE_BASE};
    font-family: ${fonts(TOKENS.FONT_FACE_SERIF, 'sans-serif')};
    font-weight: ${TOKENS.FONT_WEIGHT_BASE};  
  
    line-height: ${TOKENS.LINE_HEIGHT_BASE};
    color: ${TOKENS.COLOUR_TEXT_PRIMARY};
  }

  h1 {
    font-family: ${TOKENS.FONT_FACE_SANS_SERIF};
  }

  h1,h2,h3,h4,h5,h6 {
    margin-top: ${rhythm(2.5)};
  }
  
  h4 {
    letter-spacing: '0.140625em';
    text-transform: 'uppercase';
  }
  
  a {
    color: ${TOKENS.COLOUR_BRAND_PRIMARY};
  }

  blockquote {
    margin-left: ${rhythm(-3 / 4)};
    margin-right: 0;
    padding-left: ${rhythm(9 / 16)}
  }

  blockquote:last-child {
    margin-bottom: 0;
  }

  blockquote cite {
    color: ${TOKENS.COLOUR_TEXT_PRIMARY};
    font-weight: ${TOKENS.FONT_WEIGHT_BASE};
  }

  blockquote cite:before {
    content: '"— "';
  }

  ${MIN_TABLET_MEDIA_QUERY} {
    blockquote {
      color: 'rgb(110, 110, 110)';
      font-style: italic;
      padding-left: ${rhythm(13 / 16)};
      margin-left: ${rhythm(-1)};
      border-left: ${rhythm(3 / 16)} solid rgb(100, 100, 100);
    }
  }
  
  ul, ol {
    margin-left: rhythm(1);
  }

  code {
    font-family: ${[TOKENS.FONT_FACE_MONOSPACE, 'Courier New'].join(', ')};
    font-size: 0.9rem;
    background-color: rgb(240, 240, 240);
  }
`;

export default globalStyles;
