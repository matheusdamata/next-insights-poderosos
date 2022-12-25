import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    scrollBehavior: 'smooth',
  },

  ':focus': {
    outline: 0,
  },

  body: {
    backgroundColor: '$gray700',
    color: '$gray100',
    'webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Barlow Condensed',
    fontSize: '1rem',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },
})
