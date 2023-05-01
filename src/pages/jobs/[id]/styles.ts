import { styled } from '@vagaspcd-ui/react'

export const Container = styled('main', {
  margin: '$10 auto',
  width: '80%',

  h2: {
    color: '$primary',
    marginBottom: '$4',
  },

  p: {
    color: '$black',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '$8',

  'button:first-child': {
    marginRight: '$4',
  },
})
