import { styled } from '@vagaspcd-ui/react'

export const Container = styled('main', {
  margin: '$10 auto',
  width: '80%',

  h2: {
    color: '$primary',
    marginBottom: '$4',
  },
})

export const Box = styled('a', {
  backgroundColor: '$gray400',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '$4 0',
  padding: '$4',
  textDecoration: 'none',

  '&:nth-child(even)': {
    background: '$primary',
  },

  '&:hover': {
    filter: 'opacity(80%)',
  },
})

export const Footer = styled('footer', {
  margin: '$10 0',
})
