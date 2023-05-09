import { Heading, Text, styled } from '@vagaspcd-ui/react'

export const Container = styled('div', {
  backgroundColor: '$gray900',
  minHeight: '100vh',
})

export const MainSection = styled('div', {
  color: '$white',
  margin: '0 auto',
  padding: '$10',
  width: '80%',

  [`> ${Heading}`]: {
    fontWeight: '$medium',
    marginBottom: '$1',
  },

  [`> ${Text}`]: {
    maxWidth: '70%',
  },
})
