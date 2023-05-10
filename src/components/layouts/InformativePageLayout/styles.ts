import { styled } from '@vagaspcd-ui/react'

export const Container = styled('div', {
  backgroundColor: '$black',
  height: '100%',
})

export const ContentWrapper = styled('main', {
  backgroundColor: '$black',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: '$10',
  width: '80%',

  td: {
    color: '$gray100',
  },
})

export const Footer = styled('footer', {
  padding: '$5 0',
})
