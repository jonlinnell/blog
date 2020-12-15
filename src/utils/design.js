import verticalRhythm from 'compass-vertical-rhythm';

export const TOKENS = {
  FONT_FACE_SERIF:      'Roboto Slab',
  FONT_FACE_SANS_SERIF: 'Raleway',
  FONT_FACE_MONOSPACE:  'Roboto Mono',
  FONT_SIZE_BASE:       '18px',
  FONT_WEIGHT_BASE:     '400',
  LINE_HEIGHT_BASE:     1.6,
  SCALE_RATIO:          5 / 2,

  COLOUR_TEXT_PRIMARY:  'rgb(50, 50, 50)',
  COLOUR_BRAND_PRIMARY: 'rgb(0, 122, 204)',
}

const numberFromPixels = value => Number(value.slice(0, -2));
const pixelsFromNumber = value => `${value}px`

export const { rhythm } = verticalRhythm({
  baseFontSize: TOKENS.FONT_SIZE_BASE,
  baseLineHeight: TOKENS.LINE_HEIGHT_BASE
});

export const scale = value => pixelsFromNumber(numberFromPixels(TOKENS.FONT_SIZE_BASE) * (value * TOKENS.SCALE_RATIO ));
export const fonts = (...fonts) => fonts.join(', ');

  //   ul: {
  //     listStyle: 'disc',
  //   },
  //   'ul,ol': {
  //     marginLeft: 0,
  //   },
  //   [MOBILE_MEDIA_QUERY]: {
  //     'ul,ol': {
  //       marginLeft: rhythm(1),
  //     },
  //     blockquote: {
  //       marginLeft: rhythm(-3 / 4),
  //       marginRight: 0,
  //       paddingLeft: rhythm(9 / 16),
  //     },
  //   },
  //   'h1,h2,h3,h4,h5,h6': {
  //     marginTop: rhythm(2),
  //   },
  //   h4: {
  //     letterSpacing: '0.140625em',
  //     textTransform: 'uppercase',
  //   },
  //   h6: {
  //     fontStyle: 'italic',
  //   },
  //   a: {
  //     boxShadow: '0 1px 0 0 currentColor',
  //     color: '#007acc',
  //     textDecoration: 'none',
  //   },
  //   'a:hover,a:active': {
  //     boxShadow: 'none',
  //   },
  //   'mark,ins': {
  //     background: '#007acc',
  //     color: 'white',
  //     padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
  //     textDecoration: 'none',
  //   },
  //   code: {
  //     fontFamily: [FONT_FACE_MONOSPACE, 'Courier New'].join(', '),
  //     fontSize: '0.9rem',
  //     backgroundColor: 'rgb(240, 240, 240)',
  //   }