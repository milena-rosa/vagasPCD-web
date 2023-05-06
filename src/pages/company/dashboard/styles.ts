import { Heading, Text, styled } from '@vagaspcd-ui/react'

export const Container = styled('div', {
  backgroundColor: '$black',
  display: 'flex',
  minHeight: '100vh',
})

export const MainSection = styled('main', {
  alignItems: 'center',
  color: '$white',
  flexDirection: 'column',
  height: '100%',
  margin: '0 auto',
  padding: '$10',
  width: '100%',

  [`> ${Heading}`]: {
    fontWeight: '$medium',
    marginBottom: '$1',
  },

  [`> ${Text}`]: {
    maxWidth: '70%',
  },
})
