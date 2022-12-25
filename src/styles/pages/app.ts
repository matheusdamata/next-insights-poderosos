import { styled } from '..'

export const Container = styled('div', {
  maxWidth: '90rem',
  width: '100%',
  height: '100vh',

  margin: '0 auto',
  padding: '2rem',
})

export const Header = styled('header', {
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

  '@media (min-width: 320px) and (max-width: 375px)': {
    display: 'none',
  },
})

export const Circle = styled('div', {
  width: '0.4375rem',
  height: '0.4375rem',

  borderRadius: '100%',

  background: '$gray400',

  '@media (min-width: 320px) and (max-width: 375px)': {
    display: 'none',
  },
})

export const MenuMobile = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  border: 0,
  background: 'transparent',

  '@media (min-width: 376px) and (max-width: 1440px)': {
    display: 'none',
  },
})
