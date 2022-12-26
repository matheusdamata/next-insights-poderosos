import { styled } from '..'

export const Container = styled('div', {
  width: '100%',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  padding: '4rem 0',

  '@media (min-width: 425px) and (max-width: 1440px)': {
    padding: '4rem 2rem',
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    padding: '2rem',
  },
})

export const Header = styled('header', {
  maxWidth: '90rem',
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const MenuDesktop = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  gap: '1.5rem',

  a: {
    textDecoration: 'none',
    fontWeight: 700,
    color: '$gray800',
  },

  'a:last-child': {
    color: '$gray400',
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    display: 'none',
  },
})

export const Circle = styled('div', {
  width: '0.4375rem',
  height: '0.4375rem',

  borderRadius: '100%',

  background: '$gray400',

  '@media (min-width: 320px) and (max-width: 425px)': {
    display: 'none',
  },
})

export const MenuMobile = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 0,
  background: 'transparent',

  '@media (min-width: 426px)': {
    display: 'none',
  },
})
