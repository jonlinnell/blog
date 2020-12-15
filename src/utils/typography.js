import Typography from 'typography';
import { MOBILE_MEDIA_QUERY } from './breakpoints';

const theme = {
  title: "Jon's Crappy Blog Theme",
  baseFontSize: '18px',
  baseLineHeight: 1.66,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: FONT_FACE_SANS_SERIF,
      styles: ['100', '200'],
    },
    {
      name: FONT_FACE_SERIF,
      styles: ['400', '400i', '700', '700i', '900', '900i'],
    },
    {
      name: FONT_FACE_MONOSPACE,
      styles: ['400'],
    },
  ],
  headerFontFamily: [FONT_FACE_SANS_SERIF, 'Georgia', 'serif'],
  bodyFontFamily: [FONT_FACE_SERIF, 'Georgia', 'serif'],
  bodyColor: 'rgb(50, 50, 50)',
  headerWeight: 200,
  bodyWeight: 300,
  boldWeight: 400,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontFamily: [FONT_FACE_SANS_SERIF, 'sans-serif'].join(','),
    },
    blockquote: {
      ...scale(1 / 6),
      color: 'rgb(110, 110, 110)',
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid rgb(100, 100, 100)`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      color: '#007acc',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
    code: {
      fontFamily: [FONT_FACE_MONOSPACE, 'Courier New'].join(', '),
      fontSize: '0.9rem',
      backgroundColor: 'rgb(240, 240, 240)',
    }
  }),
};

const typography = new Typography();

// Hot reload typography in development.
// if (process.env.NODE_ENV !== 'production') {
//   typography.injectStyles();
// }

