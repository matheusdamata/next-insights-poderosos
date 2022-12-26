import { styled } from '..'

export const Container = styled('main', {
  width: '100%',
  height: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  '@media (min-width: 320px) and (max-width: 425px)': {
    flexDirection: 'column',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
})

export const LeftSide = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',

  letterSpacing: 1.15,
  color: '$gray800',

  marginLeft: '21.875rem',
  gap: '1rem',

  h1: {
    fontSize: '4rem',
  },

  span: {
    fontSize: '$md',
    fontWeight: 700,
    color: '$gray100',

    borderRadius: '15px',
    padding: '0.125rem 0.5rem',
    marginRight: '0.5rem',

    background: '$gray800',
  },

  p: {
    fontSize: '$md',
  },

  '@media (min-width: 425px) and (max-width: 1440px)': {
    marginLeft: 0,
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    gridRowStart: 2,

    margin: '0',

    h1: {
      fontSize: '2.75rem',
    },
  },
})

export const LeftSideButtons = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  marginTop: '1rem',
  gap: '1rem',

  button: {
    fontSize: '$md',
    color: '$gray100',

    border: 0,
    borderRadius: '8px',
    padding: '1rem',

    background: '$red300',
  },

  a: {
    textDecoration: 'none',
    color: '$gray800',
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    button: {
      fontSize: '1rem',
    },
  },
})

export const RightSide = styled('div', {
  display: 'flex',
  alignItems: 'center',

  img: {
    width: '100%',
    height: '600px',
    objectFit: 'cover',
    objectPosition: 'left',
  },

  '@media (min-width: 320px) and (max-width: 425px)': {
    margin: '0 0 -3.5rem',

    img: {
      height: '275px',
      margin: '2rem 2rem 6rem',
    },
  },
})
