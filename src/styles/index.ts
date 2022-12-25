import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray800: 'hsl(230, 29%, 20%)',
      gray600: 'hsl(230, 11%, 40%)',
      gray400: 'hsl(231, 7%, 65%)',
      gray100: 'hsl(207, 33%, 95%)',

      red300: 'hsl(0, 100%, 68%)',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
