import { styled } from '..'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'row',

  img: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
    objectPosition: 'left',
  },

  '@media (min-width: 320px) and (max-width: 375px)': {
    flexDirection: 'column',

    img: {
      margin: '2rem 2rem 6rem',
    },
  },
})

export const LeftSide = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',

  letterSpacing: 1.25,
  color: '$gray800',

  gap: '1rem',

  h1: {
    fontSize: '2.75rem',
  },

  span: {
    fontWeight: 700,
    color: '$gray100',

    borderRadius: '15px',
    padding: '0.125rem 0.5rem',
    marginRight: '0.5rem',

    background: '$gray800',
  },
})

export const LeftSideButtons = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  marginTop: '1rem',
  gap: '1rem',

  button: {
    color: '$gray100',

    border: 0,
    borderRadius: '8px',
    padding: '0.75rem',

    background: '$red300',
  },

  a: {
    textDecoration: 'none',
    color: '$gray800',
  },
})

export const RightSide = styled('div', {})
